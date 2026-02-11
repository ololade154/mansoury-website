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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true, // Optional: hide arrows on mobile for better UX
        },
      },
    ],
  };

  return (
    <div className="product-slider-container overflow-hidden w-full max-w-full">
      <style>{`
        .product-slider-container .slick-list {
          margin: 0 -10px;
        }
        .product-slider-container .slick-slide {
          padding: 0 10px;
        }
        .product-slider-container .slick-slide > div {
          height: 100%;
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
        @media (max-width: 640px) {
          .product-slider-container .slick-list {
            margin: 0 -5px;
          }
          .product-slider-container .slick-slide {
            padding: 0 5px;
          }
        }
      `}</style>
      <Slider {...settings}>
        {products.map((data) => (
          <div key={data.id}>
            <div className="bg-white p-2 sm:p-3 h-full">
              <div className="w-full mb-2">
                <img
                  src={data.img}
                  alt={data.name}
                  className="h-40 sm:h-44 md:h-48 w-full object-cover object-center rounded"
                />
              </div>
              <div>
                <p className="text-sm sm:text-base">{data.name}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductOneSlider;