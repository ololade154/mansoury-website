

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';
// import products from './products';

// import { useState } from 'react';

// const ProductOneSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 400,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows: true,
//     swipe: true,
//     swipeToSlide: true,
//     touchMove: true,
//     beforeChange: (current, next) => setCurrentSlide(next),
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           swipe: true,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           swipe: true,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           arrows: false,
//           swipe: true,
//           swipeToSlide: true,
//           centerMode: true,
//           centerPadding: '20px',
//         },
//       },
//     ],
//   };

//   const progress = ((currentSlide + 1) / products.length) * 100;

//   return (
//     <div className="product-slider-container w-full max-w-full">
//       <style>{`
//         .product-slider-container .slick-list {
//           margin: 0 -10px;
//         }
//         .product-slider-container .slick-slide {
//           padding: 0 10px;
//         }
//         .product-slider-container .slick-slide > div {
//           height: 100%;
//         }
//         .product-slider-container .slick-track {
//           display: flex;
//           align-items: stretch;
//         }
//         .product-slider-container .slick-prev,
//         .product-slider-container .slick-next {
//           z-index: 10;
//           width: 40px;
//           height: 40px;
//         }
//         .product-slider-container .slick-prev {
//           left: -5px;
//         }
//         .product-slider-container .slick-next {
//           right: -5px;
//         }
//         .product-slider-container .slick-prev:before,
//         .product-slider-container .slick-next:before {
//           font-size: 30px;
//           color: #737373;
//         }
        
//         @media (max-width: 640px) {
//           .product-slider-container .slick-list {
//             margin: 0 -10px;
//             padding: 0 !important;
//             overflow: visible;
//           }
//           .product-slider-container .slick-slide {
//             padding: 0 10px;
//           }
//           .product-slider-container .slick-slide:not(.slick-center) {
//             opacity: 0.5;
//             transform: scale(0.9);
//             transition: all 0.3s ease;
//           }
//           .product-slider-container .slick-slide.slick-center {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
//       `}</style>

//       <Slider {...settings}>
//         {products.map((data) => (
//           <div key={data.id} className="h-full">
//             <div className="bg-white p-4 h-full rounded-lg shadow-sm">
//               <div className="w-full mb-3">
//                 <img
//                   src={data.img}
//                   alt={data.name}
//                   className="h-56 sm:h-52 md:h-56 w-full object-cover object-center rounded"
//                 />
//               </div>
//               <div className="px-1">
//                 <p className="text-base sm:text-base line-clamp-2 font-medium">{data.name}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>

//       {/* Progress Bar - Only on Mobile */}
//       <div className="block sm:hidden mt-4 px-4">
//         <div className="flex items-center gap-3">
//           <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
//             <div 
//               className="h-full bg-gray-800 transition-all duration-300"
//               style={{ width: `${progress}%` }}
//             />
//           </div>
//           <span className="text-xs text-gray-600 min-w-fit">
//             {currentSlide + 1}/{products.length}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductOneSlider;




import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import products from './products';
import { useState } from 'react';

const ProductOneSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          swipe: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          swipe: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          swipe: true,
          swipeToSlide: true,
          centerMode: true,
          centerPadding: '10px', // Reduced from 20px - makes card wider
        },
      },
    ],
  };

  const progress = ((currentSlide + 1) / products.length) * 100;

  return (
    <div className="product-slider-container w-full max-w-full">
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
        .product-slider-container .slick-track {
          display: flex;
          align-items: stretch;
        }
        .product-slider-container .slick-prev,
        .product-slider-container .slick-next {
          z-index: 10;
          width: 40px;
          height: 40px;
        }
        .product-slider-container .slick-prev {
          left: -5px;
        }
        .product-slider-container .slick-next {
          right: -5px;
        }
        .product-slider-container .slick-prev:before,
        .product-slider-container .slick-next:before {
          font-size: 30px;
          color: #737373;
        }
        
        @media (max-width: 640px) {
          .product-slider-container .slick-list {
            margin: 0 -5px; /* Reduced margin */
            padding: 0 !important;
            overflow: visible;
          }
          .product-slider-container .slick-slide {
            padding: 0 5px; /* Reduced padding */
          }
          .product-slider-container .slick-slide:not(.slick-center) {
            opacity: 0.4; /* More faded for better contrast */
            transform: scale(0.85); /* Smaller side cards */
            transition: all 0.3s ease;
          }
          .product-slider-container .slick-slide.slick-center {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

      <Slider {...settings}>
        {products.map((data) => (
          <div key={data.id} className="h-full">
            <div className="bg-white p-4 h-full rounded-lg shadow-sm">
              <div className="w-full mb-3">
                <img
                  src={data.img}
                  alt={data.name}
                  className="h-56 sm:h-52 md:h-56 w-full object-cover object-center rounded"
                />
              </div>
              <div className="px-1">
                <p className="text-base sm:text-base line-clamp-2 font-medium">{data.name}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Progress Bar - Only on Mobile */}
      <div className="block sm:hidden mt-4 px-4">
        <div className="flex items-center gap-3">
          <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gray-800 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs text-gray-600 min-w-fit">
            {currentSlide + 1}/{products.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductOneSlider;