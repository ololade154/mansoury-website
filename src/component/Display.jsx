const Display = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 md:gap-3 md:grid-rows-2 w-full py-4 px-8 md:py-6 md:px-16">
      <div className="h-52 md:h-auto">
        <img src="/microwave.svg" className=" w-full  h-full object-cover " />
      </div>
      <div className="h-52 md:h-auto">
        <img src="/Pot.svg" className=" w-full  h-full object-cover " />
      </div>
      <div className="h-52 md:h-auto">
        <img
          src="/travelling-bag.svg"
          className="w-full  h-full object-cover"
        />
      </div>
      <div className="md:col-span-3 ">
        <div className="grid md:grid-cols-2 gap-4 md:gap-3">
          <div className="h-52 md:h-auto">
            <img
              src="/Refrigerator.svg"
              className="w-full  h-full object-cover "
            />
          </div>
          <div className="h-52 md:h-auto">
            <img
              src="/washing-machine.svg"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Display;
