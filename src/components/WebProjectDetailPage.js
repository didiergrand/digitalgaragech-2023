// WebProjectDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import webProjects from '../data/web-projects.json';

const WebProjectDetailPage = () => {
  const { id } = useParams();
  const webProject = webProjects.find(p => p.id === parseInt(id, 10));

  return (
    <div>
      <h1>{webProject.title}</h1>
      <p>{webProject.description}</p>
      <img src={webProject.image} alt={webProject.title} />
      <h2>Screenshots</h2>
      <ul>
        {webProject.images.map(image => (
          <li key={image}>
            <img src={image} alt={webProject.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WebProjectDetailPage;
