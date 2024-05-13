import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";

const ViewDetails = () => {
    const { bookName } = useParams();
    const [book, setBook] = useState({});
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get(`/books?book_name=${bookName}`)
            .then(res => {
                setBook(res.data[0]);
            })
    }, [bookName, axiosSecure])
    return (
        <div className="pt-6 md:pt-10 md:h-[800px] container mx-auto">
            <div className="card md:card-side bg-base-100 shadow-xl">
                <figure className="md:h-[800px] md:w-2/5"><img className="h-full w-full object-fill object-center" src={book.book_photo} alt="Album" /></figure>
                <div className="card-body flex items-center justify-center md:w-3/5">
                    <div className="">
                        <h1 className="card-title md:text-5xl">{book.book_name}</h1>
                        <div className="flex items-center gap-x-2 md:text-2xl mt-5">
                            <h2 className="md:text-2xl font-medium">Rating :</h2>
                            <div className="hover:tooltip hover:tooltip-open hover:tooltip-right"
                                data-tip={book.book_rating}>
                                <Rating
                                    placeholderRating={book.book_rating}
                                    emptySymbol={<FaStar className="text-gray-200"></FaStar>}
                                    placeholderSymbol={<FaStar className="text-yellow-500"></FaStar>}
                                    readonly
                                />
                            </div>
                        </div>
                        <hr className="border-dashed mb-5 mt-5" />
                        <h2 className="md:text-2xl font-medium mb-3">Author :<span className="text-[#FF9800]"> {book.book_author}</span></h2>
                        <h2 className="md:text-2xl font-medium mb-3">Category :<span className="text-[#FF9800]"> {book.book_category}</span></h2>
                        <h2 className="md:text-2xl font-medium mb-3">Quantity :<span className="text-[#FF9800]"> {book.book_quantity}</span></h2>
                        <hr className="border-dashed mb-5 mt-5" />
                        <h2 className="md:text-2xl font-medium">Description : <br /><span className="md:text-lg">{book.book_short_description}</span></h2>
                        <hr className="border-dashed mb-5 mt-5" />
                        <h2 className="md:text-2xl font-medium">Book Content : <br /><span className="md:text-lg">{book.
                            book_content}</span></h2>
                        <Link className="btn mt-5 bg-[#404142] border-2 border-[#d1c2b2] text-[#d1c2b2] hover:rounded-full hover:bg-transparent hover:text-[#404142] hover:border-[#404142]">Borrow It</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;