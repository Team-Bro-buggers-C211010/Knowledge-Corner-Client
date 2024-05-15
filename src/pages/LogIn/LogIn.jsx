import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const LogIn = () => {
    const [eyeCheck, setEyeCheck] = useState(false);
    const [role, setRole] = useState("User");
    const handleRole = (e) => {
        if (e.target.value === "User") {
            setRole("User");
        }
        else {
            setRole("Librarian");
        }
    }
    const naviGate = useNavigate();
    const location = useLocation();
    const { signInUser, signInWithGoogle, setLoading } = useContext(AuthContext);
    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (role === "Librarian" && e.target.verification.value !== import.meta.env.VITE_ADMIN_CODE) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Your verification as Librarian is failed !!!",
            });
            return;
        }
        if (password.length < 6) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password should be at least 6 characters!",
            });
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password should have one uppercase character!",
            });
            return;
        }
        else if (!/[a-z]/.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password should have at least one lowercase character!",
            });
            return;
        }
        signInUser(email, password)
            .then(res => {
                e.target.reset();
                setLoading(false);
                naviGate(location?.state ? location.state : "/");
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Log In Successfully !!!",
                    showConfirmButton: false,
                    timer: 2000
                });
            })
            .catch(err => {
                setLoading(false);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Invalid Email or Password !!!",
                });
            })
    }
    const handleGoogleSignIn = (e) => {
        e.preventDefault();
        signInWithGoogle()
            .then(res => {
                naviGate(location?.state ? location.state : "/");
                setLoading(false);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Log In Successfully !!!",
                    showConfirmButton: false,
                    timer: 2000
                });
            })
            .catch(err => {
                setLoading(false);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: err.message,
                    showConfirmButton: false,
                    timer: 2000
                });
            })
    }
    return (
        <div>
            <div className="register hero min-h-screen p-2 md:p-4">
                <div className="hero-content p-0 flex-col">
                    <div className="card shrink-0 w-full text-center max-w-lg shadow-2xl bg-base-100">
                        <h1 className="text-xl md:text-3xl pt-5 mb-3 font-bold text-[#FF9800]">Login {role === "User" ? "as a user" : "as a librarian"} !</h1>
                        <p className="px-2 md:px-4 text-sm md:text-base text-base-content font-medium font-montserrat">Welcome back! Log in to access our school library extensive collection of books. Dive into knowledge with just a click!</p>
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Role</span>
                                </label>
                                <select className="select select-bordered text-sm md:text-base text-base-content" onChange={handleRole}>
                                    <option className="text-xs md:text-base" value="User">User</option>
                                    <option className="text-xs md:text-base" value="Librarian">Librarian</option>
                                </select>
                            </div>
                            {
                                role === "Librarian" &&
                                <div className="form-control text-sm md:text-base">
                                    <label className="label">
                                        <span className="label-text font-semibold text-sm md:text-base">Verify you</span>
                                    </label>
                                    <input name="verification" type="text" placeholder="Enter the code given by Admin" className="input input-bordered text-xs md:text-base" required />
                                </div>
                            }
                            <div className="form-control text-sm md:text-base">
                                <label className="label">
                                    <span className="label-text font-semibold text-sm md:text-base">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="Email" className="input input-bordered text-xs md:text-base" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-sm md:text-base">Password</span>
                                </label>
                                <input name="password" type={eyeCheck ? "text" : "password"} placeholder="Password" className="input input-bordered text-xs md:text-base" required />
                                <Link className={`absolute right-14 ${role === "Librarian" ? "bottom-[140px] md:bottom-[150px]" : "bottom-[250px]  md:bottom-[259px]"} text-base-content`} onClick={() => setEyeCheck(!eyeCheck)}>{eyeCheck ? <LuEyeOff className="w-5 h-5" /> : <LuEye className="w-5 h-5" />}</Link>
                                <p className="mt-4 mb-2 text-xs md:text-base text-base-content">Get your library access ! <Link className="text-[#FF9800] font-medium hover:font-bold" to="/register">Register Now</Link></p>
                            </div>
                            <div className="form-control">
                                <button className="btn bg-[#ea9b25] text-white hover:bg-white hover:border-2 hover:border-[#ea9b25] hover:text-[#FF9800] text-sm md:text-base">Login</button>
                            </div>
                            {
                                role === "User" && <>
                                    <div className="divider mb-3 text-base-content">OR</div>
                                    <div className="form-control">
                                        <button onClick={handleGoogleSignIn} className="btn bg-[#ea9b25] text-white hover:bg-white hover:border-2 hover:border-[#ea9b25] hover:text-[#FF9800] text-xs md:text-base"><FcGoogle className="h-7 w-7" />Login With Google</button>
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