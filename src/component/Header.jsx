import NavOne from '../component/NavOne';
import NavTwo from '../component/NavTwo';
const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 ">
      <NavOne />
      <NavTwo />
    </div>
  );
};
export default Header;
