const Display = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 md:gap-3 md:grid-rows-2 w-full py-4 px-8 md:py-6 md:px-16">
      <div className="h-64 md:h-auto relative">
        <img src="/microwave.svg" className=" w-full h-full object-cover  " />
        <div className="absolute overlay-color right-0 top-1/2 -translate-y-1/2 py-2 px-4 md:py-4 md:px-6 rounded-l-lg ">
          <p className="">30% OFF</p>
          <h1>Quick and Hot</h1>
        </div>
      </div>
      <div className="h-64 md:h-auto relative">
        <img src="/Pot.svg" className=" w-full h-full object-cover  " />
        <div className="absolute overlay-color right-0 top-1/2 -translate-y-1/2  py-1 px-6 md:py-2 md:px-8 rounded-l-lg">
          <p className="">30% OFF</p>
          <h1>
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
        <div className="absolute overlay-color right-0 top-1/2 -translate-y-1/2 py-2.5 px-4.5 md:py-4 md:px-6 rounded-l-lg">
          <p className="">20% OFF</p>
          <h1>Travel with Quality</h1>
        </div>
      </div>
      <div className="md:col-span-3 ">
        <div className="grid md:grid-cols-2 gap-4 md:gap-3">
          <div className="h-64 md:h-auto relative">
            <img
              src="/Refrigerator.svg"
              className="w-full h-full object-cover  "
            />
            <div className="absolute overlay-color right-0 top-1/2 -translate-y-1/2 py-1.5 px-3.5 md:py-2 md:px-12 rounded-l-lg ">
              <p className="">30% OFF</p>
              <h1>
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
            <div className="absolute overlay-color right-0 top-1/2 -translate-y-1/2 py-1 px-2 md:py-2 md:px-12 rounded-l-lg">
              <p className="">30% OFF</p>
              <h1>
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
