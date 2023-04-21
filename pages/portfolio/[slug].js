import Layout from "@component/components/Layout";
import PortfolioDetailItem from "../../components/PortfolioDetailItem";
import portfolioData from "../../data/portfolioData.json";
import { useRouter } from "next/router";

const PortfolioDetail = ({ item }) => {
  const router = useRouter();
  const { slug } = router.query;

  const items = portfolioData.items.sort((a, b) => {
    return a.slug.localeCompare(b.slug);
  });

  const currentIndex = items.findIndex((item) => item.slug === slug);
  const prevItem = items[currentIndex - 1];
  const nextItem = items[currentIndex + 1];

  return (
    <Layout>
      <PortfolioDetailItem
        title={item.title}
        image={item.image}
        alt={item.alt}
        bgcolor={item.bgcolor}
        link={item.link}
        slug={item.slug}
        description={item.description}
        detail={item.detail}
      />
      <div className="bottomNav">
      {prevItem && (
          <div className="bottomNav-prev">
          <a  className="text-slate-900 dark:text-white" 
            href={`/portfolio/${prevItem.slug}`}
            title={`Découvrez la création du site web ${prevItem.title}`}
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="11"
            viewBox="0 0 24 11"
          >
            <path
              id="keyboard-arrow-left"
              d="M5.5,18a.5.5,0,0,1-.354-.146l-5-5a.513.513,0,0,1-.109-.163.505.505,0,0,1,0-.382.515.515,0,0,1,.108-.163l5-5a.5.5,0,0,1,.708.708L1.708,12H23.5a.5.5,0,0,1,0,1H1.708l4.146,4.146a.5.5,0,0,1,0,.707A.494.494,0,0,1,5.5,18Z"
              transform="translate(0 -6.997)"
              fill="#e8ecef"
              className="fill-current text-gray-900 dark:text-gray-200"
            />
          </svg>
          {prevItem.title}
          </a>
          </div>
      )}
      <div className="bottomNav-back">
        <a  className="text-slate-900 dark:text-white" 
          href={`/portfolio`}
          title={`Retour à toutes les réalisations du sites internet`}
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="512"
          height="512"
          viewBox="0 0 512 512"
        >
          <path
            id="Path_74"
            data-name="Path 74"
            d="M355.5,454.5h-99.6c-11,0-19.9-8.9-19.9-19.9c0-11,8.9-19.9,19.9-19.9h99.6c60.4,0,109.6-49.2,109.6-109.6
            s-49.2-109.6-109.6-109.6H74.7l65.7,65.6c3.8,3.8,5.8,8.8,5.9,14.1c0,5.3-2.1,10.3-5.8,14.1c-7.8,7.8-20.4,7.8-28.2,0l-99.6-99.6
            c-3.8-3.8-5.8-8.8-5.8-14.1c0-5.4,2.2-10.8,6.3-14.5l99.2-99.2c3.7-3.7,8.8-5.8,14.1-5.8c0,0,0,0,0.1,0c5.3,0,10.4,2.2,14.1,5.9
            c3.7,3.7,5.8,8.7,5.8,14c0,5.3-2.1,10.3-5.8,14.1l-65.5,65.6h280.6c82.4,0,149.4,67,149.4,149.4
            C504.9,387.5,437.9,454.5,355.5,454.5z"
            fill="#e8ecef"
            className="fill-current text-gray-900 dark:text-gray-200"
          />
        </svg>
          Toutes les réalisations web
        </a>
      </div>
      {nextItem && (
        <div className="bottomNav-next">
        <a  className="text-slate-900 dark:text-white" 
            href={`/portfolio/${nextItem.slug}`}
            title={`Réalisation du site internet ${nextItem.title}`}
          >
            {nextItem.title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="11"
            viewBox="0 0 24 11"
          >
            <path
              id="Path_73"
              data-name="Path 73"
              d="M18.5,18a.5.5,0,0,1-.354-.146A.494.494,0,0,1,18,17.5a.5.5,0,0,1,.146-.354L22.291,13H.5a.5.5,0,0,1,0-1H22.292L18.146,7.851a.5.5,0,0,1,.708-.707l5,5a.5.5,0,0,1,.109.545.477.477,0,0,1-.109.163l-5,5A.508.508,0,0,1,18.5,18Z"
              fill="#151720"
              className="fill-current text-gray-900 dark:text-gray-200"
            />
          </svg>
          </a>
        </div>
      )}
      </div>
    </Layout>
  );
};

PortfolioDetail.getInitialProps = ({ query }) => {
  const { slug } = query;
  const item = portfolioData.items.find((item) => item.slug === slug);
  return { item };
};

export default PortfolioDetail;
