import ProductOneSlider from '../component/ProductOneSlider';

const ProductOne = () => {
  return (
    <div className="background-color border-2 border-amber-400 mt-0 flex gap-x-10">
      <div className="flex-1">
        <h2>Discover Hot Deals For Your Home!</h2>
      </div>
      <div className="flex-2">
        <ProductOneSlider />
      </div>
    </div>
  );
};
export default ProductOne;
