import { RiTimelineView } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import PropTypes from 'prop-types';

const ListView = ({ allBooks, role }) => {
    return (
        <div className="mt-10 pb-10">
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
                            {
                                role === "Librarian" && <th>Update</th>
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {
                            allBooks.map((book, idx) => <tr key={book._id} className="text-[4#04142] border-b-2 border-[#404142] md:text-base bg-[#c6bbb0] font-semibold md:font-bold hover:bg-[#404142] hover:text-[#FF9800]">
                                <th>{idx + 1}</th>
                                <td><img className="h-20 w-full object-cover object-center" src={book.book_photo} alt="Watchmen" /></td>
                                <td>{book.book_name}</td>
                                <td>{book.book_author}</td>
                                <td>{book.book_category}</td>
                                <td className="hover:tooltip hover:tooltip-open hover:tooltip-bottom"
                                    data-tip={book.book_rating}><Rating
                                        placeholderRating={book.book_rating}
                                        emptySymbol={<FaStar className="text-gray-200"></FaStar>}
                                        placeholderSymbol={<FaStar className="text-yellow-600"></FaStar>}
                                        readonly
                                    /></td>
                                <td className="text-xl md:text-3xl font-extrabold"><Link to={`/view-details/${book.book_name}`}><RiTimelineView></RiTimelineView></Link></td>
                                {
                                    role === "Librarian" && <td className="text-xl md:text-3xl font-extrabold"><Link to={`/update-book/${book.book_name}`}><FaEdit></FaEdit></Link></td>
                                }
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
ListView.propTypes = {
    allBooks: PropTypes.array.isRequired,
    role: PropTypes.string
};

export default ListView;