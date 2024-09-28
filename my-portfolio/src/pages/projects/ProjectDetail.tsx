import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../data/projects';

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl">{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetail;
