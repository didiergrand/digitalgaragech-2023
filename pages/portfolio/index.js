import Layout from "@component/components/Layout";
import PortfolioItem from "../../components/PortfolioItem";
import Clients from "@component/components/Clients";

// get data from json file
const portfolioData = require("../../data/portfolioData.json");
const sortedData = portfolioData.items.sort((a, b) => b.id - a.id);

const Portfolio = () => {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto p-6 pb-0 pt-12">
        <Clients />
      </section>
      <section className="max-w-7xl mx-auto p-6 pb-0 pt-12">
        <h3 className="mt-20 sm:mb-10">Dernières réalisations</h3>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-start-1 col-end-10 lg:col-end-9 pt-8 pb-8">
            <p>Je vous invite à découvrir une sélection de mes travaux personnels en développement front-end et web design.</p>
            <p>Web designer et développeur front-end chez SCOTT Sports, je réalise également des projets personnels et propose mes services aux entreprises et organisations qui cherchent à créer ou améliorer leur présence en ligne.</p>
            <p>Je suis particulièrement actif pour la création de sites web à Châtel-St-Denis et dans la région. Ces dernières années, j’ai réalisé les sites pour les communes de Semsales, Saint-Martin, Attalens, Bossonnens et Granges (Veveyse). J’ai également eu le plaisir de réaliser plusieurs sites pour les girons de musiques et de jeunesse. Je réalise également des sites web pour des PME qui me sollicitent.</p>
            <p>Vous avez un projet web qui vous tient à cœur? <a href="mailto:contact@digitalgarage.ch">N'hésitez pas à me contacter</a> pour en discuter et voir comment je peux vous aider à le concrétiser.</p>
          </div>
        </div>
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
  return { title: "Création de sites internet à Châtel-St-Denis, Semsales, Saint-Martin, Attalens, Bossonnens et Granges Veveyse." , 
  description: "Je suis particulièrement actif pour la création de sites web à Châtel-St-Denis, et dans la région. Ces dernières années j’ai réalisé les sites pour les communes de Semsales, Saint-Martin, Attalens, Bossonnens et Granges Veveyse. J’ai eu également eu le plaisir de réaliser plusieurs sites pour les girons de Musiques et de Jeunesse. Je réalise également des sites web pour des PME qui me sollicitent pour la création de leur site web." };
};
export default Portfolio;
