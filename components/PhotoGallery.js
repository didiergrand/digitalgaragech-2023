import PhotoItem from "./PhotoItem";

const PhotoGallery = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto p-6">
        <h2>Photos</h2>
        <div className="sm:grid grid-cols-12 gap-4">
          <div className="col-start-1 col-end-12 sm:col-end-7 lg:col-end-9 pt-8 pb-8">
            52 levers de soleil est mon projet photo actuel. Je vais me balader
            au lever du jour, principalement en Veveyse, dans le canton de
            Fribourg, en Suisse, pendant un an et présenter mon travail sur ce
            site et sur Instagram.
            <br />
            Comme j’adore faire de la photo dans la nature, ce projet va me
            permettre d’en faire régulièrement.
            <br />
            Alors si vous avez envie de me suivre dans cette aventure n’hésitez
            pas à vous abonner à mon compte instagram <a href="https://instagram.com/di_g" target="_blank">@di_g</a>.
          </div>
        </div>
        <h3 className="mt-20 sm:mb-10">Dernière publication</h3>

        <PhotoItem
          title="Les Alpettes, 5 mars"
          date="5.03.23"
          images={[
            "https://medias.digitalgarage.ch/photos/52/15/05032023-02-243A7354.jpg",
            "https://medias.digitalgarage.ch/photos/52/15/05032023-03-243A7362.jpg", // right grande image
            "https://medias.digitalgarage.ch/photos/52/15/05032023-04-243A7364.jpg",
          ]}
          horizontalimg="right"
          description="Balade vers les Alpettes, ambiance fraiche avec un lever de soleil qui réchauffe doucement l'ambiance."
          note="15/52 Levers de soleil"
        />
      </div>
    </section>
  );
};

export default PhotoGallery;
