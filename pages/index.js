import { useEffect, useState } from "react";
import LatestWork from "../components/LatestWork";
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

export default function Home() {
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
      <LatestBlogs posts={posts} />
      <hr className="mb-12" />
      <LatestWork />
      <PhotoGallery />
    </Layout>
  );
}
