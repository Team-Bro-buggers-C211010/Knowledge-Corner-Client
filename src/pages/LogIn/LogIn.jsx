import { useState } from "react";
import { Link } from "react-router-dom";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";

const LogIn = () => {
    const [eyeCheck, setEyeCheck] = useState(false);
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
        <div>
            <div className="register hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="card shrink-0 w-full text-center max-w-lg shadow-2xl bg-base-100">
                        <h1 className="text-3xl pt-5 mb-3 font-bold text-[#FF9800]">Login {role === "User" ? "as a user" : "as a librarian"} !</h1>
                        <p className="px-2 md:px-4 text-sm md:text-base font-medium">Welcome back! Log in to access our school library extensive collection of books. Dive into knowledge with just a click!</p>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Role</span>
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
                                        <span className="label-text font-semibold">Verify you</span>
                                    </label>
                                    <input type="text" placeholder="Enter the code given by Admin" className="input input-bordered" required />
                                </div>
                            }
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type={eyeCheck ? "text" : "password"} name="password" placeholder="Password" className="input input-bordered" required />
                                <Link className={`absolute right-14 ${role === "Librarian" ? "bottom-[190px]  md:bottom-[166px]": "bottom-[297px]  md:bottom-[275px]"} text-base-content`} onClick={() => setEyeCheck(!eyeCheck)}>{eyeCheck ? <LuEyeOff className="w-5 h-5" /> : <LuEye className="w-5 h-5" />}</Link>
                                <p className="mt-4">Get your library access ! <Link className="text-[#FF9800] font-medium hover:font-bold" to="/register">Register Now</Link></p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#ea9b25] text-white hover:bg-white hover:border-2 hover:border-[#ea9b25] hover:text-[#FF9800]">Login</button>
                            </div>
                            {
                                role === "User" && <>
                                    <div className="divider mb-0">OR</div>
                                    <div className="form-control mt-3">
                                        <button className="btn bg-[#ea9b25] text-white hover:bg-white hover:border-2 hover:border-[#ea9b25] hover:text-[#FF9800]"><FcGoogle className="h-7 w-7" />Login With Google</button>
                                    </div>
                                </>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;