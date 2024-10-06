import { useEffect, useRef, useState } from 'react';
import { informationData } from '../data/information'; // Đường dẫn đến file information
import ViewResumeButton from './ViewResume';
import art from '../assets/imgs/me.png'

const InformationSection = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it's in view
        }
      },
      { threshold: 0.2 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section id="information" ref={sectionRef} className="py-12">

       
            <div className={`p-7 bg-white w-full flex justify-center items-center px-auto
              transition-transform duration-1000 ease-in-out ${isVisible ? 'transform translate-y-10 ' : 'transform translate-y-20 opacity-0'}
            `}>
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 bg-gray-700 rounded text-white py-12 m-1 md:mx-20">
          
          {/* Cột 1: Mục tiêu, Thông tin giáo dục và Biểu tượng công cụ */}
          <div className="md:col-span-2 flex-1 p-4 flex flex-col md:mr-10">
            <div className='md:pl-8'>
              <div>
                <h2 className="text-2xl font-semibold mb-4 italic text-start ">Objective</h2>
                <p className="mb-4 text-justify">{informationData.objectives}</p>
              </div>
              <div className='mt-8'>
                <h3 className="text-2xl font-semibold mb-2 italic text-start">Education</h3>
                <p className="mb-2 ">School: {informationData.education.school}</p>
                <p className="mb-2 ">Major: {informationData.education.major}</p>
                <p className="mb-2 ">GPA: {informationData.education.gpa}</p>
                <p className="mb-4 ">Courses: {informationData.education.courses.join(', ')}</p>
              </div>
              {/* Icons for Contact */}
              <div className="flex space-x-4">
                {informationData.icons.map((item, index) => (
                  <div
                    key={index}
                    className="relative cursor-pointer group"
                    onMouseEnter={() => setHoveredIcon(item.name)}
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                  <img src={item.icon} className='h-8 w-8'/>
                    {hoveredIcon === item.name && (
                      <div className="absolute left-0 mt-2 p-2 bg-dark-green text-white rounded whitespace-nowrap">
                        {item.info}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cột 2: Kỹ năng mềm và Bộ kỹ năng */}
          <div className="flex-1  md:py-4 p-4">
            <h2 className="text-2xl font-semibold mb-4 italic">Soft Skills</h2>
            <ul className="list-disc pl-5 mb-4">
              {informationData.softSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mb-4 italic">Skill Set</h2>
            <ul className="list-disc pl-5 mb-4">
              {informationData.skillSet.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>

            {/* Công Cụ */}
            <h3 className="text-xl font-semibold mb-2 italic">Tools</h3>
            <div className="w-full flex md:justify-start justify-center items-center">
              {informationData.tools.map((tool, index) => (
                <img src={tool} key={index} className='h-8 mx-2 object-cover'/>
              ))}
            </div>

          

          </div>

          <div className='flex-1 md:p-0 p-4 sm:flex flex-col md:justify-start justify-center items-center'>
                <img src={art} className=' w-[80%] h-auto object-cover '/>
                
              <div className='mt-8 '>
              <h2 className="text-2xl font-semibold mb-4 italic text-start ">Resume</h2>
                <div className='w-full flex justify-center items-center'><ViewResumeButton/></div>
              </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default InformationSection;
