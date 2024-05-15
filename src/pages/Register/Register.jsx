import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import useAxiosSecure from './../../hooks/useAxiosSecure';
const Register = () => {
    const location = useLocation();
    const { setUser, setLoading } = useContext(AuthContext);
    const { createUser } = useContext(AuthContext);
    const naviGate = useNavigate();
    const [eyeCheck, setEyeCheck] = useState(false);
    const [role, setRole] = useState("User");
    const adminCode = import.meta.env.VITE_ADMIN_CODE;
    const handleRole = (e) => {
        if (e.target.value === "User") {
            setRole("User");
        }
        else {
            setRole("Librarian");
        }
    }

    const axiosSecure = useAxiosSecure();
    const handleRegister = (e) => {
        e.preventDefault();
        const id = e.target.id.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (role === "Librarian" && e.target.verification?.value !== adminCode) {
            alert("Verification code is incorrect");
            return;
        }
        const user = { id, name, photo, email, role };
        if (password.length < 6) {
            toast.error("Password should be at least 6 characters");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error("Password should have one uppercase character");
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error("Password should have at least one lowercase character.");
            return;
        }
        createUser(email, password)
            .then(res => {
                axiosSecure.post(`/users`, user)
                    .then(res => {
                    })
                updateProfile(res.user, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(
                        () => { setUser({ ...res.user, displayName: name, photoURL: photo }); }
                    )
                e.target.reset();
                setLoading(true);

                naviGate(location?.state ? location.state : "/");
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User register successfully !!!",
                    showConfirmButton: false,
                    timer: 2000
                });
            })
            .catch(err => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Invalid information or user already created !!!",
                    showConfirmButton: false,
                    timer: 2000
                });
            })
    }
    return (
        <div className="register hero min-h-screen p-2 md:p-4">
            <div className="hero-content p-0 flex-col">
                <div className="card shrink-0 w-full text-center max-w-lg shadow-2xl bg-base-100">
                    <h1 className="text-xl md:text-3xl pt-5 mb-3 font-bold text-[#FF9800]">Register {role === "User" ? "as a user" : "as a librarian"} !</h1>
                    <p className="px-2 md:px-4 text-sm md:text-base font-medium text-base-content font-montserrat">Join Knowledge-Corner for a world of books spanning various genres. Start reading today!</p>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label md:text-lg font-semibold">
                                <span className="label-text text-sm md:text-base">Role</span>
                            </label>
                            <select className="select select-bordered text-base-content" onChange={handleRole}>
                                <option value="User text-xs md:text-base">User</option>
                                <option value="Librarian text-xs md:text-base">Librarian</option>
                            </select>
                        </div>
                        {
                            role === "Librarian" &&
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-sm md:text-base">Verify you</span>
                                </label>
                                <input name="verification" type="text" placeholder="Enter the code given by Admin" className="text-xs md:text-base input input-bordered" required />
                            </div>
                        }
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-sm md:text-base">{
                                    role === "Librarian" ? "Librarian Id" : "User Id"
                                }</span>
                            </label>
                            <input type="text" name="id" placeholder={role === "Librarian" ? "Ex- L241105" : "Ex- U241105"} className="input input-bordered text-xs md:text-base" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-sm md:text-base">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered text-xs md:text-base" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-sm md:text-base">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered text-xs md:text-base" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-sm md:text-base">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered text-xs md:text-base" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-sm md:text-base">Password</span>
                            </label>
                            <input name="password" type={eyeCheck ? "text" : "password"} placeholder="Password" className="input input-bordered text-xs md:text-base" required />
                            <Link className="absolute right-14 bottom-[159px]  md:bottom-[166px] text-base-content" onClick={() => setEyeCheck(!eyeCheck)}>{eyeCheck ? <LuEyeOff className="w-5 h-5" /> : <LuEye className="w-5 h-5" />}</Link>
                            <p className="mt-4 text-xs md:text-base text-base-content">Already registerd ? <Link className="text-[#FF9800] font-medium hover:font-bold" to="/login">Login Now</Link></p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#ea9b25] text-white hover:bg-white hover:border-2 hover:border-[#ea9b25] hover:text-[#FF9800] text-xs md:text-base">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;