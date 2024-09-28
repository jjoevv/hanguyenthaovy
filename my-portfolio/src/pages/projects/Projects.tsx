import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../../data/projects';

const Projects: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl">My Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
