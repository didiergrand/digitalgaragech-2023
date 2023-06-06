import { useEffect, useState } from "react";
import Layout from "@component/components/Layout";
import BlogItem from "./BlogItem";

// get data from json file
//const sortedData = blogData.items.sort((a, b) => b.id - a.id);

const Blog = props => {



  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://admin.digitalgarage.ch/wp-json/wp/v2/posts')
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <Layout>
      <section className="max-w-7xl mx-auto p-6 pb-0 pt-12">
        <h2>Blog</h2>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-start-1 col-end-10 lg:col-end-9 pt-8 pb-8">
          <div>Développeur web créatif, je vous propose des sites web personnalisés grâce à une solide expérience en développement front-end et une passion pour le design web. Particulièrement présent en Veveyse, dans la région de Châtel-St-Denis, Semsales, Attalens ou ailleurs dans le canton, que vous soyez une entreprise ou une société, je suis là pour vous aider à réaliser votre vision en matière de site web. Contactez-moi pour discuter de votre projet et découvrir comment nous pouvons travailler ensemble pour créer un site web qui vous ressemble.</div>
          </div>
        </div>
        <h3 className="mt-20 sm:mb-10">Derniers articles</h3>
      </section>
      <section className="blogitem max-w-7xl mx-auto p-0 pt-12 sm:grid grid-cols-3 gap-6">
      {/* Loop blog posts */}
      {posts.map(post => (
        <BlogItem
          key={post.id}
          id={post.id}
          title={post.title.rendered}
          image={post.featured_media} // This may need to be updated depending on how your WP instance is configured
          slug={post.slug}
          description={post.excerpt.rendered}
        />
      ))}
      </section>
    </Layout>
  );
};
export default Blog;
