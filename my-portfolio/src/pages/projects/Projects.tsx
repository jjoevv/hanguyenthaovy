import React, { useEffect } from 'react';
import ProjectSection from '../../components/ProjectSection';

const Projects: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div className="p-4">
      <ProjectSection/>
    </div>
  );
};

export default Projects;
