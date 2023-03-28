import AboutContent from "@component/components/About";
import Layout from "@component/components/Layout";


const About = () => {
    return (
        <Layout>
            <AboutContent />
        </Layout>
    );
  };
  
About.getInitialProps = () => {
    return { title: "À propos", 
             description: "Développeur web créatif, je vous propose des sites web personnalisés grâce à une solide expérience en développement front-end et une passion pour le design web. Particulièrement présent en Veveyse, dans la région de Châtel-St-Denis, Semsales, Attalens ou ailleurs dans le canton, que vous soyez une entreprise ou une société, je suis là pour vous aider à réaliser votre vision en matière de site web. Contactez-moi pour discuter de votre projet et découvrir comment nous pouvons travailler ensemble pour créer un site web qui vous ressemble." };
};

export default About;
  