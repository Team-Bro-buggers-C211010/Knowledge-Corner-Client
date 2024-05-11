import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [role, setRole] = useState("User");
    const handleRole = (e) => {
        console.log(e.target.value);
        if (e.target.value === "User") {
            setRole("User");
        }
        else {
            setRole("Librarian");
        }
    }
    return (
        <div className="register hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="card shrink-0 w-full text-center max-w-lg shadow-2xl bg-base-100">
                    <h1 className="text-3xl pt-5 mb-3 font-bold text-[#FF9800]">Register {role === "User" ? "as a user" : "as a librarian"} !</h1>
                    <p className="px-2 md:px-4 text-sm md:text-base font-medium">Join Knowledge-Corner for a world of books spanning various genres. Start reading today!</p>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Role</span>
                            </label>
                            <select className="select select-bordered" onChange={handleRole}>
                                <option value="User">User</option>
                                <option value="Librarian">Librarian</option>
                            </select>
                        </div>
                        {
                            role === "Librarian" &&
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Verify you</span>
                                </label>
                                <input type="text" placeholder="Enter the code given by Admin" className="input input-bordered" required />
                            </div>
                        }
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">{
                                    role === "Librarian" ? "Librarian Id" : "User Id"
                                }</span>
                            </label>
                            <input type="text" placeholder={role === "Librarian" ? "Ex- L241105" : "Ex- U241105"} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered" required />
                            <p className="mt-4">Already registerd ? <Link className="text-[#FF9800] font-medium hover:font-bold" to="/login">Login</Link></p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#ea9b25] text-white hover:bg-white hover:border-2 hover:border-[#ea9b25] hover:text-[#FF9800]">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;