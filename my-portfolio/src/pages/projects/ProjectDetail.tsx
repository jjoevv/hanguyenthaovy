import { useParams } from 'react-router-dom';
import { projectsData } from '../../data/projects';
import { useEffect } from 'react';
import BackToHomePageButton from '../../components/BackToHomePageButton';
import backgroundImage from '../../assets/imgs/bg.png'

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the project ID from the URL
  const project = projectsData.find((project) => project.link === id);


  useEffect(() => {
    //window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  if (!project) {
    return <div>Project not found</div>;
  }


  return (
    <div className="w-full mx-auto py-20  md:px-40"
      style={{
        backgroundAttachment: 'fixed', // Giữ hình nền cố định khi cuộn
        backgroundImage: `url(${backgroundImage})`, // Đặt hình nền
        backgroundPosition: 'center', // Căn giữa hình nền
        backgroundRepeat: 'no-repeat', // Không lặp lại hình nền
      }}
    >
      <div className='bg-white p-2'>
        <h1 className="lg:my-10 text-5xl font-bold flex justify-center">{project.name}</h1>
        <div className='w-full flex justify-center lg:my-10'>
          <img src={project.image2} className='h-[60vh]' />
        </div>
      </div>

      <div className='w-full mx-auto flex flex-col md:flex-row my-20'>
        <div className="hidden md:flex md:flex-col md:items-start md:justify-center md:w-1/4">
          <h2 className="text-2xl -translate-x-1/2 text-gray-300 md:text-4xl lg:text-6xl transform rotate-90 whitespace-nowrap font-bold ">
            Overview
          </h2>
        </div>


            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-14 lg:ml-10">
              {/* First Column */}
              <div>
                <h2 className="text-brunswick-green mb-5 border-brunswick-green text-4xl font-semibold pb-4 border-b-2 inline-block text-start">Overview</h2>
                <p className='text-lg'>{project.overview.overview}</p>
              </div>

              {/* Second Column */}
              <div className="">
                <h2 className="text-brunswick-green mb-5 border-brunswick-green text-4xl font-semibold pb-4 border-b-2 inline-block text-start">Role</h2>
                <p className='text-lg'>{project.overview.role}</p>
              </div>

              {/* Third Column */}
              <div className='md:16 '>
                <h2 className=" text-brunswick-green mb-5 border-brunswick-green text-4xl font-semibold pb-4 border-b-2 inline-block text-start">Scope</h2>
                <p className='text-lg'>{project.overview.scope}</p>
              </div>

              {/* Fourth Column */}
              <div className='md:16'>
                <h2 className="text-brunswick-green mb-5 border-brunswick-green text-4xl font-semibold pb-4 border-b-2 inline-block text-start">Tools</h2>
                <p className='text-lg'>{project.overview.tools}</p>
              </div>
            </div>
         
      </div>

      <div className=' mx-auto flex w-full md:flex-row py-20'>
        <div className="hidden md:flex md:flex-col md:items-start md:justify-center md:w-1/4">
          <h2 className="text-2xl -translate-x-1/2 text-gray-300 md:text-4xl lg:text-6xl transform rotate-90 whitespace-nowrap font-bold ">
            UI/UX Designss
          </h2>
        </div>

        <div className="">
          {project.contentSections.map((section, index) => (
            <div key={index} className="mb-14">
              <h2 className="text-3xl font-bold mb-2">{section.title}</h2>
              {section.paragraphs.map((paragraph, i) => (
                <p key={i} className="mb-2 text-lg">{paragraph}</p>
              ))}
              <div className="flex flex-col w-full">
                <div className='my-10'>
                  <img src={section.image} alt={section.title} className="h-[60vh] object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {
        project.sketch &&
        <>
          <div className=' mx-auto flex flex-col md:flex-row my-20'>
            <div className="hidden md:flex md:flex-col md:items-start md:justify-center md:w-1/4">
              <h2 className="text-2xl -translate-x-1/2 text-gray-300 md:text-4xl lg:text-6xl transform rotate-90 whitespace-nowrap font-bold ">
                Overview
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-14 lg:ml-10">

            </div>
          </div>
        </>
      }
      <BackToHomePageButton />
    </div>
  );
};

export default ProjectDetailPage;
