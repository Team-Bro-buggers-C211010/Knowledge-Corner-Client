import { FaListAlt } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
const AllBooks = () => {
    const [view, selectView] = useState("List");
    useEffect(() => {
        selectView("List");
    }, []);
    const handleView = (check) => {
        selectView(check);
    }
    return (
        <div className="pt-10 bg-[#30362F] min-h-screen">
            <div className="max-w-sm bg-[#d1bf9c] border-2 border-[#404142] px-2 py-2 flex justify-center items-center mx-auto rounded-full w-auto">
                <h3 className="text-2xl md:text-4xl font-bold text-center text-[#404142]">View All Collections : </h3>
            </div>
            <div className="container mx-auto px-1 md:px-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-x-2 gap-y-2 md:gap-y-0 mt-8">
                    <div className="flex gap-x-2 md:gap-x-4 items-center">
                        <h3 className="text-lg md:text-3xl text-[#FF9800] font-bold">Filter :</h3>
                        <div className="flex border-2 text-sm md:text-lg border-[#404142] text-[#36383a] items-center font-medium bg-[#C6AD8F] p-2">
                            <Link className="border-r-4 pr-2 md:pr-4 border-[#404142] hover:text-white">Available Books</Link>
                            <Link className="ml-4 hover:text-white">Reset</Link>
                        </div>
                    </div>
                    <div className="flex gap-x-2 md:gap-x-4 items-center">
                        <h3 className="text-lg md:text-3xl text-[#FF9800] font-bold">View In : </h3>
                        <div className="flex items-center bg-[#C6AD8F] border-2 border-[#404142] gap-x-2 p-2">
                            <NavLink
                                onClick={() => handleView("List")}
                                to="/all-books"
                                className={({ isActive }) =>
                                    isActive ? `text-lg md:text-3xl ${view === "List" ? "text-white" : "text-[#404142]"} hover:text-white font-bold hover:tooltip hover:tooltip-open hover:tooltip-bottom` : "text-lg md:text-3xl text-[#404142] font-bold hover:text-white hover:tooltip hover:tooltip-open hover:tooltip-bottom"}
                                data-tip="List View"
                            >
                                <FaListAlt />
                            </NavLink>
                            <NavLink
                                onClick={() => handleView("Grid")}
                                to="/all-books/grid-view"
                                className={({ isActive }) =>
                                    isActive ? `text-lg md:text-3xl ${view === "Grid" ? "text-white" : "text-[#404142]"} font-bold hover:tooltip hover:tooltip-open hover:tooltip-bottom` : "text-lg md:text-3xl text-[#404142] font-bold hover:text-white hover:tooltip hover:tooltip-open hover:tooltip-bottom"}
                                data-tip="Grid View"
                            >
                                <BsFillGrid3X3GapFill />
                            </NavLink>
                        </div>
                    </div>
                </div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AllBooks;