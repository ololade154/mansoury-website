import SearchIcon from '../utilities/SearchIcon';
import CartIcon from '../utilities/CartIcon';
import UserIcon from '../utilities/UserIcon';
import Nav from '../component/Nav';
import Logo from './Logo';
const NavTwo = () => {
  return (
    <div className=" white-color w-full flex flex-col justify-between items-center gap-y-8 py-4 px-8 md:py-6 md:px-28 md:flex-row ">
      <div className="flex flex-row items-center gap-x-4 md:flex-row-reverse md:gap-x-20  ">
        <div>
          <Nav />
        </div>
        <div>
          <Logo />
        </div>
      </div>
      <div className="flex flex-row items-center gap-x-4 ">
        <div className="flex items-center gap-x-2 border border-[#B4B4B4] py-1 md:py-1.5 px-2">
          <div>
            <UserIcon />
          </div>
          <div>
            <p className="link-color text-[16px] md:text-[14px]">
              Register/Login
            </p>
          </div>
        </div>
        <div className="border border-[#B4B4B4] p-1.5">
          <CartIcon />
        </div>
        <div className="border border-[#B4B4B4] p-1.5">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};
export default NavTwo;
