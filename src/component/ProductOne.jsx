import ProductOneSlider from './ProductOneSlider';
import { Link } from 'react-router';
import ArrowRight from '../utilities/ArrowRight';

const ProductOne = () => {
  return (
    <div className="body-color flex flex-col md:flex-row  md:gap-7 py-8 px-6 md:w-full md:items-start md:py-6 md:px-10">
      <div className="flex-none md:w-1/4">
        <h2 className="montserrat font-bold text-[35px] md:text-[30px] link-color">
          Discover Hot Deals For Your Home!
        </h2>
        <div className="mt-2 md:mt-1">
          <div className="flex justify-start">
            <div className="h-1 blue-color rounded-full w-14 md:w-18"></div>
          </div>
        </div>
        <p className="mt-5 md:mt-8 text-[16px] montserrat">
          In Mansoury, daily you can find the highest discounts across all
          categories and products available on the website.
        </p>
        <div className="flex blue-color mt-4 p-2 justify-between items-center rounded-md white-text montserrat font-semibold text-[14px] md:mt-3 w-60 md:w-auto">
          <Link to="/">Show Products</Link>
          <ArrowRight color="#ffffff" width={24} height={24} />
        </div>
      </div>
      <div className="flex-1 mt-5 md:mt-0 min-w-0 ">
        <ProductOneSlider />
      </div>
    </div>
  );
};
export default ProductOne;
