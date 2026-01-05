// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import Carousel from '../component/Carousel';
const Hero = () => {
  return (
    // <div
    //   className=" bg-cover bg-center h-60 mt-30 md:h-105 md:mt-46.5"
    //   style={{
    //     backgroundImage: `url('/HeroImage.svg')`,
    //   }}
    // >
    //   <h1 className="white-text text-center lato text-[24px] px-4 md:text-[48px] py-4 font-bold">
    //     Ehance Your Home with convience and Style
    //   </h1>
    // </div>
    <div className="  mt-30 md:mt-46.5">
      <Carousel />
    </div>
  );
};
export default Hero;
