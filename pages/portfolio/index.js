import Layout from "@component/components/Layout";
import PortfolioItem from "../../components/PortfolioItem";
// import comptoirWeb from "https://medias.digitalgarage.ch/sites/comptoir-veveyse-ch.jpg";
// import stMartinWeb from "https://medias.digitalgarage.ch/sites/saint-martin-fr-ch.jpg";
// import planWeb from "https://medias.digitalgarage.ch/sites/leplangourmand-ch.jpg";
// import stMartin2022Web from "https://medias.digitalgarage.ch/sites/st-martin2022-ch.jpg";
// import manuWeb from "https://medias.digitalgarage.ch/sites/manueltache-ch.jpg";
// import empreintegourmandeWeb from "https://medias.digitalgarage.ch/sites/empreintegourmande-ch.jpg";
// import desalpeWeb from "https://medias.digitalgarage.ch/sites/desalpe-semsales-ch.jpg";

const Portfolio = () => {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto p-6 pb-0 pt-12">
        <h2>Web</h2>
          <div class="grid grid-cols-12 gap-4">
            <div className="col-start-1 col-end-10 lg:col-end-9 pt-8 pb-8">
        <p>Je suis un web designer et développeur polyvalent. J’ai une grande expertise en développement front-end et je forme en continue  dans l’utilisation de technologies de de pointe telles que React ou NextJS pour créer des sites web fonctionnels et esthétiquement plaisants. Je suis également capable de créer des sites web rapidement en créant des thèmes personnalisés pour le CMS Wordpres ou des sites headless en associations avec les CMS les plus populaires, ce qui permet d’obtenir une flexibilité maximale en matière de conception et de fonctionnalité.
        <br /><br />
En tant que Front-end Web Developer chez Scott Sports, j’ai une grande expérience dans le développement de sites web performants et esthétiques. J’ai travaillé sur une grande variété de projets pour Scott, allant des sites web d’e-commerce aux applications web complexes. Je suis passionné par l’utilisation des dernières technologies de développement web pour créer des sites web qui offrent une expérience utilisateur de haut niveau.<br /><br />
J’ai plus de 20 ans d’expérience dans le domaine du web, ce qui me permet de fournir des services de développement web de qualité.
<br /><br />
Si vous cherchez un développeur web compétent et polyvalent, je suis là pour vous aider. <a href="mailto:contact@digitalgarage.ch">N'hésitez pas à me contacter</a> pour discuter de votre projet.</p>
</div></div>
        <h3 className="mt-20 sm:mb-10">Dernières réalisations</h3>
      </section>
      <PortfolioItem
        title="Commune de St-Martin"
        image="https://medias.digitalgarage.ch/sites/saint-martin-fr-ch.jpg"
        bgcolor="#81A1B7"
        link="https://www.saint-martin-fr.ch/"
        description="Bienvenue sur le site de la commune de Saint-Martin FR, un village accueillant situé au cœur de la magnifique région de la Veveyse. <br /><br />En tant qu’habitant de la commune, j’ai eu le plaisir de travailler sur cette nouvelle version du site web en mettant mon expertise à disposition de ce charmant village pour créer un site internet à son image. Grâce à une navigation simple et intuitive, vous pourrez facilement trouver toutes les informations pratiques dont vous avez besoin : horaires de l’administration, informations administratives et services, agenda des manifestations, etc. <br /><br />De plus, une section dédiée aux actualités et une section “pilier public” vous permettront de rester informé(e) de tout ce qui se passe à Saint-Martin FR. <br /><br />
        J’espère que mon travail vous aidera à trouver toutes les informations que vous recherchez."
      />
      <PortfolioItem
        title="Comptoir de la Veveyse"
        image="https://medias.digitalgarage.ch/sites/comptoir-veveyse-ch.jpg"
        bgcolor="#E8ECEF"
        link="https://comptoirveveyse.ch/"
        description="J’ai le plaisir de réaliser ce site internet depuis la première édition du Comptoir de la Veveyse.
        <br /> En tant que web designer passionné par la mise en valeur des projets locaux, j’ai mis mon expertise au service de cette manifestation qui valorise l'économie de la Veveyse, son artisanat et ses produits du terroir.  <br /> <br /> J’ai donc travaillé avec les organisateurs pour créer un site à la hauteur de l'événement : un site dynamique, clair et facile d’utilisation qui met en avant les exposants, les animations et les temps forts du Comptoir. <br /> <br /> Je suis honoré de contribuer à la promotion de chaque édition de ce rendez-vous incontournable de la région, et j’espère que mon travail continuera à aider à faire rayonner le Comptoir de la Veveyse."
      />
      <PortfolioItem
        title="ARBRacadabrant"
        image="https://medias.digitalgarage.ch/sites/semsales2020-ch.jpg"
        bgcolor="#B1CE02"
        link="https://www.semsales2020.ch/"
        description="En tant que membre de la fanfare l'Edelweiss de Semsales, j'ai eu l'opportunité de réaliser le site web semsales2020.ch pour promouvoir le spectacle ARBRacadabrant. Ce spectacle a été spécialement créé pour le 100e anniversaire de la fanfare par des artistes fribourgeois tels que Philippe Huwiler, Pierre Schmidhaüsler et Claude Mordasini. Les festivités auront lieu les 2 premiers week-ends de juillet 2023 sur la place de la vieille église de Semsales. <br /> <br /> J'ai utilisé Wordpress comme plateforme et j'ai créé un thème personnalisé ce qui m'a permis de donner au site un aspect moderne et dynamique pour que les visiteurs puissent facilement trouver toutes les informations importantes sur l'événement. Le site optimisé pour les mobiles permet aux utilisateurs de naviguer facilement depuis leur smartphone ou leur tablette afin d'avoir les informations utiles également lorsqu'ils sont sur la place de fête. <br /> <br /> 
 Le site semsales2020.ch est une vitrine pour l'événement ARBRacadabrant, fournissant des informations claires et précises sur le spectacle. Ce projet a été une occasion de mettre en pratique mes compétences en développement web et en design, tout en contribuant à la promotion de la fanfare."
      />
      <PortfolioItem
        title="Le Plan Gourmand"
        image="https://medias.digitalgarage.ch/sites/leplangourmand-ch.jpg"
        bgcolor="#C8812F"
        link="https://www.leplangourmand.ch/"
        description="Bienvenue sur le site du Plan Gourmand, votre service de food
        truck et traiteur préféré !
        <br />
        En tant que web designer passionné par la création de sites web
        pour les entreprises locales, j’ai eu le plaisir de travailler
        avec Le Plan Gourmand pour créer un site internet à leur image.
        <br /> J’ai eu l’opportunité de travailler sur leur projet grâce à
        <a href='https://maudephoto.ch' target='_blank'>Maude</a> qui m’avait et me fait toujours confiance pour son projet,
        prouvant ainsi que le bouche-à-oreille est encore un moyen
        efficace de promouvoir son entreprise.
        <br />
        Sur ce site, vous pourrez découvrir leur concept de food truck et
        traiteur, ainsi que leur passion pour les produits frais et de
        qualité. Vous trouverez également leurs menu, leurs tarifs et les
        différents événements qu’ils animent. Grâce à une navigation
        simple et intuitive, vous pourrez facilement trouver toutes les
        informations dont vous avez besoin pour nous contacter et pour
        réserver nos services."
      />
      <PortfolioItem
        title="71e giron des musiques de la Veveyse - Saint-Martin 2022"
        image="https://medias.digitalgarage.ch/sites/st-martin2022-ch.jpg"
        bgcolor="#AA06A5"
        link="https://www.st-martin2022.ch/"
        description="Je suis ravi de vous présenter le travail que j'ai réalisé pour le site web du 71e giron des musiques de la Veveyse.
        <br /><br />
        L'objectif était de concevoir un site web à la fois informatif et convivial pour tous les visiteurs, qu'ils soient musiciens, bénévoles ou simples curieux. J'ai donc travaillé en étroite collaboration avec la fanfare « L’Avenir de St-Martin» pour créer un site qui reflète l'esprit et la convivialité de cet événement annuel.
        <br /><br />
        J'ai mis en place une interface conviviale et facile à naviguer, pour permettre aux visiteurs de trouver rapidement toutes les informations utiles sur la manifestation : programme, informations pratiques, photos, ainsi qu'un formulaire permettant de s'inscrire à la journée des ressortissants ou un autre qui permettait de s'engager en tant que bénévole. 
        <br /><br />
        Pour le webdesign et pour mettre en évidence l'image dynamique de cette fête, je me suis inspiré du design du logo de l'événement, j'ai utilisé ses couleurs vives et ses bulle de bande dessinées.
        <br /><br />
        Je suis heureux d'avoir contribué à la promotion de cet événement et je suis convaincu que ce site web a été un outil précieux pour les visiteurs et les organisateurs du 71e giron des musiques de la Veveyse."
      />
    </Layout>
  );
};

export default Portfolio;
