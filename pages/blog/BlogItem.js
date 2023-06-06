import Image from "next/image";
import axios from 'axios';
import { useState, useEffect } from 'react';


const BlogItem = ({ id, title, image, slug, description }) => {
  const [imageUrl, setImageUrl] = useState('');
  console.log(image);
  useEffect(() => {
    if (image) {
      const fetchImageDetails = async () => {
        try {
          const response = await axios.get(
            `https://admin.digitalgarage.ch/wp-json/wp/v2/media/${image}`
          );
          const imageDetails = response.data;
          setImageUrl(imageDetails.source_url);
        } catch (error) {
          console.error('Erreur lors de la récupération des détails de l\'image', error);
        }
      };

      fetchImageDetails();
    } else {
      setImageUrl('https://medias.digitalgarage.ch/7--18122022-01-243A0087.jpg');
    }
  }, [image]);

  return (
      <div className="blogitem max-w-7xl mx-auto p-6 pb-0 pt-0 language-js">
          <div className="pt-8 mb-10 sm:mb-0">
            <h4 className="sm:mb-10"><a href={`/blog/${slug}`} as={`/blog/${slug}`}>{title}</a></h4>
            <Image
                src={imageUrl}
                width={1333}
                height={2000}
                alt={slug}
                unoptimized
              />
          </div>
          <div className="mt-10">
            <div className="mb-6" dangerouslySetInnerHTML={{ __html: description }} />
            
            <div>
                <a
                href={`/blog/${slug}`} as={`/blog/${slug}`}
                target="_blank"
                className="btn text-white bg-slate-900 hover:bg-slate-700 hover:text-white 
                dark:text-slate-900 dark:bg-white dark:hover:bg-slate-700 dark:hover:text-white 
                focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
              >
                Lire la suite
              </a>
            </div>
        </div>
      </div>
  );
};

export default BlogItem;
