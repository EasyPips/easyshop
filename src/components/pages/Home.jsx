import Banner from "../common/Banner";
import ProductLists from "./ProductList";

const Home = () => {
  return ( 
    <div className="pt-12 px-4 sm:px-8 lg:px-16 mx-auto text-center">
      <div className="banner mb-8">
        <Banner />
      </div>
      <ProductLists />
    </div>
  );
};

export default Home;
