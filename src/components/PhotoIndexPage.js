// PhotoIndexPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import photos from '../data/photos.json';

const PhotoIndexPage = () => {
  return (
    <div>
      <h1>My photos</h1>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <Link to={`/photos/${photo.id}`}>
              <h2>{photo.title}</h2>
              <img src={photo.image} alt={photo.title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoIndexPage;
