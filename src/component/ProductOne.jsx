import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import products from '../component/products';

const ProductOne = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true, // Arrows enabled for products
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="product-slider-container">
      {' '}
      {/* Different unique class name */}
      <style jsx>{`
        .product-slider-container .slick-prev,
        .product-slider-container .slick-next {
          z-index: 10;
          width: 40px;
          height: 40px;
        }

        .product-slider-container .slick-prev {
          left: 10px;
        }

        .product-slider-container .slick-next {
          right: 10px;
        }

        .product-slider-container .slick-prev:before,
        .product-slider-container .slick-next:before {
          font-size: 40px;
          color: #333;
        }

        .product-slider-container .slick-dots {
          bottom: -30px;
        }
      `}</style>
      <Slider {...settings}>
        {products.map((data) => (
          <div key={data.id} className="px-2">
            <img
              src={data.img}
              alt={data.name}
              className="h-40 w-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductOne;
