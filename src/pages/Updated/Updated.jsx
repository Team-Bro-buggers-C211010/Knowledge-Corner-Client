// import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import updatedBG from "../../images/updatedBG.jpg";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Updated = () => {
    // const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const {bookName} = useParams();
    const [book, setBook] = useState({});
    const axiosSecure = useAxiosSecure();
    useEffect(()=> {
        axiosSecure.get(`/books?book_name=${bookName}`)
            .then(res => {
                setBook(res.data[0]);
            })
    },[bookName, axiosSecure])
    console.log(book)
    const { user } = useContext(AuthContext);
    const handleUpdateBook = (e) => {
        e.preventDefault();
        const form = e.target;
        const book_name = form.book_name.value;
        const book_photo = form.book_photo.value;
        const book_author = form.book_author.value;
        const book_category = form.book_category.value;
        const book_rating = form.book_rating.value;
        if (book_rating > 5 || book_rating == 0) {
            alert("Rating should be between 1 and 5 !!!");
            return;
        }
        const bookDetails = { book_name, book_photo, book_author, book_category, book_rating };
        // console.log(bookDetails);
        axiosSecure.put(`/books`, bookDetails)
            .then(res => {
                console.log(res);
                alert("Book Added successfully !!!");
            })
    }
    return (
        <div className="register min-h-screen flex justify-center items-center">
            <div className="hero min-h-screen bg-fixed bg-base-200 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.2) 100%), url(${updatedBG})` }}>
                <div className="w-full py-5 md:py-20 px-2 md:px-0">
                    <div className="card shrink-0 shadow-2xl backdrop-blur-sm bg-base-100/50 container mx-auto">
                        <div className="mt-10 bg-base-100/50 border-2 border-base-content px-2 py-2 flex justify-center items-center mx-auto rounded-full w-auto">
                            <h3 className="text-2xl md:text-3xl font-bold text-center">Hey, <span className="text-[#f99500]">{user.displayName}</span> !!!</h3>
                        </div>
                        <h1 className="md:text-2xl font-semibold text-center mt-5">Update your current book details :</h1>
                        <form onSubmit={handleUpdateBook} className="card-body w-full grid grid-cols-1 md:grid-cols-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text md:text-lg font-bold">Name :</span>
                                </label>
                                <input name="book_name" type="text" defaultValue={book.book_name} placeholder="Book Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text md:text-lg font-bold">Author Name :</span>
                                </label>
                                <input name="book_author" defaultValue={book.book_author} type="text" placeholder="Book Author" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text md:text-lg font-bold">Category :</span>
                                </label>
                                <select name="book_category" value={book.book_category} onChange={(e) => setBook({ ...book, book_category: e.target.value })} className="select select-bordered w-full">
                                    <option disabled selected>Select from the list!</option>
                                    <option>Comics</option>
                                    <option>Computers & Tech</option>
                                    <option>Entertainment</option>
                                    <option>Horror</option>
                                    <option>Kids</option>
                                    <option>Sci-Fi & Fantasy</option>
                                    <option>Social Science</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text md:text-lg font-bold">Ratings :</span>
                                </label>
                                <input name="book_rating" defaultValue={book.book_rating} type="number" placeholder="Book Rating(1-5)" className="input input-bordered" required />
                            </div>
                            <div className="form-control md:col-span-2">
                                <label className="label">
                                    <span className="label-text md:text-lg font-bold">Book Photo :</span>
                                </label>
                                <input name="book_photo" defaultValue={book.book_photo} type="text" placeholder="Book Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6 md:col-span-2">
                                <button className="btn bg-[#ea9b25] text-white font-medium hover:bg-base-100 hover:border-2 hover:border-[#ea9b25] hover:text-[#FF9800]">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Updated;