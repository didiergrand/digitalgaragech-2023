// AboutPage.js
import React from 'react';
import about from '../data/about.json';

const AboutPage = () => {
  return (
    <div>
      <h1>{about.name}</h1>
      <p>{about.bio}</p>
    </div>
  );
};

export default AboutPage;
