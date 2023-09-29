import { useEffect, useState } from "react";
import Clients from "../components/Clients";
import PhotoGallery from "../components/PhotoGallery";
import Layout from "@component/components/Layout";
import Welcome from "@component/components/Welcome";
import LatestBlogs from "@component/components/LatestBlogs";


const fetchPosts = async () => {
  try {
    const res = await fetch('https://admin.digitalgarage.ch/wp-json/wp/v2/posts');
    const responseData = await res.json();
    return responseData;
  } catch (error) {
    console.error('Erreur lors de la récupération des articles', error);
    return [];
  }
};

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };

    getPosts();
  }, []);

  return (
    <Layout>
      <Welcome />
      <hr className="mb-12" />
      <Clients />
      <PhotoGallery />
      <hr className="mb-12" />
      <LatestBlogs posts={posts} />
    </Layout>
  );
}


Home.getInitialProps = () => {
  return { title: "Web développeur créatif, Didier Grand vous présente ses derniers travaux, articles de blog et ses photos." , 
  description: "Création de sites internet à Châtel-St-Denis, Semsales, Saint-Martin, Attalens, Bossonnens et Granges Veveyse. Découvrez mes travaux et mes photos, explorez mes articles de blog et n'hésitez pas à me contacter pour discuter de votre projet web." };
};
export default Home;

