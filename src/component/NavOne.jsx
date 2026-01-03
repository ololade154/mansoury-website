import FacebookIcon from '../utilities/facebookIcon';
import Twitter from '../utilities/Twitter';
import InstagramIcon from '../utilities/InstagramIcon';
import TelIcon from '../utilities/TelIcon';
import MailIcon from '../utilities/MailIcon';

const NavOne = () => {
  return (
    <div className="monserrat fixed top-0 left-0 w-full h-14.5 py-8 px-4 md:h-18.5 md:py-10 md:px-28 blue-color z-50 flex items-center justify-between">
      <div className=" hidden md:flex items-center gap-x-2">
        <p className="text-white text-[14px] font-normal">Follow us:</p>
        <div className="icon">
          <InstagramIcon width={21} />
        </div>
        <div className="icon">
          <Twitter width={18} />
        </div>
        <div className="icon">
          <FacebookIcon width={21} />
        </div>
      </div>
      <div className=" flex-1 text-center">
        <p className="text-white font-semibold text-[16px]">
          Winter is coming! 50% off for new year
        </p>
      </div>
      <div className=" hidden md:flex gap-x-3 items-center">
        <div className="flex items-center gap-x-2">
          <div>
            <TelIcon width={24} />
          </div>
          <div>
            <p className="text-white text-[14px] font-normal">(+98) 253-1189</p>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <div>
            <MailIcon width={24} />
          </div>
          <div>
            <p className="text-white text-[14px] font-normal">
              pigmentagency@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavOne;
