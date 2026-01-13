import { Link } from 'react-router';
import ArrowRight from '../utilities/ArrowRight';
const Section = () => {
  return (
    <div className="relative ">
      <img
        src="/mobileBackground-image.svg"
        alt="image"
        className="block md:hidden object-cover object-center max-w-full h-auto  w-full "
      />
      <img
        src="/Background-image.svg"
        alt="image"
        className="hidden md:block object-cover object-center max-w-full h-auto w-full "
      />
      <div className="overlay-color absolute right-10 pl-10 pr-10 md:right-50 md:pl-16 md:pr-16 top-0 bottom-0 flex flex-col justify-center ">
        <h1 className="text-[22px] font-bold montserrat white-text leading-relaxed">
          Mansoury. <br /> Steel 10-piece <br /> CookWare Set
        </h1>
        <div className="flex border border-white mt-1 p-2 justify-between items-center rounded-md white-text montserrat font-semibold text-[14px] md:mt-3 ">
          <Link to="/">Show Products</Link>
          <ArrowRight color="#ffffff" width={24} height={24} />
        </div>
      </div>
    </div>
  );
};
export default Section;
