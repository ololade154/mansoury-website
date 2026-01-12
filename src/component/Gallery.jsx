import { useState, useEffect } from 'react';
import products from './products';
import CartIcon from '../utilities/CartIcon';
import HeartIcon from '../utilities/HeartIcon';
import ArrowLeft from '../utilities/ArrowLeft';
import ArrowRight from '../utilities/ArrowRight';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  // Update isMobile on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine which items to show
  const visibleItems = isMobile ? [products[currentIndex]] : products;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-2 gap-4 w-full py-4 px-8 md:py-6 md:px-32">
        {visibleItems.map((data, index) => (
          <div
            key={data.id}
            className="bg-white md:h-64 p-1.5 shadow-md rounded-sm"
          >
            {/* IMAGE WITH OVERLAYS */}
            <div className="relative w-full">
              <img
                src={data.img}
                alt={data.name}
                className="w-full object-cover"
              />

              {/* LEFT CIRCLE (discount) */}
              <div className="absolute top-2 left-2 bg-red-500 w-10 h-10 flex items-center justify-center rounded-full shadow">
                <span className="text-white text-[10px] font-medium montserrat">
                  50%
                </span>
              </div>

              {/* RIGHT CIRCLE (Heart) */}
              <div className="absolute top-2 right-2 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow">
                <HeartIcon />
              </div>
            </div>

            {/* PRODUCT INFO */}
            <div className="p-1 montserrat">
              <h2 className="md:text-[11px] mb-2 font-normal product-name-color">
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

                <div className="blue-color p-1 rounded-sm">
                  <CartIcon color="#ffffff" width={16} height={16} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE PAGINATION */}
      {isMobile && (
        <div className="flex justify-center gap-3 mt-3 mb-4">
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
