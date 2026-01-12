import Header from '../component/Header';
import Hero from '../component/Hero';
import ProductOne from './ProductOne';
import ProductDisplay from './ProductDisplay';
import Gallery from './Gallery';
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <ProductOne />
      <ProductDisplay />
      <Gallery />
      <ProductDisplay />
    </>
  );
};
export default Home;
