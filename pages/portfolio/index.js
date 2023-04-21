import Layout from "@component/components/Layout";
import PortfolioItem from "../../components/PortfolioItem";

// get data from json file
const portfolioData = require("../../data/portfolioData.json");
const sortedData = portfolioData.items.sort((a, b) => b.id - a.id);

const Portfolio = () => {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto p-6 pb-0 pt-12">
        <h2>Web</h2>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-start-1 col-end-10 lg:col-end-9 pt-8 pb-8">
            <p dangerouslySetInnerHTML={{ __html: portfolioData.description }} />
          </div>
        </div>
        <h3 className="mt-20 sm:mb-10">Dernières réalisations</h3>
      </section>
      {/* Loop json content */}
      {sortedData.map((item) => (
        <PortfolioItem
          id={item.id}
          title={item.title}
          image={item.image}
          alt={item.alt}
          bgcolor={item.bgcolor}
          link={item.link}
          slug={item.slug}
          description={item.description}
        />
      ))}
    </Layout>
  );
};

Portfolio.getInitialProps = () => {
  return {
    title: "Portfolio",
    description:
      "Développeur web créatif, je vous propose des sites web personnalisés grâce à une solide expérience en développement front-end et une passion pour le design web. Particulièrement présent en Veveyse, dans la région de Châtel-St-Denis, Semsales, Attalens ou ailleurs dans le canton, que vous soyez une entreprise ou une société, je suis là pour vous aider à réaliser votre vision en matière de site web. Contactez-moi pour discuter de votre projet et découvrir comment nous pouvons travailler ensemble pour créer un site web qui vous ressemble.",
  };
};
export default Portfolio;
