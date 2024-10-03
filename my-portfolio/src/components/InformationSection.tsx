import { useState } from 'react';
import { informationData } from '../data/information'; // Đường dẫn đến file information

const InformationSection = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  return (
    <section id="information" className="py-12">
      <div className='p-7 bg-white'>
        <div className="container mx-auto flex flex-col md:flex-row bg-black-light text-white py-12 m-1">
          
          {/* Cột 1: Mục tiêu, Thông tin giáo dục và Biểu tượng công cụ */}
          <div className="flex-1 md:w-1/2 p-4 flex flex-col items-center">
            <div className='md:pl-8 md:w-96'>
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
                  <img src={item.icon}/>
                    {hoveredIcon === item.name && (
                      <div className="absolute left-0 mt-2 p-1 bg-black text-white rounded">
                        {item.info}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cột 2: Kỹ năng mềm và Bộ kỹ năng */}
          <div className="flex-1 md:w-1/2 p-4">
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
            <div className="flex space-x-4">
              {informationData.tools.map((tool, index) => (
                <div key={index} className="w-8 h-8 bg-gray-300 flex items-center justify-center">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
