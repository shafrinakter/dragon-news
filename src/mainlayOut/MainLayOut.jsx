import { Outlet } from "react-router-dom";
import Navbar from "../page/shared/navbar/Navbar";
import Home from "../page/home/Home";


const MainLayOut = () => {
    return (
        <div className="font-poppins max-w-6xl mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;