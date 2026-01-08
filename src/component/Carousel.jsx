import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container max-w-full overflow-hidden mb-0 ">
      <Slider {...settings}>
        <div className="relative block ">
          <img
            src="/slider-one.png"
            alt="slider"
            className="object-fit object-center max-w-full h-auto md:h-auto w-full block align-bottom"
          />
          <div className="absolute inset-0 flex justify-center pt-4">
            <h1 className="white-text text-center lato text-[24px] md:text-[48px] font-bold">
              Ehance Your Home with convience and Style
            </h1>
          </div>
        </div>
        <div className="relative">
          <img
            src="/slider-one.png"
            alt="slider"
            className="object-fit object-center h-auto md:h-auto w-full block "
          />
          <div className="absolute inset-0 flex justify-center">
            <h1 className="white-text text-center lato text-[24px] px-4 md:text-[48px] py-4 font-bold">
              Ehance Your Home with convience and Style
            </h1>
          </div>
        </div>
        <div className="relative">
          <img
            src="/slider-one.png"
            alt="slider"
            className="object-fit object-center h-auto md:h-auto w-full block "
          />
          <div className="absolute inset-0 flex justify-center">
            <h1 className="white-text text-center lato text-[24px] px-4 md:text-[48px] py-4 font-bold">
              Ehance Your Home with convience and Style
            </h1>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
