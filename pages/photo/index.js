import Layout from "@component/components/Layout";
import PhotoItem from "../../components/PhotoItem";
import HeroBanner from "@component/components/HeroBanner";

const PhotoGallery = () => {
  return (
    <Layout>
      <HeroBanner />

      <section className="max-w-7xl mx-auto p-6 pb-0 pt-12 photos">
        <h2>Photo</h2>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-start-1 col-end-10 lg:col-end-9 pt-8 pb-8">
            <p>
              52 levers de soleil est mon projet photo actuel. Je vais me
              balader au lever du jour, principalement en Veveyse, dans le
              canton de Fribourg, en Suisse, pendant un an et présenter mon
              travail sur ce site et sur Instagram.
              <br />
              <br />
              Comme j’adore faire de la photo dans la nature, ce projet va me
              permettre d’en faire régulièrement.
              <br />
              <br />
              Alors si vous avez envie de me suivre dans cette aventure <a href="https://www.instagram.com/di_g">n’hésitez pas à vous abonner à mon compte instagram @di_g</a>.
            </p>
          </div>
        </div>
        <h3 className="mt-20 sm:mb-10">Mes photos</h3>




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
        
        <PhotoItem
          title="Les Pléiades-sur-Vevey, 20 mai"
          date="20.05.23"
          images={[
            "https://medias.digitalgarage.ch/photos/52/24/24-200520232-03-243A9771.jpg",
            "https://medias.digitalgarage.ch/photos/52/24/24-200520232-02-243A9757.jpg", // right grande image
            "https://medias.digitalgarage.ch/photos/52/24/24-200520232-01-243A9737.jpg",
          ]}
          horizontalimg="top"
          description="Aller voir les narcisses et un test de la cheville en même temps 👍. Joli tour aux Pleiades, ça fait plaisir de pouvoir retourner se balader. Tranquille quand même..."
          note="24/52 Levers de soleil"
        />

        <PhotoItem
          title="Saint-Martin (Fribourg), 6 mai"
          date="06.05.23"
          images={[
            "https://medias.digitalgarage.ch/photos/52/23/23-06052023-03-243A9482.jpg",
            "https://medias.digitalgarage.ch/photos/52/23/23-06052023-02-243A9466.jpg", // right grande image
            "https://medias.digitalgarage.ch/photos/52/23/23-06052023-01-243A9386.jpg",
          ]}
          horizontalimg="top"
          description="Parfois, un imprévu peut nous faire découvrir des merveilles juste sous notre nez. Avec mon entorse à la cheville du we dernier, ma balade s'est réduite à une mini-expédition autour de chez moi. J'ai capturé ce moment de calme en photos, avant que ma journée ne se termine plus mouvementée qu'elle n'a commencé."
          note="23/52 Levers de soleil"
        />

        <PhotoItem
          title="Moléson, 30 avril"
          date="30.04.23"
          images={[
            "https://medias.digitalgarage.ch/photos/52/22/TDR23-04-243A9305.jpg",
            "https://medias.digitalgarage.ch/photos/52/22/TDR23-07-243A9314.jpg", // right grande image
            "https://medias.digitalgarage.ch/photos/52/22/TDR23-08-243A9328.jpg",
          ]}
          description="Magnifique balade matinale autour du Moléson avec une belle pliée de cheville pour pimenter la fin de parcours."
          note="22/52 Levers de soleil"
        />

        <PhotoItem
          title="Col de Soladier, 18 mars"
          date="23.04.23"
          images={[
            "https://medias.digitalgarage.ch/photos/52/21/21-23042023-01-243A7898.jpg",
            "https://medias.digitalgarage.ch/photos/52/21/21-23042023-02-243A7915.jpg", // right grande image
            "https://medias.digitalgarage.ch/photos/52/21/21-23042023-03-243A7923.jpg",
          ]}
          description="Dimanche matin, je suis allé au col de Soladier. Mercredi dernier quand j’étais au col de Lys, je me suis souvenu qu'on a un magnifique point de vue de là-bas. Joli point de vue effectivement, fidèle à mes souvenirs, mais alors, y’avait encore un paquet de neige. Je me suis fait avoir comme un bleu, comme on dit. Le plan était de faire le Molard et le Folly qui se trouvent sur la route du retour quand on passe par la passerelle de Fégire pour le retour, mais non, finalement pas, c’était un peu trop casse-pattes avec toute la neige qu’il y avait encore par endroits. Mais c’était tout de même une très belle virée, à refaire quand il n’y aura plus de neige et que le soleil sera moins timide!<br />
          Bonne semaine !"
          note="21/52 Levers de soleil"
        />
        <PhotoItem
          title="Col de Lys, 19 avril"
          date="19.04.23"
          images={[
            "https://medias.digitalgarage.ch/photos/52/20/20-19042023-06-243A7892.jpg", // 
            "https://medias.digitalgarage.ch/photos/52/20/20-19042023-05-243A7850.jpg",
            "https://medias.digitalgarage.ch/photos/52/20/20-19042023-07-243A7896.jpg",
          ]}
          horizontalimg="top"
          description="Quoi de mieux que d'aller rencontrer le soleil au Pralet et au col de Lys pour commencer cette belle journée. 😎"
          note="20/52 Levers de soleil"
        />
        <PhotoItem
          title="Gros-de-Vaud, 6 avril"
          date="06.04.23"
          images={[
            "https://medias.digitalgarage.ch/photos/52/19/19-06042023-02-243A7723.jpg",
            "https://medias.digitalgarage.ch/photos/52/19/19-06042023-03-243A7729.jpg", // right grande image
            "https://medias.digitalgarage.ch/photos/52/19/19-06042023-04-243A7734.jpg",
          ]}
          horizontalimg="top"
          description="Balade matinale à vélo au bord du lac Léman et retour par le Gros-de-Vaud. 🚴"
          note="19/52 Levers de soleil"
        />
        <PhotoItem
          title="Le Moléson, 5 avril"
          date="05.04.23"
          images={[
            "https://medias.digitalgarage.ch/photos/52/18/18-05042023-02-243A7666.jpg",
            "https://medias.digitalgarage.ch/photos/52/18/18-05042023-03-243A7667.jpg", // right grande image
            "https://medias.digitalgarage.ch/photos/52/18/18-05042023-05-243A7695.jpg",
          ]}
          horizontalimg="top"
          description="Période idéale pour faire le tour du Moléson au levé du jour. Je suis ravi de partager ces quelques photos avec vous 📷 😎
          Joyeuses Pâques à toutes et tous ! 🐰"
          note="18/52 Levers de soleil"
        />
        <PhotoItem
          title="Le Niremont, Semsales, 01 avril"
          date="01.04.23"
          images={[
            "https://medias.digitalgarage.ch/photos/52/17/17--01042023-03-IMG_1067.jpg",
            "https://medias.digitalgarage.ch/photos/52/17/17--01042023-01-IMG_1057.jpg",
            "https://medias.digitalgarage.ch/photos/52/17/17--01042023-02-IMG_1059.jpg",
          ]}
          horizontalimg="left"
          description="Aller chercher le soleil qui se lève sans grand espoir de le trouver. C'est l'intention qui compte, on dira."
          note="17/52 Levers de soleil"
        />
        <PhotoItem
          title="Les Alpettes, Semsales, 18 mars"
          date="18.03.23"
          images={[
            "https://medias.digitalgarage.ch/photos/52/16/16--19032023-01-243A7432.jpg",
            "https://medias.digitalgarage.ch/photos/52/16/16--19032023-02-243A7458.jpg", // right grande image
            "https://medias.digitalgarage.ch/photos/52/16/16--19032023-03-243A7485.jpg",
          ]}
          description="Le printemps se pointe, apportant avec lui de nouveaux horizons colorés. 🌄 Re-balade vers les Alpettes."
          note="16/52 Levers de soleil"
        />
        <PhotoItem
          title="Les Alpettes, Semsales 5 mars"
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
        <PhotoItem
          title="Le Berry, Les Paccots - Châtel-St-Denis, 18 février"
          date="18.02.23"
          images={[
            "https://medias.digitalgarage.ch/photos/52/14/18022023-03-243A7176.jpg",
            "https://medias.digitalgarage.ch/photos/52/14/18022023-05-243A7230.jpg",
            "https://medias.digitalgarage.ch/photos/52/14/18022023-07-243A7266.jpg",
          ]}
          horizontalimg="top"
          description="Peut-être la dernière en peaux de l'année pour moi, s'il ne reneige pas c'est cuit 🥹."
          note="14/52 Levers de soleil"
        />
        <PhotoItem
          title="le Niremont - Semsales, 8 février"
          date="08.02.23"
          images={[
            "https://medias.digitalgarage.ch/photos/52/13/08022023-05-DJI_0005.jpg",
            "https://medias.digitalgarage.ch/photos/52/13/08022023-02-243A6965.jpg",
            "https://medias.digitalgarage.ch/photos/52/13/08022023-03-243A6980.jpg",
          ]}
          horizontalimg="right"
          description="Photos du jour au Niremont. Favorite place forever 😎."
          note="13/52 Levers de soleil"
        />
        <PhotoItem
          title="Coucher de soleil depuis la maison - St-Martin, 31 janvier "
          date="Photos du 31.01.23"
          images={[
            "https://medias.digitalgarage.ch/photos/31012023-maison/31012023-03-243A6858.jpg",
            "https://medias.digitalgarage.ch/photos/31012023-maison/31012023-02-243A6854.jpg",
            "https://medias.digitalgarage.ch/photos/31012023-maison/31012023-01-243A6852.jpg",
          ]}
          horizontalimg="top"
          description="Coucher de soleil depuis la maison en rentrant du job, y'avait plus qu'à se servir, je n'ai pas résisté!"
        />
        <PhotoItem
          title="Les Alpettes, Semsales, 29 janvier"
          date="29.01.23"
          images={[
            "https://medias.digitalgarage.ch/photos/52/12-2/29012023-07-243A6826.jpg",
            "https://medias.digitalgarage.ch/photos/52/12-2/29012023-04-243A6776.jpg",
            "https://medias.digitalgarage.ch/photos/52/12-2/29012023-05-243A6800.jpg",
          ]}
          horizontalimg="left"
          description="Les Alpettes, la suite, voilà le soleil après le brouillard!"
          note="12/52 Levers de soleil - 2/2"
        />
        <PhotoItem
          title="Les Alpettes, Semsales, 29 janvier"
          date="29.01.23"
          images={[
            "https://medias.digitalgarage.ch/photos/52/12-1/29012023-01-243A1253.jpg",
            "https://medias.digitalgarage.ch/photos/52/12-1/29012023-05-243A1282.jpg",
            "https://medias.digitalgarage.ch/photos/52/12-1/29012023-02-243A1258.jpg",
          ]}
          horizontalimg="top"
          description="Les Alpettes dans le brouillard en attendant le soleil."
          note="12/52 Levers de soleil - 1/2"
        />
        <PhotoItem
          title="La Lécherette, Les Mosses, 24 janvier"
          date="24.01.23"
          images={[
            "https://medias.digitalgarage.ch/photos/24012023-lecherette/24012023-02-243A1212.jpg",
            "https://medias.digitalgarage.ch/photos/24012023-lecherette/24012023-03-243A1223.jpg",
            "https://medias.digitalgarage.ch/photos/24012023-lecherette/24012023-01-243A1208.jpg",
          ]}
          horizontalimg="top"
          description="Petite virée après une journée de camp de ski à la Lécherette. Un coucher de soleil pour changer. Enfin le décor ne change pas vraiment... ☀️❄️🌄😍"
        />
        <PhotoItem
          title="Niremont, Semsales, 21 janvier"
          date="21.01.23"
          images={[
            "https://medias.digitalgarage.ch/photos/52/11/11--21012023-02-243A0893.jpg",
            "https://medias.digitalgarage.ch/photos/52/11/11--21012023-07-243A1143.jpg",
            "https://medias.digitalgarage.ch/photos/52/11/11--21012023-03-243A1020.jpg",
          ]}
          horizontalimg="top"
          description="Photos du jour dans une ambiance glaciale au Niremont."
          note="11/52 Levers de soleil"
        />

        <PhotoItem
          title="Moléson, Gruyères, 7 janvier"
          date="07.01.23"
          images={[
            "https://medias.digitalgarage.ch/photos/52/10/10--07012023-03-243A0592.jpg",
            "https://medias.digitalgarage.ch/photos/52/10/10--07012023-07-243A0630.jpg",
            "https://medias.digitalgarage.ch/photos/52/10/10--07012023-01-243A0583.jpg",
          ]}
          horizontalimg="right"
          note="10/52 Levers de soleil"
        />

        <PhotoItem
          title="Les Plaines, Le Crêt, Vaulruz, 2 janvier"
          date="02.01.23"
          images={[
            "https://medias.digitalgarage.ch/photos/52/09/9--02012023-06-243A0526.jpg",
            "https://medias.digitalgarage.ch/photos/52/09/9--02012023-07-243A0529.jpg",
            "https://medias.digitalgarage.ch/photos/52/09/9--02012023-08-243A0553.jpg",
          ]}
          description="Je suis allé aux Plaines photographier un arbre qui avait attiré mon attention. Une fois arrivé, en traversant le pont de l'autoroute, j'ai expérimenté une longue pose. Le ciel était dégagé, l'atmosphère qui se dégageait de ce paysage et la lumière pâle du soleil qui commençait à apparaître à l'horizon donnaient à l'arbre une ambiance unique. Il y avait aussi cette petite cabane qui a attiré mon attention, je pense que je reviendrai s'il neige, ça pourrait être une image minimaliste très intéressante."
          note="09/52 Levers de soleil"
        />

        <PhotoItem
          title="Avry-devant-Pont, Lac de la Gruyère, 26 décembre"
          date="26.12.22"
          images={[
            "https://medias.digitalgarage.ch/photos/52/08/8--26122022-05-243A0484.jpg",
            "https://medias.digitalgarage.ch/photos/52/08/8--26122022-04-243A0419.jpg",
            "https://medias.digitalgarage.ch/photos/52/08/8--26122022-02-243A0301.jpg",
          ]}
          horizontalimg="top"
          description="Bonne année à toutes et tous !
          <br />
          Le 26 décembre au levé du jour, je suis allé en Gruyère du côté d’Avry-devant-Pont. La vue sur le lac de la Gruyère était magnifique. Les couleurs changeantes du lever du jour qui se reflétaient dans l'eau ajoutaient une touche magique au paysage. 🌅"
          note="08/52 Levers de soleil"
        />

        <PhotoItem
          title="Tremetta, Rathvel, 22 décembre"
          date="18.12.22"
          images={[
            "https://medias.digitalgarage.ch/photos/52/07/7--18122022-01-243A0087.jpg",
            "https://medias.digitalgarage.ch/photos/52/07/7--18122022-03-243A0143.jpg",
            "https://medias.digitalgarage.ch/photos/52/07/7--18122022-02-243A0141.jpg",
          ]}
          horizontalimg="right"
          description="En attendant que la neige revienne… Joyeux Noël à tous !<br />
          Dimanche dernier, j'ai fait une virée à Tremetta. Les conditions de neige n'étaient pas idéales, mais j'ai décidé de tenter ma chance et de monter en ski. Comme à mon habitude, je me suis levé tôt pour profiter du lever de soleil et prendre quelques photos. La montée a été agréable, et une fois en haut, la température était parfaite. Le soleil s'est levé avec un petit vent frais qui m'a glacé les doigts, mais ses rayons ont ensuite rapidement réchauffé l'atmosphère.<br />
          J'ai pris mon temps pour admirer le paysage et savourer le calme de l'endroit.<br />
          Lorsque j'ai enfin décidé de redescendre, j'ai été agréablement surpris par la qualité de la neige. La poudreuse était incroyable et la descente s'est avérée être une magnifique expérience de glisse. J'ai passé un très bon moment à Tremetta et je suis déjà impatient d'y retourner."
          note="07/52 Levers de soleil"

        />

        <PhotoItem
          title="Corbetta, Châtel-St-Denis, les Paccots, 7 décembre"
          date="7.12.22"
          images={[
            "https://medias.digitalgarage.ch/photos/52/06/6--07122022-02-IMG_2351.jpg",
            "https://medias.digitalgarage.ch/photos/52/06/6--07122022-03-IMG_2408-Edit.jpg",
            "https://medias.digitalgarage.ch/photos/52/06/6--07122022-04-IMG_2451.jpg",
          ]}
          horizontalimg="right"
          description="Le sommet de Corbetta est un point de vue idéal si vous avez envie d’avoir une vue sur le plateau, le lac Léman et admirer les Dents du midi. La vue était malheureusement bouchée lors de ma visite, les nuages étaient plus hauts que prévu et j'étais en plein dans le brouillard.
          Mais, finalement, le ciel s'est dégagé et j'ai pu prendre quelques belles photos du lever du soleil. Le paysage était absolument magnifique, avec les montagnes enneigées et le brouillard qui jouait avec la lumière douce du lever du jour. Si vous avez l'occasion de vous rendre au sommet de Corbetta, n'hésitez pas à vous lever tôt pour admirer le lever du soleil, vous ne serez pas déçu!"
          note="06/52 Levers de soleil"
        />
        <PhotoItem
          title="Le Niremont, Semsales, 3 décembre"
          date="03.12.22"
          images={[
            "https://medias.digitalgarage.ch/photos/52/05/52-5--03122022-1.jpg",
            "https://medias.digitalgarage.ch/photos/52/05/52-5--03122022-3.jpg",
            "https://medias.digitalgarage.ch/photos/52/05/52-5--03122022-2.jpg",
          ]}
          horizontalimg="left"
          description="La semaine dernière, je suis allé au Niremont pour capturer des paysages enneigés. Les lumières du lever du soleil étaient très belles, mais le ciel était couvert, j’ai bien cru que c’est tout ce que j’aurai. Il faisait un froid glacial, mais mes efforts ont été récompensés lorsque le soleil a percé les nuages. C'était encore une expérience mémorable et je suis très heureux de partager ces moments avec vous."
          note="05/52 Levers de soleil"
        />
        <PhotoItem
          title="Les Pléiades-sur-Vevey, 27 novembre"
          date="27.11.22"
          images={[
            "https://medias.digitalgarage.ch/photos/52/04/52-4--27112022-1.jpg",
            "https://medias.digitalgarage.ch/photos/52/04/52-4--27112022-4.jpg",
            "https://medias.digitalgarage.ch/photos/52/04/52-4--27112022-7.jpg",
          ]}
          horizontalimg="top"
          description="Grimpette au Pleiades depuis Châtel. Avec ses 680m de dénivelés, ça n’est pas rien, mais une belle vue ça se mérite, et cette fois, je n’étais pas seul. Il y avait un trail runner et une autre personne qui étaient aussi venus admirer les premières lueurs du jour. Quelques petits nuages étaient là pour agrémenter un ciel bien dégagé.<br />
          Pour redescendre sur Châtel, j'ai traversé le sentier de l'Ermite. Tout proche du marais des Tenasses. À visiter également, jolie balade."
          note="04/52 Levers de soleil"
        />
        <PhotoItem
          title="Col de Lys, Les Paccots - Châtel-St-Denis, 22 novembre"
          date="19.11.22"
          images={[
            "https://medias.digitalgarage.ch/photos/52/03/52-3-191122-1.jpg",
            "https://medias.digitalgarage.ch/photos/52/03/52-3-191122-5.jpg",
            "https://medias.digitalgarage.ch/photos/52/03/52-3-191122-6.jpg",
          ]}
          horizontalimg="right"
          description="Il a neigé sur les sommets tout proches, j’ai ai donc profité pour faire un petit tour au col de Lys. C’est un magnifique endroit, allez-y !"
          note="03/52 Levers de soleil"
        />
        <PhotoItem
          title="Lac des Joncs, Les Paccots, Châtel-St-Denis 13 novembre"
          date="13.11.22"
          images={[
            "https://medias.digitalgarage.ch/photos/52/02/52-02-13112022-1-IMG_0906.jpg",
            "https://medias.digitalgarage.ch/photos/52/02/52-02-13112022-2-IMG_0869.jpg",
            "https://medias.digitalgarage.ch/photos/52/02/52-02-13112022-6-IMG_0849.jpg",
          ]}
          horizontalimg="left"
          description="Reflets d’un dimanche matin. Je n’ai pas eu le temps d’attendre le soleil ce dimanche matin, mais j’en ai profité pour expérimenter des poses plus longues et de jouer avec les magnifiques reflets sur les eaux calmes du Lac des Joncs."
          note="02/52 Levers de soleil"
        />
        <PhotoItem
          title="Niremont - Semsales, 6 novembre"
          date="6.11.22"
          images={[
            "https://medias.digitalgarage.ch/photos/52/01/52-01-06112022-1-IMG_0540.jpg",
            "https://medias.digitalgarage.ch/photos/52/01/52-01-06112022-2-IMG_0554.jpg",
            "https://medias.digitalgarage.ch/photos/52/01/52-01-06112022-3-IMG_0619.jpg",
          ]}
          horizontalimg="right"
          description="Dimanche passé je suis allé au Niremont* au levé du jour pour faire quelques photos. J’en ai d’ailleurs déjà publié une, j’étais impatient, c’était tellement beau !<br />
          Je me suis challengé pour faire plus souvent de la photo, parce que j’aime vraiment ça et que je ne prends pas assez de temps pour en faire, et mon challenge s’intitule “52 levers de soleil”. Assez explicite non ? Alors si j’y arrive, dans une année j’aurai photographié mes 52 levers de soleil, principalement en Veveyse."
          note="01/52 Levers de soleil"
        />
      </section>
    </Layout>
  );
};

PhotoGallery.getInitialProps = () => {
  return { title: "Photos" , 
  description: "Développeur web créatif, je vous propose des sites web personnalisés grâce à une solide expérience en développement front-end et une passion pour le design web. Particulièrement présent en Veveyse, dans la région de Châtel-St-Denis, Semsales, Attalens ou ailleurs dans le canton, que vous soyez une entreprise ou une société, je suis là pour vous aider à réaliser votre vision en matière de site web. Contactez-moi pour discuter de votre projet et découvrir comment nous pouvons travailler ensemble pour créer un site web qui vous ressemble." };
};
export default PhotoGallery;
