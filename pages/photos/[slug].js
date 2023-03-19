import Layout from "@component/components/Layout";
import PhotoItem from '../../components/PhotoItem';


const PhotoDetail = () => {
  return (
    <Layout>
    <PhotoItem
      title="Photo"
      images={['photo-1.jpg', 'photo-2.jpg']}
      description="Description de la photo"
    />
    </Layout>
  );
};

export default PhotoDetail;