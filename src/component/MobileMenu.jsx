import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SearchIcon from '../utilities/SearchIcon';
import CartIcon from '../utilities/CartIcon';
import UserIcon from '../utilities/UserIcon';

const MobileMenu = ({ open }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
          }}
          className="fixed right-0 w-full h-screen body-color z-20"
        >
          <div className="flex flex-col gap-6 p-6 text-lg blue-text md:hidden text-[16px] font-semibold">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/pages">Pages</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <div className="flex md:hidden gap-4 ">
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
