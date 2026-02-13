import ProductOneSlider from './ProductOneSlider';

const ProductOne = () => {
  return (
    <div className="body-color flex-col flex md:flex-row py-8 px-4 md:w-full md:item-start md:py-6 md:px-10">
      <div className="flex-none md:w-1/4 text-center md:pt-4">
        <h2>Discover Hot Deals For Your Home!</h2>
        <p className="mt-10">
          In Mansoury, daily you can find the highest discounts across all
          categories and products available on the website.
        </p>
      </div>
      <div className="flex-1 mt-5 md:mt-0 min-w-0 ">
        <ProductOneSlider />
      </div>
    </div>
  );
};
export default ProductOne;
