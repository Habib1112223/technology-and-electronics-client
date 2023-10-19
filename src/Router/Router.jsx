import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Components/Error/Error";
import Home from "../Components/Pages/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";

const Router =createBrowserRouter([
      {
            path:"/",
            errorElement: <Error></Error>,
            element:<Root></Root>,
            children:[
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
                  }
            ]
      }
]

)
export default Router;