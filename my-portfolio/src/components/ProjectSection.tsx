import { useEffect, useRef, useState } from 'react';
import { projectsData, Project } from '../data/projectsection';

const ProjectSection = () => {

  const projectRefs = useRef<(HTMLDivElement | null)[]>([]); // Lưu các tham chiếu tới các project
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]); // Đánh dấu các project đã thấy

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));

          if (entry.isIntersecting) {
            // Khi vào màn hình, thu nhỏ lại
            setVisibleProjects((prevVisible) => [...prevVisible, index]);
          } else {
            // Khi ra khỏi màn hình, phóng to ra
            setVisibleProjects((prevVisible) =>
              prevVisible.filter((i) => i !== index)
            );
          }
        });
      },
      { threshold: 0.5 } // 0.5 tức là 50% project vào viewport thì trigger
    );

    projectRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
<section id="projects" className="py-12">
  <div className="container mx-auto flex flex-col md:flex-row">
    {/* Cột 1: Latest Projects */}
    <div className="hidden md:flex md:flex-col md:sticky md:top-0 md:h-screen md:items-center md:justify-center md:w-1/5">
      <h2 className="text-2xl text-gray-500 md:text-4xl lg:text-6xl transform rotate-90 whitespace-nowrap font-bold ">
        Latest Projects
      </h2>
    </div>

    {/* Phần Các Dự Án */}
    <div className="flex-1 md:w-4/5">
      {projectsData.map((project: Project, index: number) => (
        <div
          key={project.id}
          ref={(el) => (projectRefs.current[index] = el)}
          data-index={index}
          className={`flex flex-col md:mt-10 md:flex-row items-center h-screen transition-transform duration-700 ease-in-out transform ${
            visibleProjects.includes(index) ? 'scale-100' : 'scale-95'
          }`}
        >
          {/* Cột 2: Thông tin dự án */}
          <div className={` flex flex-col justify-center h-full md:order-1 order-2`}>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-4">
              {project.description}
            </p>
            <a
              href={project.link}
              className="text-blue-500 hover:underline mt-2 block"
            >
              View Details
            </a>
          </div>

          {/* Cột 3: Hình ảnh */}
          <div className="flex-1 flex justify-center items-center mt-4 md:mt-0 md:order-2 order-1 h-full bg-white p-1 rounded">
            <img
              src={project.image}
              alt={project.title}
              className="h-[70vh] max-w-full object-cover" // Đặt chiều rộng và chiều cao là 100% để chiếm hết không gian
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default ProjectSection;
