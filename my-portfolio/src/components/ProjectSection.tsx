import { useEffect, useRef, useState } from 'react';
import { projectsData, ProjectDetail } from '../data/projects'; // Import từ file projectsData.ts
import { Link, useNavigate } from 'react-router-dom';

const ProjectSection: React.FC = () => {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const [zoomedProject, setZoomedProject] = useState<number | null>(null); // To manage which project is zoomed
  const navigate = useNavigate()

  const handleZoom = (index: number, projectId: string) => {
    setZoomedProject(index);
    setTimeout(() => {
      navigate(`/projects/${projectId}`);
      setZoomedProject(null); // Reset zoom after animation
      //document.body.style.overflow = 'auto'; // Re-enable scrolling
    }, 490); // Adjust time to match the transition duration
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));

          if (entry.isIntersecting) {
            setVisibleProjects((prevVisible) => [...prevVisible, index]);
          } else {
            setVisibleProjects((prevVisible) =>
              prevVisible.filter((i) => i !== index)
            );
          }
        });
      },
      { threshold: 0.5 }
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
        <div className="flex-1 md:w-4/5 overflow-hidden gap-20">
          {projectsData.map((project: ProjectDetail, index: number) => (
            <div
              key={project.name}
              ref={(el) => (projectRefs.current[index] = el)}
              data-index={index}
              className={`flex flex-col md:mt-10 md:flex-row items-center h-screen transition-transform duration-600 ease-in-out transform ${visibleProjects.includes(index) ? 'scale-100' : 'scale-95'}
            ${zoomedProject === index ? 'relative z-50' : ''}
            `}
            >
              {/* Cột 2: Thông tin dự án */}
              <div className={`flex flex-col justify-center h-full md:order-1 order-2`}>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-4">
                  {project.introduction}
                </p>
                <Link
                  to={`/projects/${project.link}`} // Link to detail page with lowercase project name
                  className="text-blue-500 hover:underline mt-2 block"
                >
                  View Details
                </Link>
              </div>

              {/* Cột 3: Hình ảnh */}
              <div
                onClick={() => handleZoom(index, project.link)}
                className={`
                    flex-1 w-full flex justify-center items-center mt-4 md:mt-0 md:order-2 order-1 h-full bg-white rounded
                    ${zoomedProject === index
                    ? 'fixed inset-0 z-50 flex justify-center items-center bg-white scale-150 duration-700'
                    : 'transform scale-95'}
          `}>
                <picture className='overflow-hidden block'>
                  <img
                    src={project.image1}
                    alt={project.name}
                    className="h-[60vh]  object-cover hover:scale-105 ease-in duration-150" // Đặt chiều rộng và chiều cao là 100% để chiếm hết không gian
                  />
                </picture>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
