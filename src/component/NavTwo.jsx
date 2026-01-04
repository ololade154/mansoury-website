import Nav from '../component/Nav';
import Logo from './Logo';
const NavTwo = () => {
  return (
    <div className=" mt-14 border-2 border-indigo-600 fixed top-0 left-0 w-full flex flex-col justify-between items-center gap-y-8 py-4 px-8 md:mt-20 md:flex-row  md:py-4 md:px-28 ">
      <div className="flex flex-row items-center gap-x-4 md:flex-row-reverse md:gap-x-20  ">
        <div>
          <Nav />
        </div>
        <div>
          <Logo />
        </div>
      </div>
      <div className="flex flex-row items-center gap-x-14 md:gap-x-10">
        <div>Login</div>
        <div>cart</div>
        <div>Search</div>
      </div>
    </div>
  );
};
export default NavTwo;
