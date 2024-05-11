import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <div className="h-[96px]">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;