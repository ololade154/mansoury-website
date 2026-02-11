import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import products from './products';

const ProductOneSlider = () => {
  return (
    <div className="w-full px-5 py-4">
      <style>{`
        @media (max-width: 640px) {
          .swiper-button-prev,
          .swiper-button-next {
            display: none;
          }
        }
        .swiper-pagination-bullet {
          background: #374151;
        }
      `}</style>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
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
              <p className="text-base font-semibold line-clamp-2">{data.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductOneSlider;