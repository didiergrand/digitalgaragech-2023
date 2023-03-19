import Layout from "@component/components/Layout";
import PortfolioItem from '../../components/PortfolioItem';


const PortfolioDetail = () => {
  return (
    <Layout>
        <PortfolioItem
        title="Nom de la réalisation"
        image="portfolio-item.jpg"
        description="Description de la réalisation"
        />
    </Layout>
  );
};

export default PortfolioDetail;
