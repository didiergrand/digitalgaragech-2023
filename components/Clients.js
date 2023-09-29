import Image from "next/image";

import Semsales from "../public/logos/Commune-de-Semsales.png";
import Attalens from "../public/logos/Commune-dAttalens.png";
import SaintMartin from "../public/logos/Commune-de-Saint-Martin-Fribourg.png";
import Bossonnens from "../public/logos/Commune-de-Bossonnens.png";
import Granges from "../public/logos/Commune-de-Granges-Veveyse.png";
import Remaufens from "../public/logos/Commune-de-Remaufens.png";

import Comptoir from "../public/logos/Comptoir-Veveyse.png";
import GironJeunesse2024 from "../public/logos/Giron-des-Jeunesses-Veveyse-Saint-Martin.png";
import GironMusiques2024 from "../public/logos/Giron-des-musiques-Veveyse-Porsel.png";
import Giron2022 from "../public/logos/Giron-des-musiques-de-la-Veveyse-Saint-Martin-2022.png";
import SDS from "../public/logos/SDS-Desalpe-Semsales.png";
import Arbra from "../public/logos/100e-fanfare-Semsales.png";

import Mooser from "../public/logos/Etude-Mooser-Avocats-Notaires.png";
import Vuichard from "../public/logos/J-Vuichard-SA-Menuiserie-Charpente.png";
import Maude from "../public/logos/Maude-photo.png";
import AtelierGSP from "../public/logos/AtelierGSP.png";
import Icone from "../public/logos/Icone-Institut-de-consultations-notariale.png";
import Giller from "../public/logos/David-Giller-Manuiserie-Charpente.png";

const Clients = () => {
  return (
    <>
    <section className="welcome max-w-7xl mx-auto flex flex-col justify-center align-middle">
        <h2>Web</h2>
      <h3 className="mt-20 sm:mb-10">Ils me font confiance</h3>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-start-1 col-end-10 lg:col-end-9 pt-8 pb-8">
          <p>J'ai le privilège de collaborer avec de plusieurs communes de la Veveyse, des organisations à but non lucratif et diverses entreprises, chacune avec ses défis uniques et des visions distinctes. Je les accompagne également dans la maintenance de leur site web, garantissant ainsi une présence en ligne sécurisée et à jour. De nombreux autres clients m’ont également fait confiance pour renforcer leur présence en ligne et valoriser leur expertise. </p>
          <p>Chaque réalisation est le reflet d’une belle collaboration et je suis fier de les mettre en avant ici.</p>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-6">Communes</h2>
      <div className="grid grid-cols-3 gap-20 mb-20 bg-white p-10 rounded-md">
        <a href="https://www.semsales.ch" target="_blank" class="flex justify-center items-center">
          <Image
            src={Semsales}
            className=""
            alt="Commune de Semsales"
            width={400}
            height={400}
          />
        </a>
        <a href="https://www.attalens.ch" target="_blank" class="flex justify-center items-center">
          <Image
            src={Attalens}
            className=""
            alt="Commune d'Attalens"
            width={400}
            height={400}
          />
        </a>
        <a href="https://www.saint-martin-fr.ch" target="_blank" class="flex justify-center items-center">
          <Image
            src={SaintMartin}
            className=""
            alt="Commune de Saint-Martin"
            width={400}
            height={400}
          />
        </a>
        <a href="https://www.bossonnens.ch" target="_blank" class="flex justify-center items-center">
          <Image
            src={Bossonnens}
            className=""
            alt="Commune de Bossonnens"
            width={400}
            height={400}
          />
        </a>
        <a href="https://www.granges-veveyse.ch" target="_blank" class="flex justify-center items-center">
          <Image
            src={Granges}
            className=""
            alt="Commune de Granges"
            width={400}
            height={400}
          />
        </a>
        <a href="#" target="_blank" class="flex justify-center items-center">
          <Image
            src={Remaufens}
            className=""
            alt="Commune de Remaufens"
            width={400}
            height={400}
          />
        </a>
      </div>
      <h2 className="text-2xl font-bold mb-6">Manifestations</h2>
      <div className="grid grid-cols-3 gap-20 mb-20 bg-white p-10 rounded-md">
        <a href="https://www.comptoir-veveyse.ch" target="_blank" class="flex justify-center items-center">
          <Image
            src={Comptoir}
            className=""
            alt="Comptoir de la Veveyse"
            width={400}
            height={400}
          />
        </a>
        <a href="https://www.st-martin2024.ch" target="_blank" class="flex justify-center items-center">
        <Image
          src={GironJeunesse2024}
          className=""
          alt="Giron des Jeunesses de la Veveyse Saint-Martin 2024"
          width={400}
          height={400}
        /></a>
        <a href="https://www.porsel2024.ch" target="_blank" class="flex justify-center items-center">
        <Image
          src={GironMusiques2024}
          className=""
          alt="Giron des Musiques de la Veveyse Porsel 2024"
          width={400}
          height={400}
        /></a>
        <a href="https://www.st-martin2022.ch" target="_blank" class="flex justify-center items-center">
        <Image
          src={Giron2022}
          className=""
          alt="Giron des Musiques de la Veveyse Saint-Martin 2022"
          width={400}
          height={400}
        /></a>
        <a href="https://www.desalpe-semsales.ch" target="_blank" class="flex justify-center items-center">
          <Image
            src={SDS}
            className=""
            alt="SDS Desalpe Semsales"
            width={400}
            height={400}
          />
        </a>
        <a href="https://www.semsales2020.ch" target="_blank" class="flex justify-center items-center p-10">
          <Image
            src={Arbra}
            className=""
            alt="100e fanfare Semsales"
            width={400}
            height={400}
          />
        </a>
      </div>
      <h1 className="text-2xl font-bold mb-6">Entreprises</h1>
      <div className="grid grid-cols-3 gap-20 mb-20 bg-white p-10 rounded-md">
        <a href="https://www.etude-mooser.ch" target="_blank" class="flex justify-center items-center p-12">
          <Image
            src={Mooser}
            className=""
            alt="Etude Mooser Avocats Notaires"
            width={400}
            height={400}
          />
        </a>
        <a href="https://www.vuichardsa.ch" target="_blank" class="flex justify-center items-center">
          <Image
            src={Vuichard}
            className=""
            alt="J. Vuichard SA Menuiserie Charpente"
            width={400}
            height={400}
          />
        </a>
        <a href="https://www.maudephoto.ch" target="_blank" class="flex justify-center items-center">
          <Image
            src={Maude}
            className=""
            alt="Maude Photo"
            width={400}
            height={400}
          />
        </a>
        <a href="#" target="_blank" class="flex justify-center items-center">
          <Image
            src={AtelierGSP}
            className=""
            alt="Atelier GSP"
            width={400}
            height={400}
          />
        </a>
        <a href="https://icone-consultation-notariale.ch" target="_blank" class="flex justify-center items-center">
          <Image
            src={Icone}
            className=""
            alt="Icone Institut de consultations notariale"
            width={400}
            height={400}
          />
        </a>
        <a href="https://davidgiller.ch" target="_blank" class="flex justify-center items-center">
          <Image
            src={Giller}
            className=""
            alt="David Giller Menuiserie Charpente"
            width={400}
            height={400}
          />
        </a>
      </div>
    </section>
      <hr className="mb-12" /></>
  );
};

export default Clients;
