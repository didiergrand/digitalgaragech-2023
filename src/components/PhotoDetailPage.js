// PhotoDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import photos from '../data/photos.json';

const PhotoDetailPage = () => {
  const { id } = useParams();
  const photo = photos.find(p => p.id === parseInt(id, 10));

  return (
    <div>
      <h1>{photo.title}</h1>
      <p>{photo.description}</p>
      <img src={photo.rootPath+photo.image} alt={photo.title} />
      <h2>Gallery</h2>
      <ul>
        {photo.images.map(image => (
          <li key={image}>
            <img src={photo.rootPath+image} alt={photo.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoDetailPage;
