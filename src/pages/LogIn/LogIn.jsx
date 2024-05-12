import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

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
    const naviGate = useNavigate();
    const location = useLocation();
    const { signInUser, signInWithGoogle, setLoading } = useContext(AuthContext);
    const handleSignIn = e => {
        e.preventDefault();
        const verification = e.target.verification.value;
        console.log(verification)
        const email = e.target.email.value;
        const password = e.target.password.value;
        if(role === "Librarian" && verification !== import.meta.env.VITE_ADMIN_CODE){
            alert("Your verification as Librarian is failed");
            return;
        }
        if (password.length < 6) {
            toast.error("Password should be at least 6 characters");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error("Password should have one uppercase character");
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error("Password should have at least one lowercase character");
            return;
        }
        signInUser(email, password)
            .then(res => {
                e.target.reset();
                naviGate(location?.state ? location.state : "/");
                let timerInterval;
                Swal.fire({
                    title: "Log In Successfully !!!",
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                        const timer = Swal.getPopup().querySelector("b");
                        timerInterval = setInterval(() => {
                            timer.textContent = `${Swal.getTimerLeft()}`;
                        }, 100);
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    }
                }).then((result) => {
                });
            })
            .catch(err => {
                setLoading(false);
                toast.error("Invalid Email or Password !!!");
            })
    }
    const handleGoogleSignIn = (e) => {
        e.preventDefault();
        signInWithGoogle()
            .then(res => {
                naviGate(location?.state ? location.state : "/");
                let timerInterval;
                Swal.fire({
                    title: "Log In Successfully !!!",
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                        const timer = Swal.getPopup().querySelector("b");
                        timerInterval = setInterval(() => {
                            timer.textContent = `${Swal.getTimerLeft()}`;
                        }, 100);
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    }
                }).then((result) => {
                });
            })
            .catch(err => {
                setLoading(false);
                let timerInterval;
                Swal.fire({
                    title: err.message,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                        const timer = Swal.getPopup().querySelector("b");
                        timerInterval = setInterval(() => {
                            timer.textContent = `${Swal.getTimerLeft()}`;
                        }, 100);
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    }
                }).then((result) => {
                });
            })
    }
    return (
        <div>
            <div className="register hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="card shrink-0 w-full text-center max-w-lg shadow-2xl bg-base-100">
                        <h1 className="text-3xl pt-5 mb-3 font-bold text-[#FF9800]">Login {role === "User" ? "as a user" : "as a librarian"} !</h1>
                        <p className="px-2 md:px-4 text-sm md:text-base font-medium">Welcome back! Log in to access our school library extensive collection of books. Dive into knowledge with just a click!</p>
                        <form onSubmit={handleSignIn} className="card-body">
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
                                    <input name="verification" type="text" placeholder="Enter the code given by Admin" className="input input-bordered" required />
                                </div>
                            }
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input name="password" type={eyeCheck ? "text" : "password"} name="password" placeholder="Password" className="input input-bordered" required />
                                <Link className={`absolute right-14 ${role === "Librarian" ? "bottom-[190px]  md:bottom-[166px]" : "bottom-[297px]  md:bottom-[275px]"} text-base-content`} onClick={() => setEyeCheck(!eyeCheck)}>{eyeCheck ? <LuEyeOff className="w-5 h-5" /> : <LuEye className="w-5 h-5" />}</Link>
                                <p className="mt-4">Get your library access ! <Link className="text-[#FF9800] font-medium hover:font-bold" to="/register">Register Now</Link></p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#ea9b25] text-white hover:bg-white hover:border-2 hover:border-[#ea9b25] hover:text-[#FF9800]">Login</button>
                            </div>
                            {
                                role === "User" && <>
                                    <div className="divider mb-0">OR</div>
                                    <div className="form-control mt-3">
                                        <button onClick={handleGoogleSignIn} className="btn bg-[#ea9b25] text-white hover:bg-white hover:border-2 hover:border-[#ea9b25] hover:text-[#FF9800]"><FcGoogle className="h-7 w-7" />Login With Google</button>
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