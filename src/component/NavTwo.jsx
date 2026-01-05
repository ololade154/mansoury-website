// import SearchIcon from '../utilities/SearchIcon';
// import CartIcon from '../utilities/CartIcon';
// import UserIcon from '../utilities/UserIcon';
// import Nav from '../component/Nav';
// import Logo from './Logo';
// const NavTwo = () => {
//   return (
//     <div className=" white-color w-full flex flex-col justify-between items-center gap-y-8 py-4 px-8 md:py-6 md:px-28 md:flex-row ">
//       <div className="flex flex-row items-center gap-x-4 md:flex-row-reverse md:gap-x-20  ">
//         <div>
//           <Nav />
//         </div>
//         <div>
//           <Logo />
//         </div>
//       </div>
//       <div className="flex flex-row items-center gap-x-4 ">
//         <div className="flex items-center gap-x-1 border border-[#B4B4B4] py-1 md:py-1.5 px-2">
//           <div>
//             <UserIcon />
//           </div>
//           <div>
//             <p className="link-color text-[16px] md:text-[14px] montserrat">
//               Register/Login
//             </p>
//           </div>
//         </div>
//         <div className="border border-[#B4B4B4] p-1.5">
//           <CartIcon />
//         </div>
//         <div className="border border-[#B4B4B4] p-1.5">
//           <SearchIcon />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default NavTwo;
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router';
import Logo from '../component/Logo';
import UserIcon from '../utilities/UserIcon';
import CartIcon from '../utilities/CartIcon';
import SearchIcon from '../utilities/SearchIcon';
import MobileMenu from '../component/MobileMenu';
const NavTwo = () => {
  const [open, setOpen] = useState(false);
  const toggleNavBar = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav>
        <div className="flex justify-between items-center py-4 px-8 md:py-6 md:px-28 w-full montserrat white-color border-2 border-red-500">
          {/* logo section */}
          <div>
            <Logo />
          </div>
          {/* menu section  */}
          <div className="hidden md:block ">
            <div className="flex items-center gap-6 link-color text-[16px] md:text-[18px] font-semibold ">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/">Products</NavLink>
              <NavLink to="/">Pages</NavLink>
              <NavLink to="/">About Us</NavLink>
              <NavLink to="/"> Contact Us</NavLink>
            </div>
          </div>
          {/* icon section */}
          <div className="flex flex-row items-center gap-x-1 md:gap-x-4 ">
            <div className="flex items-center gap-x-1 border border-[#B4B4B4] py-1 md:py-1.5 px-2">
              <div>
                <UserIcon />
              </div>
              <div>
                <p className="link-color text-[16px] md:text-[14px] montserrat">
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
          {/* mobile menu hamburger */}
          <div className="md:hidden" onClick={toggleNavBar}>
            {open ? (
              <X color="#438db8" height={32} width={32} strokeWidth={1.5} />
            ) : (
              <Menu color="#438db8" height={32} width={32} strokeWidth={1.5} />
            )}
          </div>
        </div>
      </nav>
      {/* mobile sidebar section */}
      <MobileMenu open={open} />
    </>
  );
};
export default NavTwo;
