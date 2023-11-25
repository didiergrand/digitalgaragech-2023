import { useEffect, useState } from "react";
import Layout from "@component/components/Layout";
import BlogItem from "./BlogItem";

// get data from json file
//const sortedData = blogData.items.sort((a, b) => b.id - a.id);

const Blog = props => {



  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://blog.digitalgarage.ch/wp-json/wp/v2/posts')
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
          <div>
            <p>Bienvenue sur mon blog !</p>
            <p>Passionné de développement front-end et de web design, c'est avec plaisir que je partage sur ce blog mes découvertes, mes astuces et mes connaissances.</p>
            <p>Vous y trouverez une diversité d'articles traitant de la création de sites web, du design et de tout ce qui contribue à une présence en ligne marquante. J'y publie mon point de vue, ainsi que du contenu à la fois informatif, inspirant et accessible, dans l'objectif de vous aider à valoriser votre présence sur le web.</p>
            <p>Je vous invite à explorer mes articles, à les partager et à me contacter si vous avez des questions ou des suggestions de sujets. Bonne lecture !</p></div>
          </div>
        </div>
      </section>
      <section className="blogitem max-w-7xl mx-auto p-0 pt-12">
        <h3 className="mt-20 sm:mb-10 p-6">Derniers articles</h3>
        {/* Loop blog posts */}
        <div className="sm:grid grid-cols-3 gap-6">
        {posts.map(post => (
          <BlogItem
            key={post.id}
            id={post.id}
            date={post.date}
            tags={post.tags}
            title={post.title.rendered}
            image={post.featured_media} // This may need to be updated depending on how your WP instance is configured
            slug={post.slug}
            description={post.excerpt.rendered}
          />
        ))}
        </div>
      </section>
    </Layout>
  );
};
Blog.getInitialProps = () => {
  return { title: "Explorations web captivantes : découvertes, astuces et inspirations pour une présence en ligne marquante" , 
  description: "Passionné de développement front-end et de web design, c'est avec plaisir que je partage sur ce blog mes découvertes, mes astuces et mes connaissances. Vous y trouverez une diversité d'articles traitant de la création de sites web, du design et de tout ce qui contribue à une présence en ligne marquante. J'y publie mon point de vue, ainsi que du contenu à la fois informatif, inspirant et accessible, dans l'objectif de vous aider à valoriser votre présence sur le web. Je vous invite à explorer mes articles, à les partager et à me contacter si vous avez des questions ou des suggestions de sujets. Bonne lecture !" };
};
export default Blog;
