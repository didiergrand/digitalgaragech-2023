// WebProjectIndexPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import webProjects from '../data/web-projects.json';

const WebProjectIndexPage = () => {
  return (
    <div>
      <h1>My web projects</h1>
      <ul>
        {webProjects.map(webProject => (
          <li key={webProject.id}>
            <Link to={`/web-projects/${webProject.id}`}>
              <h2>{webProject.title}</h2>
              <img src={webProject.image} alt={webProject.title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WebProjectIndexPage;
