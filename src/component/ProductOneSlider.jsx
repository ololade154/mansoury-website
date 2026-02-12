import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import products from './products';
import { useState } from 'react';

const ProductOneSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-full px-5 py-4">
      <style>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: #374151;
          width: 40px;
          height: 40px;
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 24px;
        }
        
        @media (max-width: 640px) {
          .swiper-button-prev,
          .swiper-button-next {
            display: none;
          }
        }
      `}</style>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {products.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={data.img}
                alt={data.name}
                className="h-64 w-full object-cover rounded mb-3"
              />
              <p className="text-base font-semibold line-clamp-2">
                {data.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Progress Bar - Only on Mobile */}
      <div className="block sm:hidden mt-6">
        <div className="flex items-center gap-3">
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full blue-color transition-all duration-300 rounded-full"
              style={{
                width: `${((currentIndex + 1) / products.length) * 100}%`,
              }}
            />
          </div>
          <span className="text-sm text-gray-700 font-semibold whitespace-nowrap">
            {currentIndex + 1}/{products.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductOneSlider;
