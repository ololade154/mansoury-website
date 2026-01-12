const Display = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 md:gap-3 md:grid-rows-2 w-full py-4 px-8 md:py-6 md:px-16">
      <div className="h-64 md:h-auto relative">
        <img src="/microwave.svg" className=" w-full h-full object-cover  " />
        <div className="absolute overlay-color right-0 top-1/2 -translate-y-1/2 py-2 pr-4 pl-2.5 md:py-4 md:pr-4 md:pl-3  rounded-l-lg lato">
          <p className="overlay-text-color font-medium text-[14px]">30% OFF</p>
          <h1 className="md:text-[20px] font-bold white-text">Quick and Hot</h1>
        </div>
      </div>
      <div className="h-64 md:h-auto relative">
        <img src="/Pot.svg" className=" w-full h-full object-cover  " />
        <div className="absolute overlay-color right-0 top-1/2 -translate-y-1/2  py-1 px-6 md:py-2 md:pr-3.5 pl-3 rounded-l-lg">
          <p className="overlay-text-color font-medium text-[14px]">30% OFF</p>
          <h1 className="md:text-[20px] font-bold white-text">
            Kitchenware from <br />
            Top Brands
          </h1>
        </div>
      </div>
      <div className="h-64 md:h-auto relative">
        <img
          src="/travelling-bag.svg"
          className="w-full h-full object-cover "
        />
        <div className="absolute overlay-color right-0 top-1/2 -translate-y-1/2 py-2.5 px-4.5 md:py-4 md:pr-6 md:pl-4 rounded-l-lg">
          <p className="overlay-text-color font-medium text-[14px]">20% OFF</p>
          <h1 className="md:text-[20px] font-bold white-text">
            Travel with Quality
          </h1>
        </div>
      </div>
      <div className="md:col-span-3 ">
        <div className="grid md:grid-cols-2 gap-4 md:gap-3">
          <div className="h-64 md:h-auto relative">
            <img
              src="/Refrigerator.svg"
              className="w-full h-full object-cover  "
            />
            <div className="absolute overlay-color right-0 top-1/2 -translate-y-1/2 py-1.5 pr-2.5 pl-1.5 md:py-2 md:pr-8 md:pl-6 rounded-l-lg ">
              <p className="overlay-text-color font-medium text-[14px]">
                30% OFF
              </p>
              <h1 className=" md:text-[20px] font-bold white-text">
                Cool and High Quality
                <br />
                Refrigerator/Freezers
              </h1>
            </div>
          </div>
          <div className="h-64 md:h-auto relative">
            <img
              src="/washing-machine.svg"
              className="w-full h-full object-cover "
            />
            <div className="absolute overlay-color right-0 top-1/2 -translate-y-1/2 py-1 pl-1.5 pr-0.1 md:py-2 md:pr-8 md:pl-6 rounded-l-lg">
              <p className="overlay-text-color font-medium text-[14px]">
                30% OFF
              </p>
              <h1 className=" md:text-[20px] font-bold white-text">
                Clean and Gleaming
                <br />
                Clothes
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Display;
