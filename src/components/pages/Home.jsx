import Banner from "../common/Banner";
import ProductLists from "./ProductList";


const Home = () => {
    return ( 
        <div className="pt-25 p-30 mx-auto text-center">
            <div className="banner">
                <Banner/>
            </div>
            <ProductLists/>
        </div>
     );
}
 
export default Home;