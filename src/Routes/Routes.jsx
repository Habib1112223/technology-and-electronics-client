import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddProduct from "../Pages/Products/AddProduct";
import Carts from "../Pages/Carts/Carts";
import UpdateProduct from "../Pages/Products/updateProduct";
import SingleCategory from "../Pages/Category/SingleCategory";
import SingleProduct from "../Pages/Products/SIngleProduct";
import PrivateRoute from "./PrivateRoutes";

const routes =createBrowserRouter([
      {
            path:"/",
            errorElement: <Error></Error>,
            element:<Main></Main>,
            children: [
                  {
                        path:"/",
                        element:<Home></Home>
                  },

                  {
                        path:"/login",
                        element:<Login></Login>
                  },

                  
                  {
                        path:"/register",
                        element:<Register></Register>
                  },

                  {
                        path:"/addProducts",
                        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
                  },
                  
                  {
                        path:"/update-products/:id",
                        loader: async({params}) => fetch(`https://tech-and-electro.vercel.app/product/${params.id}`),
                        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>
                  },
                                                
                  {
                        path:"/category/:id",
                        loader: async({params}) => fetch(` https://tech-and-electro.vercel.app/category/${params.id}`),
                        element: <SingleCategory></SingleCategory>
                  },
                  
                  {
                        path:"/product/:id",
                        loader: async({params}) => fetch(` https://tech-and-electro.vercel.app/product/${params.id}`),
                        element: <SingleProduct></SingleProduct>,
                  },
                  {
                        path:"/my-carts",
                        element: <PrivateRoute><Carts></Carts></PrivateRoute>
                  }
            ]
      },
      {
            path: '*',
            element: <Error></Error>
      }
]

)
export default routes;