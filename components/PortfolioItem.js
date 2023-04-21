import Image from "next/image";

const PortfolioItem = ({ id, title, image, alt, bgcolor, link, slug, description }) => {
  return (
    <>
      <section className="portfolioitem max-w-7xl mx-auto p-6 pb-0 pt-0">
        <div className="sm:grid grid-cols-12 gap-6">
          <div className="col-start-1 sm:col-end-6 lg:col-end-7 pt-8 mb-10 sm:mb-0">
              <Image
                  src={image}
                  alt={alt}
                  style={{ backgroundColor: bgcolor }}
                  width={1333}
                  height={2000}
                  unoptimized
                />
            </div>
            <div className="sm:col-start-7 lg:col-start-8 col-end-12">
              <h4 className="sm:mb-10"><a href={`/portfolio/${slug}`} as={`/portfolio/${slug}`}>{title}</a></h4>
              <div className="mb-6" dangerouslySetInnerHTML={{ __html: description }} />
              <p>
                Si vous désirez en savoir plus sur ce projet ou que vous souhaitez
                réaliser un site similaire <a href="mailto:contact@digitalgarage.ch">
                  n’hésitez pas à me contacter.
                </a>
            </p>
            <div>
                <a
                href={link}
                target="_blank"
                className="btn text-white bg-slate-900 hover:bg-slate-700 hover:text-white 
                
                dark:text-slate-900 dark:bg-white dark:hover:bg-slate-700 dark:hover:text-white 
                          focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
              >
                Visitez le site
              </a>
            </div>
          </div>
        </div>
      </section>
      <hr className="mb-12 last:invisible" />
    </>
  );
};

export default PortfolioItem;
