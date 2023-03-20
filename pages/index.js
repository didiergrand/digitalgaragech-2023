import HeroBanner from "../components/HeroBanner";
import LatestWork from "../components/LatestWork";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import PhotoGallery from "../components/PhotoGallery";
import Layout from "@component/components/Layout";
import Welcome from "@component/components/Welcome";

export default function Home() {
  return (
    <Layout>
        <Welcome />
        <hr className="mb-12" />
        <LatestWork />
        <PhotoGallery />
    </Layout>
  );
}
