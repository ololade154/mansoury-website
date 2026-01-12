<div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-2 gap-4 w-full py-4 px-8 md:py-6 md:px-32">
  {products.map((data, index) => {
    const isVisible = !isMobile || index === currentIndex;

    return (
      <div
        key={data.id}
        className={`bg-white md:h-64 p-1.5 shadow-md rounded-sm transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0 absolute md:static'
        }`}
      >
        {/* IMAGE WITH OVERLAYS */}
        <div className="relative w-full">
          <img src={data.img} alt={data.name} className="w-full object-cover" />

          {/* LEFT CIRCLE */}
          <div className="absolute top-2 left-2 bg-red-500 w-10 h-10 flex items-center justify-center rounded-full shadow">
            <span className="text-white text-[10px] font-medium montserrat">
              50%
            </span>
          </div>

          {/* RIGHT CIRCLE */}
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
    );
  })}
</div>;
