import ProductOneSlider from '../component/ProductOneSlider';

const ProductOne = () => {
  return (
    <div className="background-color border-2 flex">
      <div className="flex-none">
        <h2>Discover Hot Deals For Your Home!</h2>
      </div>
      <div className="flex-1 min-w-0">
        <ProductOneSlider />
      </div>
    </div>
  );
};
export default ProductOne;
