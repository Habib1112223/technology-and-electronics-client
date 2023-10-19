import { Outlet } from "react-router-dom";


const Root = () => {
      return (
            <div className="font-ranchos">
                  <Outlet></Outlet>
            </div>
      );
};

export default Root;