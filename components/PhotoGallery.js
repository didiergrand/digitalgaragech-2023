import PhotoItem from "./PhotoItem";

const PhotoGallery = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto p-6">
        <h2>Photo</h2>
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
          title="Niremont, 27 mai"
          date="27.05.23"
          images={[
            "https://medias.digitalgarage.ch/photos/52/25/25-27052023-01-243A9901.jpg",
            "https://medias.digitalgarage.ch/photos/52/25/25-27052023-04-243A0040.jpg",
            "https://medias.digitalgarage.ch/photos/52/25/25-27052023-02-243A9955.jpg", // right grande image
          ]}
          horizontalimg="top"
          description="Un pti Niremont pour le plaisir, toujours calmos avec ma cheville 🚶‍♂<br />
          Bonne semaine à tous !"
          note="25/52 Levers de soleil"
        />
        
      </div>
    </section>
  );
};

export default PhotoGallery;
