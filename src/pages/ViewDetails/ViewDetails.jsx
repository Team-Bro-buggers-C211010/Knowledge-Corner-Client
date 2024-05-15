import { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { PacmanLoader } from "react-spinners";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const ViewDetails = () => {
    const { bookName } = useParams();
    const [book, setBook] = useState({});
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [borrowDate, setBorrowDate] = useState('');
    const inputRef = useRef();
    const [borrowedBook, setBorrowedBook] = useState({});
    const [alreadyBorrowed, setAlreadyBorrowed] = useState(false);
    const [change, setChange] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];
        if(inputRef.current){
            inputRef.current.value = formattedDate;
        }
        setBorrowDate(formattedDate);
    }, []);

    useEffect(() => {
        axiosSecure.get(`/books?book_name=${bookName}`)
            .then(res => {
                setBook(res.data[0]);
                setLoading(false);
            })
    }, [change])

    useEffect(() => {
        axiosSecure.get(`/borrowed-books?user_email=${user?.email}&book_name=${bookName}`)
            .then(res => {
                setBorrowedBook(res.data[0]);
                setLoading(false);
            })
    }, [])

    useEffect(() => {
        if (borrowedBook?.book_name === bookName) {
            setAlreadyBorrowed(true);
        }
    }, [borrowedBook, bookName]);

    if(loading){
        return (
            <div className="w-full h-screen flex justify-center items-center text-[#ff9900]"><PacmanLoader color="#ff9900" /></div>
        )
    }

    const handleBorrowBook = (e) => {
        const form = e.target;
        const user_name = form.user_name.value;
        const user_email = form.user_email.value;
        const return_date = form.return_date.value;
        const borrow_date = borrowDate;
        if (borrowDate > return_date) {
            Swal.fire({
                position: "top",
                icon: "warning",
                title: "Return date should be greater than borrow date !!!",
                showConfirmButton: false,
                timer: 2000
              });
            return;
        }
        const borrow_details = { user_name, user_email, borrow_date, return_date, book_name: book.book_name, book_photo: book.book_photo, book_category: book.book_category };
        axiosSecure.post(`/borrowed-books`, borrow_details)
            .then(res => {
                setAlreadyBorrowed(true);
                form.reset();
                axiosSecure.patch(`/books?book_name=${bookName}`, {})
                    .then(res => {
                        setChange(!change)
                        Swal.fire({
                            position: "top",
                            icon: "success",
                            title: "You Borrow this book successfully !!! ",
                            showConfirmButton: false,
                            timer: 2000
                          });
                    })
                    .catch(error => {
                        Swal.fire({
                            position: "top",
                            icon: "error",
                            title: `Error : ${error}`,
                            showConfirmButton: false,
                            timer: 2000
                          });
                        // Handle the error here
                    });
            })
    }
    return (
        <div className="pt-6 md:pt-10 mb-10 min-h-screen container mx-auto px-1 text-base-content">
            <Helmet>
                <title>{`${user.displayName} | Books | ${book.book_name}`}</title>
            </Helmet>
            <div className="card lg:card-side font-montserrat lg:h-[800px] bg-base-100 shadow-xl">
                <figure className="md:h-[600px] lg:h-[800px] lg:w-2/5"><img className="h-full w-full object-fill object-center" src={book.book_photo} alt="Album" /></figure>
                <div className="card-body flex items-center justify-center lg:w-3/5">
                    <div className="">
                        <h1 className="card-title md:text-2xl lg:text-5xl font-josefin">{book.book_name}</h1>
                        <div className="flex items-center gap-x-2 md:text-lg lg:text-2xl mt-5">
                            <h2 className="md:text-lg lg:text-2xl font-medium">Rating :</h2>
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
                        <h2 className="md:text-lg lg:text-2xl font-medium mb-3">Author :<span className="text-[#FF9800] font-josefin"> {book.book_author}</span></h2>
                        <h2 className="md:text-lg lg:text-2xl font-medium mb-3">Category :<span className="text-[#FF9800] font-josefin"> {book.book_category}</span></h2>
                        <h2 className="md:text-lg lg:text-2xl font-medium mb-3">Quantity :<span className="text-[#FF9800] font-josefin"> {book.book_quantity}</span></h2>
                        <hr className="border-dashed mb-5 mt-5" />
                        <h2 className="md:text-lg lg:text-2xl font-medium">Description : <br /><span className="text-sm md:text-lg">{book.book_short_description}</span></h2>
                        <hr className="border-dashed mb-5 mt-5" />
                        <h2 className="md:text-lg lg:text-2xl font-medium">Book Content : <br /><span className="text-sm md:text-lg">{book.book_content}</span></h2>
                        <Link onClick={() => document.getElementById('my_modal_4').showModal()} className="btn mt-5 bg-[#404142] border-2 border-[#d1c2b2] text-[#d1c2b2] hover:rounded-full hover:bg-transparent hover:text-[#404142] hover:border-[#404142]" disabled={book.book_quantity == 0 || alreadyBorrowed}>Borrow It</Link>
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <form onSubmit={handleBorrowBook} method="dialog" className="card-body p-0 w-full grid grid-cols-1">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text md:text-lg font-bold">User Email :</span>
                                        </label>
                                        <input name="user_email" value={user?.email} type="text" placeholder="User Email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text md:text-lg font-bold">User Name :</span>
                                        </label>
                                        <input name="user_name" value={user?.displayName} type="text" placeholder="User Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text md:text-lg font-bold">Borrowed Date :</span>
                                        </label>
                                        <input name="borrow_date" type="date" value={borrowDate} ref={inputRef} placeholder="Borrowed Date" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text md:text-lg font-bold">Return Date :</span>
                                        </label>
                                        <input name="return_date" type="date" placeholder="Return Date" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn bg-[#ea9b25] text-white font-medium hover:bg-base-100 hover:border-2 hover:border-[#ea9b25] hover:text-[#FF9800]">Borrow Now</button>
                                    </div>
                                </form>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;