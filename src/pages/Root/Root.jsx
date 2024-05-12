import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <div className="h-[80px] lg:h-[100px]">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;