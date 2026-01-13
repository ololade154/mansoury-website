const Features = () => {
  return (
    <div className="flex flex-col item-center gap-6 md:flex-row md:justify-between md:items-center py-8 px-12 md:py-10 md:px-16">
      <div className="flex items-center gap-5 md:gap-3">
        <div>
          <img src="/user.svg" />
        </div>
        <div className="flex flex-col">
          <div>
            <h1>Online Support</h1>
          </div>
          <div>
            <p>Dedicated Support Team</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5 md:gap-3">
        <div>
          <img src="/truck.svg" />
        </div>
        <div className="flex flex-col">
          <div>
            <h1>Free Shipping </h1>
          </div>
          <div>
            <p>Purcase Over $100</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5 md:gap-3">
        <div>
          <img src="/Icon.svg" />
        </div>
        <div className="flex flex-col">
          <div>
            <h1>Timeless Shopping </h1>
          </div>
          <div>
            <p>24/7 Purchasing</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5 md:gap-3">
        <div>
          <img src="/return.svg" />
        </div>
        <div className="flex flex-col">
          <div>
            <h1>Product Returns</h1>
          </div>
          <div>
            <p>No-Questions-Asked Returns</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
