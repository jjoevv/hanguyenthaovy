import React, { useState } from 'react';
import { Link } from 'react-scroll';

const SectionNavigator = () => {
  const sections = [
    { name: 'Home', to: 'home' },
    { name: 'About me', to: 'information' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  return (
    <div className="fixed right-6 bottom-6 flex flex-col items-center z-50">
      {sections.map((section, index) => (
        <div key={index} className={`flex flex-col items-center relative`}>
          {/* Button hình chữ nhật */}
          <Link
            to={section.to}
            smooth={true}
            duration={900}
            className={`bg-blue-dark opacitay-25 transition-all duration-300 ease-in-out 
              ${hoveredSection === section.name ? 'px-2 h-8 rounded-full' : 'w-8 h-8 rounded-full'} 
              flex items-center justify-center cursor-pointer`}
            onMouseEnter={() => setHoveredSection(section.name)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <span className={`text-white font-semibold `}>
              {hoveredSection === section.name ? section.name : section.name.charAt(0)}
            </span>
          </Link>

          {/* Đường nối giữa các button */}
          {index < sections.length - 1 && (
            <div className="w-1 h-4 bg-blue-light mx-2"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionNavigator;
