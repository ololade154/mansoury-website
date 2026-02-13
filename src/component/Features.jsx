const Features = () => {
  return (
    <div className="border-b border-b-[#B4B4B4] mx-8 md:mx-16">
      <div className="flex flex-col item-center gap-10 md:flex-row md:justify-between md:items-center py-8 md:py-10">
        <div className="flex items-center gap-6 md:gap-4 ">
          <div>
            <img src="/user.svg " className="w-14 h-14" />
          </div>
          <div className="flex flex-col items-start">
            <div>
              <h1 className="montserrat font-bold text-[15px] mb-1 md:mb-0.5 md:text-[16px]">
                Online Support
              </h1>
            </div>
            <div>
              <p className="montserrat font-normal text-[15px] md:text-[16px]">
                Dedicated Support Team
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6 md:gap-4 ">
          <div>
            <img src="/truck.svg" className="w-14 h-14" />
          </div>
          <div className="flex flex-col items-start ">
            <div>
              <h1 className="montserrat font-bold text-[15px] mb-1 md:mb-0.5 md:text-[16px]">
                Free Shipping
              </h1>
            </div>
            <div>
              <p className="montserrat font-normal text-[15px] md:text-[16px]">
                Purcase Over $100
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6 md:gap-4">
          <div>
            <img src="/Icon.svg" className="w-14 h-14" />
          </div>
          <div className="flex flex-col items-start ">
            <div>
              <h1 className="montserrat font-bold text-[15px] mb-1  md:mb-0.5 md:text-[16px]">
                Timeless Shopping
              </h1>
            </div>
            <div>
              <p className="montserrat font-normal text-[15px] md:text-[16px]">
                24/7 Purchasing
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6 md:gap-4">
          <div>
            <img src="/return.svg" className="w-14 h-14" />
          </div>
          <div className="flex flex-col items-start ">
            <div>
              <h1 className="montserrat font-bold text-[15px] mb-1 md:mb-0.5 md:text-[16px]">
                Product Returns
              </h1>
            </div>
            <div>
              <p className="montserrat font-normal text-[15px] md:text-[16px]">
                No-Questions-Asked Returns
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
