import Image from "next/image";
import { useState, useEffect } from 'react';
import { fetchImage } from '../../utils/imageUtils';
import { formatDate } from '../../utils/dateUtils'; 
import { fetchPostTags } from '../../utils/tagsUtils';

const BlogItem = ({ title, date, image, slug, description }) => {  

  const [imageUrl, setImageUrl] = useState('https://medias.digitalgarage.ch/placeholder.png');
  useEffect(() => {
    const getImageUrl = async () => {
      const url = await fetchImage(image || null);
      setImageUrl(url);
    };
    getImageUrl();
  }, [image]);


  const [tags, setTags] = useState([]);
  useEffect(() => {
    async function fetchTags() {
      try {
        const tags = await fetchPostTags(slug);
        setTags(tags);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTags();
  }, []);
  
const originalDate = date;
const formattedDate = formatDate(originalDate);

  return (
      <div className="blogitem max-w-7xl mx-auto p-6 pb-0 pt-0 language-js">
          <div className="pt-8 mb-10 sm:mb-0">
            <h4 className="sm:mb-10"><a href={`/blog/${slug}`} as={`/blog/${slug}`}
            dangerouslySetInnerHTML={{ __html: title }} /></h4>
            <a href={`/blog/${slug}`} as={`/blog/${slug}`}>
            <Image
                src={imageUrl}
                width={1333}
                height={2000}
                alt={slug}
                className="featured_media"
                unoptimized
              />
            </a>
          </div>
          <div className="mt-10 relative">
            <small className="date">
              {formattedDate}
            </small>
            {tags && tags.length > 0 && (
              <div className="tags">
                {tags.map((tag) => (
                  <span key={tag} className={`tag ${tag.replace(/\/|\s/g, '').toLowerCase()}`}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div className="mb-6 mt-3" dangerouslySetInnerHTML={{ __html: description }} />
            
            <div>
                <a
                href={`/blog/${slug}`} as={`/blog/${slug}`}
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
