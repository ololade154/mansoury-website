const Hero = () => {
  return (
    <div
      className=" bg-cover bg-center h-70 mt-53 md:h-105 md:mt-46.5 "
      style={{
        backgroundImage: `url('/HeroImage.svg')`,
      }}
    >
      <h1 className="white-text text-center lato text-[24px] px-4 md:text-[48px] py-2  font-bold">
        Ehance Your Home with convience and Style
      </h1>
    </div>
  );
};
export default Hero;
