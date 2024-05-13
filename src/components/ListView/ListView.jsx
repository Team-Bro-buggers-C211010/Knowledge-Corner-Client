import { RiTimelineView } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
const ListView = () => {
    return (
        <div className="mt-10">
            <div className="overflow-x-auto px-2 md:px-0">
                <table className="table border-2 border-[#404142]">
                    {/* head */}
                    <thead>
                        <tr className="bg-[#d1bf9c] md:text-lg text-[#404142] border-b-2 border-[#404142]">
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Author Name</th>
                            <th>Category</th>
                            <th>Rating</th>
                            <th>View Details</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="text-[#404142] border-b-2 border-[#404142] md:text-base bg-[#c6bbb0] font-semibold md:font-bold hover:bg-[#404142] hover:text-[#FF9800]">
                            <th>1</th>
                            <td><img className="h-20 md:w-16 object-cover object-center" src="https://i.ibb.co/9Tdpck0/Watchmen.webp" alt="Watchmen" /></td>
                            <td>Watchmen</td>
                            <td>Alan Moore</td>
                            <td>Comics</td>
                            <td><Rating
                                placeholderRating={4.5}
                                emptySymbol={<FaStar className="text-gray-200"></FaStar>}
                                placeholderSymbol={<FaStar className="text-yellow-600"></FaStar>}
                                readonly
                            /></td>
                            <td className="text-xl md:text-3xl font-extrabold"><Link><RiTimelineView></RiTimelineView></Link></td>
                            <td className="text-xl md:text-3xl font-extrabold"><Link><FaEdit></FaEdit></Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListView;