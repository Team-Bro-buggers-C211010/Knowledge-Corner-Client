import { useContext } from "react";
import libraryBG from "../../images/libraryBG.jpg";
import { AuthContext } from "../../Providers/AuthProvider";
const AddBooks = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="register min-h-screen flex justify-center items-center">
            <div className="hero min-h-[800px] mt-5 md:mt-20 bg-base-200 container mx-auto bg-cover bg-no-repeat bg-center rounded-xl md:rounded-3xl" style={{ backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.6) 45%, rgba(0, 0, 0, 0.2) 100%), url(${libraryBG})` }}>
                <div className="w-full py-5 md:py-20 px-2 md:px-0">
                    <div className="card shrink-0 md:w-3/4 shadow-2xl backdrop-blur-sm bg-base-100/50 container mx-auto">
                        <div className="mt-10 bg-base-100/50 border-2 border-base-content px-2 py-2 flex justify-center items-center mx-auto rounded-full md:w-auto">
                            <h3 className="text-2xl md:text-3xl font-bold text-center">Hey, <span className="text-[#f99500]">{user.displayName}</span>!!!</h3>
                        </div>
                        <form className="card-body w-full grid grid-cols-1 md:grid-cols-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text md:text-lg font-bold">Name :</span>
                                </label>
                                <input name="book-name" type="text" placeholder="Book Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text md:text-lg font-bold">Book Photo :</span>
                                </label>
                                <input name="book-photo" type="text" placeholder="Book Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text md:text-lg font-bold">Author Name :</span>
                                </label>
                                <input name="book-author" type="text" placeholder="Book Author" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text md:text-lg font-bold">Quantity :</span>
                                </label>
                                <input name="book-quantity" type="number" placeholder="Book Quantity" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text md:text-lg font-bold">Category :</span>
                                </label>
                                <select name="book-category" className="select select-bordered w-full">
                                    <option disabled selected>Select from the list!</option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text md:text-lg font-bold">Ratings :</span>
                                </label>
                                <input name="book-rating" type="number" placeholder="Book Rating(1-5)" className="input input-bordered" required />
                            </div>
                            <div className="form-control md:col-span-2">
                                <label className="label">
                                    <span className="label-text md:text-lg font-bold">Short Description :</span>
                                </label>
                                <textarea name="book-short-description" className="textarea textarea-bordered" placeholder="Short Description"></textarea>
                            </div>
                            <div className="form-control md:col-span-2">
                                <label className="label">
                                    <span className="label-text md:text-lg font-bold">Content :</span>
                                </label>
                                <textarea name="book-content" className="textarea textarea-bordered" placeholder="Book Content"></textarea>
                            </div>
                            <div className="form-control mt-6 md:col-span-2">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBooks;