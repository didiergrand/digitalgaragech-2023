import Image from "next/image";
import PortfolioItem from "./PortfolioItem";

const LatestWork = () => {
  return (
    <>
      <section className="portfolioitem max-w-7xl mx-auto p-6 pb-0 pt-12">
        <h2>Web</h2>
        <h3 className="mt-20">Dernière réalisation</h3>
      </section>
      <PortfolioItem
        title="Comptoir de la Veveyse"
        image="https://medias.digitalgarage.ch/sites/comptoir-veveyse-ch.jpg"
        bgcolor="#E8ECEF"
        link="https://www.comptoir-veveyse.ch/"
        description="J’ai le plaisir de réaliser ce site internet depuis la première édition du Comptoir de la Veveyse.
        <br /> En tant que web designer passionné par la mise en valeur des projets locaux, j’ai mis mon expertise au service de cette manifestation qui valorise l'économie de la Veveyse, son artisanat et ses produits du terroir. <br /> <br /> J’ai donc travaillé avec les organisateurs pour créer un site à la hauteur de l'événement : un site dynamique, clair et facile d’utilisation qui met en avant les exposants, les animations et les temps forts du Comptoir. <br /> <br /> Je suis fier de contribuer à la promotion de chaque édition de ce rendez-vous incontournable de la région, et j’espère que mon travail continuera à aider à faire rayonner le Comptoir de la Veveyse."
      />
    </>
  );
};

export default LatestWork;
