// import { useState } from 'react';
// import { NavLink } from 'react-router';
// import { Menu, X } from 'lucide-react';
//
// const NavLinks = () => {
//   return (
//     <div className=" flex flex-col md:flex-row gap-y-4 md:gap-x-6 link-color montserrat text-[16px] md:text-[18px] font-semibold ">
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/">Products</NavLink>
//       <NavLink to="/">Pages</NavLink>
//       <NavLink to="/">About Us</NavLink>
//       <NavLink to="/"> Contact Us</NavLink>
//     </div>
//   );
// };
//
// const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleNavBar = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <>
//       <nav>
//         <div className="hidden md:flex">
//           <NavLinks />
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleNavBar}>
//             {isOpen ? (
//               <X color="#438db8" height={32} width={32} strokeWidth={1.5} />
//             ) : (
//               <Menu color="#438db8" height={32} width={32} strokeWidth={1.5} />
//             )}
//           </button>
//         </div>
//       </nav>
//       {isOpen && (
//         <div className="md:hidden">
//           <NavLinks />
//         </div>
//       )}
//     </>
//   );
// };
// export default Nav;
