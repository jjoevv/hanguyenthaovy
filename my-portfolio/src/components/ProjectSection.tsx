import { projectsData, Project } from '../data/projectsection';

const ProjectSection = () => {
  return (
    <section id="projects" className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Cột 1: Latest Projects */}
          <div className="fixe left-0 flex items-center justify-center h-full md:h-screen md:w-1/5">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold transform -rotate-90 whitespace-nowrap">
              Latest Projects
            </h2>
          </div>

          {/* Cột 2 và 3: Dữ liệu projects */}
          <div className="">
            {projectsData.map((project: Project) => (
              <div key={project.id} className="flex flex-col md:flex-row items-center">
                {/* Cột 2: Thông tin dự án */}
                <div className="flex-1 md:w-1/2 lg:w-2/3 px-4">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">
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
                <div className="flex-1 flex justify-center items-center mt-4 md:mt-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto max-h-64 md:max-h-80 lg:max-h-96 object-cover mx-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
