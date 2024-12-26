import { useParams } from 'react-router-dom';
import { projectsData } from '../../data/projects';
import { useEffect } from 'react';
import BackToHomePageButton from '../../components/BackToHomePageButton';
import backgroundImage from '../../assets/imgs/bg.png'
import ScrollToTopButton from '../../components/ScrollToTopButton';
import Detail from './Detail';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the project ID from the URL
  const project = projectsData.find((project) => project.link === id);


  useEffect(() => {
   window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  if (!project) {
    return <div>Project not found</div>;
  }


  return (
 <>
 {
  project.list ? 
  <Detail/>
  :
  <>
     <div className=" container mx-auto py-20 md:px-40 bg-slate-50"
      style={{
        backgroundAttachment: 'fixed', // Giữ hình nền cố định khi cuộn
        backgroundImage: `url(${backgroundImage})`, // Đặt hình nền
        backgroundPosition: 'center', // Căn giữa hình nền
        backgroundRepeat: 'no-repeat', // Không lặp lại hình nền
      }}
    >
      <div className='bg-white p-2'>
        <h1 className="lg:my-10 md:text-5xl text-4xl font-bold flex justify-center text-center">{project.name}</h1>
        <div className='flex justify-center lg:my-10 md:mt-0 mt-10'>
          <img src={project.image2} className='lg:h-[60vh] md:h-[60vh] scale-110  object-contain mt-4' />
        </div>
      </div>

      <div className='w-full mx-auto flex flex-col md:flex-row md:my-20 md:py-20 py-10'>
      <div className=" md:flex md:flex-col md:sticky md:top-0 md:h-screen md:items-center md:justify-center md:w-1/5">
        <h2 className="hidden md:flex text-2xl text-dark-green  md:text-gray-400 md:text-4xl lg:text-6xl lg:sticky lg:top-40 transform lg:rotate-90 md:rotate-90 whitespace-nowrap font-bold ">
            Overview
          </h2>
        </div>


        <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-14 lg:ml-10  md:p-0 p-4">
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
          <div className=' '>
            <h2 className=" text-brunswick-green mb-5 border-brunswick-green text-4xl font-semibold pb-4 border-b-2 inline-block text-start">Scope</h2>
            <p className='text-lg'>{project.overview.scope}</p>
          </div>

          {/* Fourth Column */}
          <div className=''>
            <h2 className="text-brunswick-green mb-5 border-brunswick-green text-4xl font-semibold pb-4 border-b-2 inline-block text-start">Tools</h2>
            <p className='text-lg'>{project.overview.tools}</p>
          </div>
          {/* Process */}
          {project.process.isProcess && (
            <div className=" my-6 lg:col-span-2">
              <div className=''>
                <h2 className="text-brunswick-green mb-5 border-brunswick-green text-4xl font-semibold pb-4 border-b-2 inline-block text-start">Process</h2>
                {project.process.content.map((paragraph, i) => (
                  <p key={i} className="mb-4 text-lg leading-relaxed">{paragraph}</p>
                ))}
              </div>
              <div className=''>
                {
                  project.process.image.map((img,i)=>(
                    <img
                    key={i}
                    src={img}
                    className={`md:h-[70vh] w-auto object-contain rounded-lg my-4`}
                  />
                  ))
                }
              </div>
            </div>
          )}
         
        </div>

      </div>
      {project.sketch.isSketch && (
       <div className="my-10 lg:col-span-2  md:p-0 p-4">
       <div>
         <h2 className="text-brunswick-green mb-5 border-brunswick-green text-4xl font-semibold pb-4 border-b-2 inline-block text-start">Sketches</h2>
         {project.sketch.content.map((paragraph, i) => (
           <p key={i} className="mb-4 text-lg leading-relaxed">{paragraph}</p>
         ))}
       </div>
       <div className="flex justify-center">
         <img
           src={project.sketch.image}
           className="md:h-[60vh] object-contain rounded-lg"
           alt="Sketch"
         />
       </div>
     </div>
     
      )}

      <div className=' mx-auto flex w-full md:flex-row flex-col md:py-20 p-4'>
      <div className=" md:flex md:flex-col md:sticky md:top-0 md:h-screen md:items-center md:justify-between md:w-1/5">
      <h2 className="text-2xl text-dark-green  md:text-gray-400 md:text-4xl lg:text-6xl lg:sticky lg:top-40 transform lg:rotate-90 md:rotate-90 whitespace-nowrap font-bold ">
            Protoype
          </h2>
        </div>

        <div className="w-full">
      
          {project.contentSections.map((section, index) => (
            <div
              key={index}
              className={`mb-14 ${section.image.full ? 'grid grid-cols-1 lg:grid-cols-2 gap-6' : ''}`}
            >
              {/* Content Section */}
              <div className={`${section.image.full ? 'lg:sticky top-60 self-start' : ''} w-full`}>
                <h2 className="text-3xl font-bold mb-4 text-brunswick-green">{section.title}</h2>
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className="mb-4 text-lg leading-relaxed">{paragraph}</p>
                ))}
              </div>

              {/* Image Section */}
              {section.image && (
                <div className="w-full flex my-6 lg:p-4 md:p-4 bg-white justify-center">
                  <img
                    src={section.image.src}
                    alt={section.title}
                    className={`${section.image.full ? 'w-full h-auto' : 'scale-105 object-contain'} rounded-lg`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

     
      <BackToHomePageButton />
      <ScrollToTopButton/>
    </div>
  </>
 }
 </>
  );
};

export default ProjectDetailPage;
