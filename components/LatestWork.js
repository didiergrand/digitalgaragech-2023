import PortfolioItem from "./PortfolioItem";

const portfolioData = require("../data/portfolioData.json");
const sortedData = portfolioData.items.sort((a, b) => b.id - a.id);

const LatestWork = () => {

  return (
    <>
      <section className="portfolioitem max-w-7xl mx-auto p-6 pb-0 pt-12">
        <h2>Web</h2>
        <h3 className="mt-20">Dernière réalisation</h3>
      </section>
      {/* get the latest item of portfolioData.json */}
      {sortedData.slice(0, 1).map((item) => (
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
    </>
  );
};

export default LatestWork;
