import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from 'react-router-dom';

const GridView = () => {
    return (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-2 md:px-0">
            <div className="card card-compact w-full shadow-xl shadow-slate-50 bg-[#d1bf9c] rounded-b-none">
                <div className="card-body text-[#404142]">
                    <h2 className="card-title justify-center text-xl md:text-2xl font-extrabold">Watchmen</h2>
                    <p className="md:text-lg">by <span className="font-bold">Alan Moore</span></p>
                </div>
                <figure className="h-72"><img className="h-full w-full object-fill object-center" src="https://i.ibb.co/9Tdpck0/Watchmen.webp" alt="Shoes" /></figure>
                <div className="card-body w-full ">
                    <div className="flex justify-between md:text-xl">
                        <p className="font-bold text-[#404142]">Comics</p>
                        <Rating
                            placeholderRating={4.5}
                            emptySymbol={<FaStar className="text-gray-200"></FaStar>}
                            placeholderSymbol={<FaStar className="text-yellow-600"></FaStar>}
                            readonly
                        />
                    </div>
                    <hr className="border-dashed border-[#404142]" />
                    <div className="flex justify-around">
                        <Link className="btn bg-[#404142] border-2 border-[#d1c2b2] text-[#d1c2b2] hover:rounded-full hover:bg-transparent hover:text-[#404142] hover:border-[#404142]">View Details</Link>
                        <Link className="btn bg-[#404142] border-2 border-[#d1c2b2] text-[#d1c2b2] hover:rounded-full hover:bg-transparent hover:text-[#404142] hover:border-[#404142]">Update Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridView;