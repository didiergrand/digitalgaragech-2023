import { useEffect, useState } from "react";
import LatestWork from "../components/LatestWork";
import PhotoGallery from "../components/PhotoGallery";
import Layout from "@component/components/Layout";
import Welcome from "@component/components/Welcome";
import LatestBlogs from "@component/components/LatestBlogs";

export default function Home() {
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
      <Welcome />
      <hr className="mb-12" />
      <LatestBlogs posts={posts} />
      <hr className="mb-12" />
      <LatestWork />
      <PhotoGallery />
    </Layout>
  );
}
