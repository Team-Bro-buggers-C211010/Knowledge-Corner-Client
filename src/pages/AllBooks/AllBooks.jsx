import { FaListAlt } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ListView from "../../components/ListView/ListView";
import GridView from "../../components/GridView/GridView";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { PacmanLoader } from "react-spinners";
import { Helmet } from "react-helmet";
const AllBooks = () => {
    const axiosSecure = useAxiosSecure();
    const [allBooks, setAllBooks] = useState([]);
    const [view, selectView] = useState("List");
    const [show, setShow] = useState("All");
    const [role, setRole] = useState(null);
    const {user} = useContext(AuthContext);
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        if (user) {
            axiosSecure
                .get(`/users?email=${user?.email}`)
                .then((res) => {
                    setRole(res.data[0].role);
                    setLoader(false);
                });
        } else {
            setRole(null);
            setLoader(false);
        }
    }, [user?.email, axiosSecure, user])
    const handleShow = (checkShow) => {
        setShow(checkShow);
    }
    useEffect(() => {
        selectView("List");
    }, []);
    const handleView = (check) => {
        selectView(check);
    }
    useEffect(() => {
        if (show === "All") {
            axiosSecure.get(`/books`)
                .then(res => {
                    setAllBooks(res.data);
                    setLoader(false);
                })
        }
        else {
            axiosSecure.get(`/books?book_quantity=0`)
                .then(res => {
                    setAllBooks(res.data);
                    setLoader(false);
                })
        }
    }, [show, axiosSecure])

    if(loader) {
        return <div className="flex justify-center items-center h-screen"><PacmanLoader color="#ff9900" /></div>
    }
    return (
        <div className="pt-10 bg-[#30362F] min-h-screen font-montserrat">
            <Helmet>
                <title>{"Knowledge Corner | Home | All Collections"}</title>
            </Helmet>
            <div className="max-w-sm bg-[#d1bf9c] border-2 border-[#404142] px-2 py-2 flex justify-center items-center mx-auto rounded-full w-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-center text-[#404142]">View All Collections : </h3>
            </div>
            <div className="container mx-auto px-1 md:px-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-x-2 gap-y-2 md:gap-y-0 mt-8">
                    <div className="flex gap-x-2 md:gap-x-4 items-center">
                        <h3 className="text-lg md:text-3xl text-[#FF9800] font-bold font-montserrat">Filter :</h3>
                        <div className="flex border-2 text-sm md:text-lg border-[#404142] text-[#36383a] items-center font-medium bg-[#C6AD8F] p-2">
                            <Link onClick={() => handleShow("Available")} className={`border-r-4 pr-2 md:pr-4 border-[#404142] font-montserrat ${show === "Available" ? "text-white" : ""} hover:text-white`}>Available Books</Link>
                            <Link onClick={() => handleShow("All")} className="ml-4 hover:text-white font-montserrat">Reset</Link>
                        </div>
                    </div>
                    <div className="flex gap-x-2 md:gap-x-4 items-center font-montserrat">
                        <h3 className="text-lg md:text-3xl text-[#FF9800] font-bold">View In : </h3>
                        <div className="flex items-center bg-[#C6AD8F] border-2 border-[#404142] gap-x-2 p-2">
                            <NavLink
                                onClick={() => handleView("List")}
                                className={({ isActive }) =>
                                    isActive ? `text-lg md:text-3xl ${view === "List" ? "text-white" : "text-[#404142]"} hover:text-white font-bold hover:tooltip hover:tooltip-open hover:tooltip-bottom` : "text-lg md:text-3xl text-[#404142] font-bold hover:text-white hover:tooltip hover:tooltip-open hover:tooltip-bottom"}
                                data-tip="List View"
                            >
                                <FaListAlt />
                            </NavLink>
                            <NavLink
                                onClick={() => handleView("Grid")}
                                className={({ isActive }) =>
                                    isActive ? `text-lg md:text-3xl ${view === "Grid" ? "text-white" : "text-[#404142]"} font-bold hover:tooltip hover:tooltip-open hover:tooltip-bottom` : "text-lg md:text-3xl text-[#404142] font-bold hover:text-white hover:tooltip hover:tooltip-open hover:tooltip-bottom"}
                                data-tip="Grid View"
                            >
                                <BsFillGrid3X3GapFill />
                            </NavLink>
                        </div>
                    </div>
                </div>
                {
                    view === "List" ? <ListView role={role} allBooks={allBooks}></ListView> : <GridView role={role} allBooks={allBooks}></GridView>
                }
            </div>
        </div>
    );
};

export default AllBooks;