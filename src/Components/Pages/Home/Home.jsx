import Banner from "../../../Banner/Banner";
import Footer from "../../../Footer/Footer";
import Products from "../../../Products/Products";
// import Shops from "../../../Shops/Shops";
import Navbar from "../Navbar/Navbar";


const Home = () => {
      return (
            <div>
               <Navbar></Navbar> 
               <Banner></Banner>
               <Products></Products>
               {/* <Shops></Shops> */}
               <Footer></Footer>
            </div>
      );
};

export default Home;