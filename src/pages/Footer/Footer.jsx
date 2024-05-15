import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { TbBrandGmail } from "react-icons/tb";
import { SiLinkedin } from "react-icons/si";
import { FaHashtag } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../src/images/library.svg"
const Footer = () => {
    return (
        <div className="font-Poppins">
            <footer className="footer flex flex-col md:flex-row justify-around p-10 bg-[#d1bf9c] text-black border-y-2 border-t-white  rounded-t-lg border-base-100 ">
                <aside>
                    <img className="w-20" src={logo} alt="" />
                    <p className="text-[#404142] text-lg font-josefin"><span className="text-2xl font-bold text-[#f3701d] font-poppins">Knowledge Corner</span><br /> - Gather Knowledge with Passion</p>
                </aside>
                <nav>
                    <h1 className="text-lg font-semibold">Contact Us - </h1>
                    <h1 className="font-medium text-base font-josefin">- Call 24/7 for any help</h1>
                    <p className="text-base md:text-lg font-bold font-montserrat"> +00 123 456 789</p>
                    <h1 className="font-medium text-base font-josefin">- Mail to our support team</h1>
                    <p className="text-base md:text-lg font-bold font-montserrat">support@domain.com</p>
                </nav>
            </footer>
            <footer className="footer bg-[#a38371] items-center p-4 text-black">
                <aside className="items-center grid-flow-col font-bold">
                    <FaHashtag className="h-5"></FaHashtag>
                    <p className="font-montserrat text-black">Copyright © 2024 - All right reserved by Knowledge Corner</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <Link><TbBrandGmail className="h-5 md:h-7 w-5 md:w-7 text-black hover:text-base-100" /></Link>
                    <Link><SiLinkedin className="h-5 md:h-7 w-5 md:w-7 text-black hover:text-base-100" /></Link>
                    <Link><FaFacebookSquare className="h-5 md:h-7 w-5 text-black md:w-7 hover:text-base-100" /></Link>
                    <Link><GrInstagram className="h-5 md:h-7 w-5 md:w-7 text-black hover:text-base-100" /></Link>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;