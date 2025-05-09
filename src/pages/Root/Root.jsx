import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div className="bg-base-200 min-h-screen font-poppins">
            <div className="h-[88px] lg:h-[104px]">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <ToastContainer />
            <Footer></Footer>
        </div>
    );
};

export default Root;