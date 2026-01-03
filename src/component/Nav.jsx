import { useState } from 'react';
import { NavLink } from 'react-router';
import { Menu, X } from 'lucide-react';

const NavLinks = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">Product</NavLink>
      <NavLink to="/">Page</NavLink>
      <NavLink to="/">About Us</NavLink>
      <NavLink to="/"> Contact Us</NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav>
        <div className="hidden md:flex">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavBar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div>
          <NavLinks />
        </div>
      )}
    </>
  );
};
export default Nav;
