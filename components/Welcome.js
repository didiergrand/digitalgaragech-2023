const Welcome = () => {
    return (
      <div className="welcome max-w-7xl mx-auto p-6 flex flex-col justify-center align-middle">
        <h1 className=" leading-tight">
          Bienvenue sur Digitalgarage
        </h1>
        <div className="sm:grid grid-cols-12 gap-4">
          <div className="col-start-1 sm:col-end-10 lg:col-end-8 pt-8 pb-8">
            <p>Web designer et développeur front-end chez SCOTT Sports, je réalise également des projets personnels et propose mes services aux entreprises et organisations qui cherchent à créer ou améliorer leur présence en ligne.</p>
            <p>Découvrez mes travaux et mes photos, explorez mes articles de blog et <a href="mailto:contact@digitalgarage.ch">n'hésitez pas à me contacter</a> pour discuter de votre projet web.</p>
            <p>Au plaisir de collaborer avec vous !</p>
            <p>
            <em>Didier Grand</em>
            </p>
          </div>
        </div>
    </div>
    );
  };
  
  export default Welcome;
  