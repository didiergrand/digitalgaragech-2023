import React, { useRef } from 'react';
import "../css/Masonry.css";

const MasonryGallery = ({ images }) => {
  const galleryRef = useRef(null);

  const items = images.map((image, index) => {

    return (
      <div className="item w-full p-3 pb-0 sm:mb-6" key={index}>
        <a href={/photos/+image.id}>
            <img src={image.rootPath+image.image} alt={image.alt} />
        </a>
      </div>
    );
  });

  return (
    <div ref={galleryRef} id="masonry-gallery" className="container mx-auto columns-1 gap-5 sm:columns-1 sm:gap-5 md:columns-2 lg:columns-3 [&>img:not(:first-child)]:mt-8">
      {items}
    </div>
  );
};

export default MasonryGallery;


