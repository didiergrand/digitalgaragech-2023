const Welcome = () => {
    return (
      <div className="welcome max-w-7xl mx-auto p-6 flex flex-col justify-center align-middle">
        <h1 className=" leading-tight">
          Bienvenue sur Digitalgarage
        </h1>
        <div className="sm:grid grid-cols-12 gap-4">
          <div className="col-start-1 sm:col-end-10 lg:col-end-8 pt-8 pb-8">
            <p>Je suis un web designer et développeur créatif passionné de photographie. Je suis fier de présenter mes travaux personnels et mes photos sur ce site afin que vous puissiez en apprendre davantage sur mes compétences et ma créativité.</p>
            <p>
            Développeur front-end chez SCOTT Sports, je travaille également sur des projets personnels et je mets mon expérience à contribution pour la conception de sites web pour les entreprises, les organisations ou les sociétés qui me sollicitent.</p>
            <p>Fort de ces expériences, je publie également régulièrement des articles sur mon blog, où je partage mes connaissances et mes découvertes dans le domaine du développement web.</p>
            <p>
            Si vous avez un projet web qui vous tient à cœur, <a href="mailto:contact@digitalgarage.ch">n'hésitez pas à
            me contacter</a> pour en discuter et voir comment je peux vous aider à le concrétiser.</p>
            <p>
            Je vous souhaite une agréable visite sur mon site !</p>
            <p>
            <em>Didier Grand</em>
            </p>
          </div>
        </div>
    </div>
    );
  };
  
  export default Welcome;
  