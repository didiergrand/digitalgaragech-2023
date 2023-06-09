import Layout from "@component/components/Layout";


const About = () => {
    return (
        <Layout>
        <section className="py-12">
            <div className="max-w-7xl mx-auto p-6">
            <h2 className="mb-12">À propos</h2>
            <div className="sm:grid grid-cols-12 gap-4">
            <div className="col-start-1 sm:col-end-10 lg:col-end-8 pt-8 pb-8">
            <p>Bienvenue sur mon espace numérique !</p>
            <p>C'est avec joie que je vous invite à découvrir mon univers où cohabitent passion, projets professionnels et personnels. Actuellement en poste chez SCOTT Sports en tant que développeur front-end, je travaille également sur quelques projets personnels. Mon expertise se retrouve au service des entreprises, organisations et sociétés qui font appel à mes services pour la création de leurs sites web.</p>
            <p>En complément de mes activités de web designer et développeur, j'ai récemment ajouté une nouvelle corde à mon arc : la rédaction d'articles de blog autour de la création de sites web. C'est un moyen pour moi de partager mes connaissances, conseils et astuces pour aider chacun à mettre en valeur sa présence en ligne.</p>
            <p>Toujours animé par la photographie, je continue à exposer mes clichés sur ce site, offrant ainsi un aperçu complet de mes compétences et de ma créativité.</p>
            <p>Je crois que chaque site web est unique, comme chaque entreprise ou société. Si un projet web vous tient à cœur, que vous souhaitez le lancer ou l'améliorer, n'hésitez pas à me contacter pour en discuter et voir comment je peux vous aider à le concrétiser.</p>
            <p>Au plaisir de vous accueillir sur mon site et de vous accompagner dans vos projets web.</p>
            <p>Didier Grand <br />
                <a href="mailto:contact@digitalgarage.ch">contact@digitalgarage.ch</a>
            </p>
        </div>
        </div>
        </div>
        </section>
        </Layout>
    );
  };
  
export default About;
  