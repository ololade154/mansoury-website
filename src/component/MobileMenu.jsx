// import { NavLink } from 'react-router';
//
// const MobileMenu = () => {
//   return (
//     <div>
//       <div className="flex flex-col gap-6 white-color blue-text h-screen w-full abolute z-20 md:hidden text-[16px] md:text-[18px] font-semibold border-2 border-amber-200">
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/">Products</NavLink>
//         <NavLink to="/">Pages</NavLink>
//         <NavLink to="/">About Us</NavLink>
//         <NavLink to="/"> Contact Us</NavLink>
//       </div>
//     </div>
//   );
// };
// export default MobileMenu;
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const MobileMenu = ({ open }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: '100%' }} // start off-screen RIGHT
          animate={{ x: 0 }} // move into view
          exit={{ x: '100%' }} // move back to RIGHT
          transition={{
            duration: 0.4,
            ease: 'easeInOut', // same transition both ways
          }}
          className="fixed right-0 w-full h-screen bg-white z-20 md:hidden"
        >
          <div className="flex flex-col gap-6 p-6 text-lg blue-text md:hidden">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/pages">Pages</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
