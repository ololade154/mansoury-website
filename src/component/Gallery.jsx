// import { useState, useEffect } from 'react';
// import products from './products';
// import CartIcon from '../utilities/CartIcon';
// import HeartIcon from '../utilities/HeartIcon';
// import ArrowLeft from '../utilities/ArrowLeft';
// import ArrowRight from '../utilities/ArrowRight';
//
// const Gallery = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
//
//   Detect screen resize
//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 600);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
//
//   Functions for prev/next buttons
//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
//   };
//
//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
//   };
//
//   return (
//     <>
//       <div className=" text-center md:text-center md:mb-3 mb-6">
//         <h1 className="montserrat font-bold md:text-[30px] text-[20px] link-color">
//           Products You May Like
//         </h1>
//         <div className="md:mt-1 mt-3">
//           <div className="flex justify-center">
//             <div className="h-1 blue-color rounded-full w-14 md:w-16"></div>
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-2 gap-4 w-full py-4 px- md:py-6 md:px-32  md:pb-14">
//         {isMobile ? (
//           MOBILE: single product with fade transition
//           <div
//             className="relative transition-opacity duration-300 w-full"
//             key={products[currentIndex].id}
//           >
//             <div className="bg-white md:h-64 p-1.5 shadow-md rounded-sm">
//               <div className="relative w-full">
//                 <img
//                   src={products[currentIndex].img}
//                   alt={products[currentIndex].name}
//                   className="w-full object-cover"
//                 />
//                 <div className="absolute top-2 left-2 bg-red-500 w-10 h-10 flex items-center justify-center rounded-full shadow">
//                   <span className="text-white text-[10px] font-medium montserrat">
//                     50%
//                   </span>
//                 </div>
//                 <div className="absolute top-2 right-2 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow">
//                   <HeartIcon />
//                 </div>
//               </div>
//               <div className="p-1 montserrat">
//                 <h2 className="md:text-[11px] mb-2 font-normal product-name-color">
//                   {products[currentIndex].name}
//                 </h2>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <div className="font-medium md:text-[15px] product-name-color">
//                       {products[currentIndex].price}$
//                     </div>
//                     <div className="md:text-[12px] line-through discount-price-color font-medium">
//                       {products[currentIndex].discountPrice}$
//                     </div>
//                   </div>
//                   <div className="blue-color p-1 rounded-sm">
//                     <CartIcon color="#ffffff" width={16} height={16} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           DESKTOP: render all products
//           products.map((data) => (
//             <div
//               key={data.id}
//               className="bg-white md:h-56 p-1.5 shadow-md rounded-sm"
//             >
//               <div className="relative w-full">
//                 <img
//                   src={data.img}
//                   alt={data.name}
//                   className="w-full object-cover"
//                 />
//                 <div className="absolute top-2 left-2 bg-red-500 w-10 h-10 flex items-center justify-center rounded-full shadow">
//                   <span className="text-white text-[10px] font-medium montserrat">
//                     50%
//                   </span>
//                 </div>
//                 <div className="absolute top-2 right-2 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow">
//                   <HeartIcon />
//                 </div>
//               </div>
//               <div className="p-1 montserrat">
//                 <h2 className="md:text-[11px] mb-2 font-normal product-name-color">
//                   {data.name}
//                 </h2>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <div className="font-medium md:text-[15px] product-name-color">
//                       {data.price}$
//                     </div>
//                     <div className="md:text-[12px] line-through discount-price-color font-medium">
//                       {data.discountPrice}$
//                     </div>
//                   </div>
//                   <div className="blue-color p-1 rounded-sm">
//                     <CartIcon color="#ffffff" width={16} height={16} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//
//       MOBILE PAGINATION
//       {isMobile && (
//         <div className="flex justify-center gap-3 mt-3 pb-20">
//           <button onClick={handlePrev} className="px-4 py-2 blue-color rounded">
//             <ArrowLeft />
//           </button>
//           <button onClick={handleNext} className="px-4 py-2 blue-color rounded">
//             <ArrowRight />
//           </button>
//         </div>
//       )}
//     </>
//   );
// };
//
// export default Gallery;
import { useState, useEffect } from 'react';
import products from './products';
import CartIcon from '../utilities/CartIcon';
import HeartIcon from '../utilities/HeartIcon';
import ArrowLeft from '../utilities/ArrowLeft';
import ArrowRight from '../utilities/ArrowRight';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Functions for prev/next buttons with fade effect
  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 300); // Match this with transition duration
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
      setIsTransitioning(false);
    }, 300); // Match this with transition duration
  };

  return (
    <>
      <div className=" text-center md:text-center md:mb-3 mb-6">
        <h1 className="montserrat font-bold md:text-[30px] text-[20px] link-color">
          Products You May Like
        </h1>
        <div className="md:mt-1 mt-3">
          <div className="flex justify-center">
            <div className="h-1 blue-color rounded-full w-14 md:w-16"></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-2 gap-4 w-full py-4 px-6 md:py-6 md:px-32  md:pb-14">
        {isMobile ? (
          // MOBILE: single product with fade transition
          <div
            className={`relative transition-opacity duration-300 w-full ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className="bg-white md:h-64 p-1.5 shadow-md rounded-sm">
              <div className="relative w-full">
                <img
                  src={products[currentIndex].img}
                  alt={products[currentIndex].name}
                  className="w-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-red-500 w-10 h-10 flex items-center justify-center rounded-full shadow">
                  <span className="text-white text-[10px] font-medium montserrat">
                    50%
                  </span>
                </div>
                <div className="absolute top-2 right-2 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow">
                  <HeartIcon />
                </div>
              </div>
              <div className="p-1 montserrat">
                <h2 className="md:text-[11px] mb-2 font-normal product-name-color">
                  {products[currentIndex].name}
                </h2>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="font-medium md:text-[15px] product-name-color">
                      {products[currentIndex].price}$
                    </div>
                    <div className="md:text-[12px] line-through discount-price-color font-medium">
                      {products[currentIndex].discountPrice}$
                    </div>
                  </div>
                  <div className="blue-color p-1 rounded-sm">
                    <CartIcon color="#ffffff" width={16} height={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // DESKTOP: render all products
          products.map((data) => (
            <div
              key={data.id}
              className="bg-white md:h-56 p-1.5 shadow-md rounded-sm"
            >
              <div className="relative w-full">
                <img
                  src={data.img}
                  alt={data.name}
                  className="w-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-red-500 w-10 h-10 flex items-center justify-center rounded-full shadow">
                  <span className="text-white text-[10px] font-medium montserrat">
                    50%
                  </span>
                </div>
                <div className="absolute top-2 right-2 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow">
                  <HeartIcon />
                </div>
              </div>
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
          ))
        )}
      </div>

      {/* MOBILE PAGINATION */}
      {isMobile && (
        <div className="flex justify-center gap-3 mt-3 pb-20">
          <button onClick={handlePrev} className="px-4 py-2 blue-color rounded">
            <ArrowLeft />
          </button>
          <button onClick={handleNext} className="px-4 py-2 blue-color rounded">
            <ArrowRight />
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
