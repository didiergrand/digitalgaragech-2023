// HomePage.js
import React from 'react';
import photos from '../data/photos.json';
import webProjects from '../data/web-projects.json';
import clients from '../data/clients.json';
import { useLocation } from 'react-router-dom';
import Welcome from "../components/Welcome";
import MasonryGallery from "../components/Masonry";

const HomePage = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      <Welcome/>
      <h2>My latest photos</h2>
      <MasonryGallery images={photos.slice(0, 20)} />
      <h2>My latest web project</h2>
      <ul>
        {webProjects.slice(0, 1).map(webProject => (
          <li key={webProject.id}>{webProject.title}</li>
        ))}
      </ul>
      <h2>What my clients said</h2>
      <ul>
        {clients.map(client => (
          <li key={client.quote}>{client.quote}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
