import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const GridView = ({ allBooks, role }) => {
    return (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-2 md:px-0">
            {
                allBooks.map((book, idx) => <div key={idx} className="card card-compact w-full shadow-lg shadow-slate-50 bg-[#d1bf9c] rounded-b-none">
                    <div className="card-body text-[#404142]">
                        <h2 className="card-title md:h-20 justify-center text-lg md:text-xl font-extrabold hover:text-[#e98f09]">{book.book_name}</h2>
                        <p className="md:text-lg">by <span className="font-bold">{book.book_author}</span></p>
                    </div>
                    <figure className="h-72"><img className="h-full w-full object-fill object-center" src={book.book_photo} alt="Shoes" /></figure>
                    <div className="card-body w-full ">
                        <div className="flex justify-between md:text-xl">
                            <h1 className="md:text-lg font-bold text-[#404142] hover:text-[#e98f09]">{book.book_category}</h1>
                            <div className="hover:tooltip hover:tooltip-open hover:tooltip-left"
                                    data-tip={book.book_rating}>
                                <Rating
                                    placeholderRating={book.book_rating}
                                    emptySymbol={<FaStar className="text-gray-200"></FaStar>}
                                    placeholderSymbol={<FaStar className="text-yellow-600"></FaStar>}
                                    readonly
                                />
                            </div>
                        </div>
                        <hr className="border-dashed border-[#404142]" />
                        <div className="flex justify-around">
                            <Link className="btn bg-[#404142] border-2 border-[#d1c2b2] text-[#d1c2b2] hover:rounded-full hover:bg-transparent hover:text-[#404142] hover:border-[#404142]">View Details</Link>
                            {
                                role === "Librarian" && <Link to={`/update-book/${book.book_name}`} className="btn bg-[#404142] border-2 border-[#d1c2b2] text-[#d1c2b2] hover:rounded-full hover:bg-transparent hover:text-[#404142] hover:border-[#404142]">Update Details</Link>
                            }
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};
GridView.propTypes = {
    allBooks: PropTypes.array.isRequired,
    role: PropTypes.string
};

export default GridView;