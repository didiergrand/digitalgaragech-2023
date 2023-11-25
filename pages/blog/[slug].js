import Layout from "@component/components/Layout";
import BlogDetailItem from "./BlogDetailItem";
import { useEffect, useState } from "react";
import { fetchImage } from '../../utils/imageUtils';
import BlogItem from "./BlogItem";
import { removeHTMLTags } from "../../utils/removeHTMLtags";

// Le composant pour votre page de blog
const BlogDetail = ({ post, similarPosts }) => {


  const [imageUrl, setImageUrl] = useState('https://medias.digitalgarage.ch/placeholder.png');

  useEffect(() => {
    const getImageUrl = async () => {
      const url = await fetchImage(post.featured_media || null);
      setImageUrl(url);
    };

    getImageUrl();
  }, [post.featured_media]);



  if (!post || !similarPosts) {
    // Afficher un indicateur de chargement ou un message d'erreur ici
    return <div>Chargement en cours...</div>;
  }
  // Affichez votre post ici

  return (
        <Layout>
          <BlogDetailItem
            post={post}
            slug={post.slug}
            date={post.date}
            content={post.content.rendered}
            title={post.title.rendered}
            imageUrl={imageUrl}
            similarPosts={similarPosts}
          />
          <hr className="mb-12 last:invisible" />
          {/* Articles similaires */}
          {similarPosts.length > 0 && (
          <div className="blogitem max-w-7xl mx-auto p-6 pb-0 pt-0 language-js">
          <h3>Articles similaires</h3>
          <div className="grid grid-cols-3 gap-8">
            {similarPosts.map((article) => (
              <BlogItem
                key={article.id}
                id={article.id}
                date={article.date}
                title={article.title.rendered}
                image={article.featured_media}
                slug={article.slug}
                description={article.excerpt.rendered}
              />
            ))}
          </div>
          </div>
          )}
        </Layout>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.params;

  const res = await fetch(
    `https://blog.digitalgarage.ch/wp-json/wp/v2/posts?slug=${slug}`
  );

  const posts = await res.json();
  const currentPost = posts[0];

  // Récupération de l'identifiant de la catégorie de l'article actuel
  const categoryId = currentPost?.categories[0];

  const similarPostsRes = await fetch(
    `https://blog.digitalgarage.ch/wp-json/wp/v2/posts?per_page=3&orderby=date&order=asc&status=publish&categories=${categoryId}&exclude=${currentPost.id}`
  );
  const similarPosts = await similarPostsRes.json();
  return {
    props: {
      post: currentPost,
      similarPosts,
      title: removeHTMLTags(currentPost.title.rendered),
      description: removeHTMLTags(currentPost.excerpt.rendered),

    },
  };
}
export default BlogDetail;




