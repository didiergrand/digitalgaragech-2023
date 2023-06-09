import Image from "next/image";
import Link from 'next/link';
import axios from 'axios';
import { useState, useEffect } from 'react';
import BlogItem from "./BlogItem";

const BlogDetailItem = ({ post, previousPost, nextPost, similarPosts }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImageDetails = async () => {
      try {
        const response = await axios.get(
          `https://admin.digitalgarage.ch/wp-json/wp/v2/media/${post.featured_media}`
        );
        const imageDetails = response.data;
        setImageUrl(imageDetails.source_url);
      } catch (error) {
        console.error('Erreur lors de la récupération des détails de l\'image', error);
      }
    };

    fetchImageDetails();
  }, [post.featured_media]);

  return (
    <div className="blogitem max-w-7xl mx-auto p-6 pb-0 pt-0 language-js">
      <div className="pt-8 mb-10 sm:mb-0">
        <h1 className="sm:mb-10">{post.title.rendered}</h1>
        <Image
          src={imageUrl ? imageUrl : 'https://medias.digitalgarage.ch/placeholder.png'}
          width={1333}
          height={2000}
          alt={post.slug}
          unoptimized
          className="featured_media"
        />
      </div>
      <div className="sm:grid grid-cols-12 gap-4">
        <div className="col-start-2 col-end-11 lg:col-start-3 lg:col-end-11 pt-8 pb-8">
          <div
            className="mb-6"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
      </div>

      <hr className="mb-12 last:invisible" />
      {/* Articles similaires */}
      {similarPosts.length > 0 && (
      <div>
      <h3>Articles similaires</h3>
      <div className="grid grid-cols-3 gap-8">
        {similarPosts.map((article) => (
          <BlogItem
            key={article.id}
            id={article.id}
            title={article.title.rendered}
            image={article.featured_media  ? article.featured_media : 'https://medias.digitalgarage.ch/placeholder.png'}
            slug={article.slug}
            description={article.excerpt.rendered}
          />
        ))}
      </div>
      </div>
      )}
      {/* Bouton précédent
      {previousPost && (
        <Link href={`/blog/${previousPost.slug}`}>
          {previousPost.title.rendered}
        </Link>
      )} */}

      {/* Bouton suivant 
      {nextPost && (
        <Link href={`/blog/${nextPost.slug}`}>
          {nextPost.title.rendered}
        </Link>
      )}*/}
    </div>
  );
};


export default BlogDetailItem;
