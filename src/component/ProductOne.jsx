import ProductOneSlider from '../component/ProductOneSlider';

const ProductOne = () => {
  return (
    <div className="body-color flex-col flex md:flex-row overflow-hidden py-4 px-8 md:py-6 md:px-16">
      <div className="flex-none md:w-1/3">
        <h2>Discover Hot Deals For Your Home!</h2>
      </div>
      <div className="flex-1 min-w-0">
        <ProductOneSlider />
      </div>
    </div>
  );
};
export default ProductOne;
