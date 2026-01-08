import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import products from "./products";

const ProductOneSlider = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow:4,
    slidesToScroll: 3,
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
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  return (
    <div className="product-slider-container">
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
          color: #737373;
        }

        .slide-content {
          padding: 10px;
          height: 270px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .slide-content img {
          width: 250px;
          height: 250px;
          display: block;
          object-fit: cover;
        }
      `}</style>
      <Slider {...settings}>
        {products.map((data) => (
          <div key={data.id}>
            <div className="slide-content">
              <img
                src={data.img}
                alt={data.name}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductOneSlider;
