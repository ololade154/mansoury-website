import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import products from './products';

const ProductOneSlider = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <div className="product-slider-container overflow-hidden w-full max-w-full ">
      <style>{`
        .product-slider-container .slick-list {
  margin: 0 -10px;
}
.product-slider-container .slick-slide {
  padding: 0 10px;
}
        .product-slider-container .slick-prev,
        .product-slider-container .slick-next {
          z-index: 10;
          width: 40px;
          height: 40px;
        }
        .product-slider-container .slick-prev {
          left: 15px;
        }

        .product-slider-container .slick-next {
          right: 15px;
        }

        .product-slider-container .slick-prev:before,
        .product-slider-container .slick-next:before {
          font-size: 40px;
          color: #737373;
        }
      `}</style>
      <Slider {...settings}>
        {products.map((data) => (
          <div key={data.id} className="bg-white md:h-64 p-1 ">
            <div className=" w-full">
              <img
                src={data.img}
                alt={data.name}
                className=" h-36 object-cover object-center md:h-44 w-full  "
              />
            </div>
            <div className="">
              <p>{data.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductOneSlider;
