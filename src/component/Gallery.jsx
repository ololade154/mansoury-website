import { useState } from 'react';
import products from './products';
import CartIcon from '../utilities/CartIcon';
import HeartIcon from '../utilities/HeartIcon';
import ArrowLeft from '../utilities/ArrowLeft';
import ArrowRight from '../utilities/ArrowRight';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = window.innerWidth < 600;
  const visibleItems = isMobile ? [products[currentIndex]] : products;
  return (
    <>
      <div className="md:grid md:grid-cols-5 md:grid-rows-2 gap-4 w-full py-4 px-8 md:py-6 md:px-32">
        {visibleItems.map((data, index) => {
          return (
            <div className="bg-white md:h-64 p-1.5 shadow-md rounded-sm">
              <div className="w-full relative ">
                <img
                  src={data.img}
                  key={index}
                  className="w-full object-cover "
                />
                {/* LEFT content */}
                <div className="absolute top-3 left-2 red-color w-10 h-10 flex items-center justify-center rounded-full white-text text-[10px] font-medium montserrat ">
                  50%
                </div>

                {/* RIGHT content */}
                <div className="absolute top-3 right-2 bg-white h-10 w-10 flex items-center justify-center rounded-full">
                  <HeartIcon />
                </div>
              </div>
              <div className="p-1 montserrat">
                <h2 className="md:text-[11px] mb-4 font-normal product-name-color">
                  {data.name}
                </h2>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="font-medium md:text-[15px] product-name-color">
                      {data.price}$
                    </div>
                    <div className="md:text-[12px] line-through discount-price-color font-medium">
                      {data.discountPrice}$
                    </div>
                  </div>
                  <div className="blue-color p-1 rounded-sm ">
                    <CartIcon color="#ffffff" width={16} height={16} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Pagination (mobile only) */}
      {isMobile && (
        <div className="flex justify-center gap-3 mt-3">
          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === 0 ? products.length - 1 : prev - 1
              )
            }
            className="px-4 py-2 blue-color rounded"
          >
            <ArrowLeft />
          </button>

          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === products.length - 1 ? 0 : prev + 1
              )
            }
            className="px-4 py-2 blue-color rounded"
          >
            <ArrowRight />
          </button>
        </div>
      )}
    </>
  );
};
export default Gallery;
