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
            <p>Je vous invite à découvrir une sélection de mes travaux personnels en développement front-end et web design. Chaque projet illustre ma passion pour la création digitale et représente un témoignage de mon expertise et de ma créativité.</p>
            <p>J'ai eu le plaisir de travailler avec une variété d'entreprises et d'organisations, contribuant à la réalisation de leurs objectifs numériques. Mon approche est centrée sur le design fonctionnel et esthétique, l'expérience utilisateur fluide, et l'authenticité de chaque projet.</p>
            <p>Vous avez un projet web qui vous tient à cœur? <a href="mailto:contact@digitalgarage.ch">N'hésitez pas à me contacter</a> pour en discuter et voir comment je peux vous aider à le concrétiser.</p>
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
export default Portfolio;
