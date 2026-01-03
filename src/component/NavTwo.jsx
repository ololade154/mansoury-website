import Nav from '../component/Nav';
const NavTwo = () => {
  return (
    <div className="bg-red-700 mt-16 border-2 border-indigo-600 fixed top-0 left-0 w-full h-16 flex py-8 px-4 md:mt-20">
      <div>logo</div>
      <div>
        <Nav />
      </div>
      <div>bar</div>
    </div>
  );
};
export default NavTwo;
