import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const BorrowedPage = () => {
    const { user } = useContext(AuthContext);
    const [books, setBooks] = useState([]);
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get(`/borrowed-books?user_email=${user?.email}`)
            .then(res => {
                setBooks(res.data);
                console.log(res.data);
            })
    }, [])
    return (
        <div className=" bg-[#30362F] min-h-screen">
            <div className="min-h-screen bg-fixed bg-base-200 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0.2) 100%), url("https://i.ibb.co/wRVvtKh/borrowBG.jpg)` }}>
                <div className="w-full pt-10 min-h-screen backdrop-blur-sm bg-base-100/10">
                    <div className="max-w-lg bg-[#d1bf9c] border-2 border-[#404142] px-2 py-2 flex justify-center items-center mx-auto rounded-full w-auto">
                        <h3 className="text-2xl md:text-4xl font-bold text-center text-[#404142]"><span className="text-[#e08908]">{user.displayName}</span> Borrowed :</h3>
                    </div>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-5 px-2 md:px-0">
                        {
                            books.map(book => <div key={book._id} className="card card-compact w-full shadow-lg shadow-slate-50 bg-[#d1bf9c] rounded-b-none">
                                <div className="card-body text-[#404142]">
                                    <h2 className="card-title md:h-20 justify-center text-lg md:text-xl font-extrabold hover:text-[#e98f09]">{book.book_name}</h2>
                                </div>
                                <figure className="h-72"><img className="h-full w-full object-fill object-center" src={book.book_photo} alt="Shoes" /></figure>
                                <div className="card-body w-full ">
                                    <div className="flex justify-between md:text-xl">
                                        <h1 className="md:text-lg font-bold text-[#404142] hover:text-[#e98f09]">{book.book_category}</h1>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <h1 className="text-[#404142] md:text-lg">Borrow on : <span className="text-[#c97a02] font-semibold">{book.borrow_date}</span></h1>
                                        <h1 className="text-[#404142] md:text-lg">Return Deadline : <span className="text-[#c97a02] font-semibold">{book.return_date}</span></h1>
                                    </div>
                                    <hr className="border-dashed border-[#404142]" />
                                    <div className="flex justify-around">
                                        <Link className="btn bg-[#404142] border-2 border-[#d1c2b2] text-[#d1c2b2] hover:rounded-full hover:bg-transparent hover:text-[#404142] hover:border-[#404142]">Return Now</Link>
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

export default BorrowedPage;