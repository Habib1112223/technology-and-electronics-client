// import Shops from "../../../Shops/Shops";
import Banner from "../../components/Banner/Banner";
import Blog from "../../components/Blogs/Blogs";
import CallToAction from "../../components/CallToAction/CallToAction";
import Products from "../Products/Products";
import HomeCategories from "./HomeCategories";


const Home = () => {
      return (
            <div>
               <Banner></Banner>
               {/* <Products></Products> */}
               {/* <Shops></Shops> */}
               <HomeCategories></HomeCategories>
               <Blog></Blog>
               <CallToAction></CallToAction>
            </div>
      );
};

export default Home;