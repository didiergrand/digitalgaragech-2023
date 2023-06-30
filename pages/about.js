import Layout from "@component/components/Layout";


const About = () => {
    return (
        <Layout>
        <section className="py-12">
            <div className="max-w-7xl mx-auto p-6">
            <h2 className="mb-12">Bienvenue sur Digitalgarage, espace créatif de Didier Grand</h2>
            <div className="sm:grid grid-cols-12 gap-4">
            <div className="col-start-1 sm:col-end-10 lg:col-end-8 pt-8 pb-8">
            <p>Je vous invite à découvrir mon univers où cohabitent passion, projets professionnels et personnels. Actuellement développeur front-end chez SCOTT Sports, je réalise également des projets personnels et propose mes services aux entreprises et organisations qui cherchent à créer ou améliorer leur présence en ligne.</p>
            <p>En complément de mes activités de web designer et développeur, j'ai récemment élargi mon spectre de compétences en me lançant dans la rédaction de blogs axés sur la création de sites web, le design et les réseaux sociaux dans le but d'aider chacun à optimiser sa présence sur le web.</p>
            <p>Amateur de photographie, je continue à publier mes clichés sur ce site, offrant ainsi un aperçu complet de mes compétences et de ma créativité.</p>
            <p>Je crois que chaque site web est unique, comme chaque entreprise ou société. Si un projet web vous tient à cœur, n'hésitez pas à me contacter pour en discuter et voir comment je peux vous aider à le concrétiser.</p>
            <p>Je vous souhaite une bonne visite sur mon site.</p>
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
  
  About.getInitialProps = () => {
    return { title: "Web développeur créatif, Didier Grand vous présente ses derniers travaux, articles de blog et ses photos." , 
    description: "Découvrez Digitalgarage, l'univers créatif de Didier Grand. Professionnel en développement front-end chez SCOTT Sports et passionné par la création de sites web, Didier partage ses compétences et son expertise en web design et rédaction de blog pour aider à optimiser votre présence en ligne. Explorez ses projets, découvrez ses clichés photographiques et contactez-le pour vos projets web." };
  };
  
export default About;
  