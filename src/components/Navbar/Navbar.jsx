import { useEffect, useState } from "react";
import libraryLogo from "../../images/library.svg";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    const navLinks = <>
        <NavLink className={({ isActive }) =>
            isActive ? "border-2 p-1 md:p-3 border-[#ea9b25]  rounded-lg text-[#FF9800]" : "p-3 hover:border-2  hover:bg-transparent hover:rounded-lg hover:text-[#FF9800] hover:border-[#ea9b25]"}>Home</NavLink>
        <NavLink to="/all-books" className={({ isActive }) =>
            isActive ? "border-2 p-1 md:p-3 border-[#ea9b25] rounded-lg text-[#FF9800]" : "p-3 hover:border-2  hover:bg-transparent  hover:rounded-lg hover:text-[#FF9800] hover:border-[#ea9b25]"}>All Books</NavLink>
        <NavLink to="/add-book" className={({ isActive }) =>
            isActive ? "border-2 p-1 md:p-3 border-[#ea9b25] rounded-lg text-[#FF9800]" : "p-3 hover:border-2  hover:bg-transparent hover:rounded-lg hover:text-[#FF9800] hover:border-[#ea9b25]"}>Add Books</NavLink>
        <NavLink to="/borrow-books" className={({ isActive }) =>
            isActive ? "border-2 p-1 md:p-3 border-[#ea9b25] rounded-lg text-[#FF9800]" : "p-3 hover:border-2  hover:bg-transparent hover:rounded-lg hover:text-[#FF9800] hover:border-[#ea9b25]"}>Borrowed Books</NavLink>
    </>
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="flex justify-center items-center">
            <div className={`navbar fixed top-0 items-center w-full text-[#C6AD8F] z-50 py-4 transition-colors duration-300 ${scrolled ? 'bg-[#36383a] container mx-auto rounded-full mt-5' : 'bg-[#484239]'}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost hover:bg-transparent text-sm md:text-2xl hover:border-2 rounded-xl hover:border-[#ea9b25] flex gap-x-1 md:gap-x-2 items-center text-[#FF9800] font-bold"> <div className=""><img className="h-5 md:h-12" src={libraryLogo} alt="library logo" /></div> <div><span className="text-[#C6AD8F]">Knowledge</span> Corner</div></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ml-5 bg-transparent items-center gap-2 md:gap-5 font-bold">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end hidden md:flex gap-x-1">
                    <NavLink to="/login" className="btn text-white bg-[#cbb58b] rounded-full hover:border hover:border-[#ea9b25] hover:text-[#FF9800] hover:bg-transparent">Log In</NavLink>
                    <NavLink to="/register" className="btn text-white bg-[#cbb58b] rounded-full hover:border hover:border-[#ea9b25] hover:text-[#FF9800] hover:bg-transparent">Register</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
