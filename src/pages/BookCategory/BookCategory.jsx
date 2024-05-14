import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";

const BookCategory = () => {
    const { categoryName } = useParams();
    console.log(categoryName);
    const axiosSecure = useAxiosSecure();
    const [books, setBooks] = useState([]);
    useEffect(() => {
        axiosSecure.get(`/books?book_category=${categoryName}`)
            .then(res => {
                setBooks(res.data);
            })
    }, [])
    return (
        <div className=" bg-[#30362F] min-h-screen">
            <div className="min-h-screen bg-fixed bg-base-200 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0.2) 100%), url("https://i.ibb.co/wRVvtKh/borrowBG.jpg)` }}>
                <div className="w-full pt-10 pb-10 min-h-screen backdrop-blur-sm bg-base-100/10">
                    <div className="max-w-lg bg-[#d1bf9c] border-2 border-[#404142] px-2 py-2 flex justify-center items-center mx-auto rounded-full w-auto">
                        <h3 className="text-2xl md:text-4xl font-bold text-center text-[#404142]">Category :<span className="text-[#e08908]"> {categoryName}</span></h3>
                    </div>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-5 px-2 md:px-0">
                        {
                            books.map(book => <div key={book._id} className="card card-compact w-full shadow-lg shadow-slate-50 bg-[#d1bf9c] rounded-b-none">
                                <div className="card-body text-[#404142]">
                                    <h2 className="card-title md:h-28 justify-center text-lg md:text-xl font-extrabold hover:text-[#e98f09]">{book.book_name}</h2>
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
                                        <Link to={`/view-details/${book.book_name}`} className="btn bg-[#404142] border-2 border-[#d1c2b2] text-[#d1c2b2] hover:rounded-full hover:bg-transparent hover:text-[#404142] hover:border-[#404142]">View Details</Link>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCategory;