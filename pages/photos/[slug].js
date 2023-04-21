import Layout from "@component/components/Layout";
import PortfolioDetailItem from '../../components/PortfolioDetailItem';


const PhotoDetail = () => {
  return (
    <Layout>
    <PortfolioDetailItem
      title="Photo"
      images={['photo-1.jpg', 'photo-2.jpg']}
      description="Description de la photo"
    />
    </Layout>
  );
};

export default PhotoDetail;