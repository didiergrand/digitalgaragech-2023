import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="flex items-center mx-auto p-6">
      <Image src="https://medias.digitalgarage.ch/7--18122022-01-243A0087.jpg" width={2000} height={1333} alt="Hello et bienvenue sur digitalgarage / Portfolio de Didier Grand / Creative Web Designer & Developer" />
    </div>
  );
};

export default HeroBanner;
