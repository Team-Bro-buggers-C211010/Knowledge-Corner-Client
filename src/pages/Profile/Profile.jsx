import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [books, setBooks] = useState([]);
    const [countFine, setCountFine] = useState(0);
    const [currentUser, setCurrentUser] = useState([]);
    const axiosSecure = useAxiosSecure();
    const newDate = new Date();
    const currentDate = newDate.toISOString().split('T')[0];
    useEffect(() => {
        axiosSecure.get(`/users?email=${user?.email}`)
            .then(res => setCurrentUser(res.data[0]))
    }, [user.email, axiosSecure])

    useEffect(() => {
        axiosSecure.get(`/borrowed-books?user_email=${user?.email}`)
            .then(res => {
                setBooks(res.data);
            })
    }, [axiosSecure, user?.email])

    const dueBooks = books.filter(book => currentDate > book.return_date);

    useEffect(() => {
        const calculateTotalFine = () => {
            let fine = 0;
            dueBooks.forEach(book => {
                const returnDate = new Date(book.return_date);
                const currentDateObj = new Date(currentDate);
                const diffTime = currentDateObj - returnDate;
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                if (diffDays > 0) {
                    fine += diffDays * 10;
                }
            });
            setCountFine(fine);
        };
        calculateTotalFine();
    }, [dueBooks, currentDate]);

    console.log(currentDate, dueBooks, countFine);

    return (
        <div className="min-h-[calc(100vh-412px)] mt-10 mb-10">
            <div className="relative mockup-window md:w-4/5 border bg-[#d1bf9c] border-[#404142] container mx-auto">
                <h1 className="absolute top-3 md:top-2 left-20 text-xl md:text-3xl font-bold">Profile</h1>
                <div className="p-4 bg-[#6c6052] text-white">
                    <div className="flex flex-col lg:flex-row gap-5">
                        <div className="flex justify-center lg:justify-start items-center">
                            <div className="w-56 h-56 rounded-tr-3xl rounded-bl-3xl shadow-lg shadow-orange-300"><img className="w-full h-full rounded-tr-3xl rounded-bl-3xl object-cover object-center" src="https://i.ibb.co/7JVMFwy/Jhankar-Mahbub.png" alt="" /></div>
                        </div>
                        <div className="w-full">
                            <div className="flex flex-col items-center justify-center lg:justify-start">
                                <h1 className="text-base md:text-xl lg:text-2xl font-semibold text-[#ea9b25]">{user.displayName}</h1>
                                <h1 className="text-base md:text-xl lg:text-2xl font-semibold">ID: {currentUser.id}</h1>
                            </div>
                            <hr className="my-5" />
                            <div className="flex flex-col lg:flex-row justify-between">
                                <h1 className="text-base md:text-xl lg:text-2xl font-semibold text-[#e9cca9]">Role: <span className="text-[#ea9b25]">{currentUser.role}</span></h1>
                                <h1 className="text-base md:text-xl lg:text-2xl font-semibold text-[#e9cca9]">Email: <span className="text-[#ea9b25]">{user.email}</span></h1>
                            </div>
                            <hr className="my-5" />
                            <div className="flex flex-col lg:flex-row gap-5">
                                <div className="bg-[#d1bf9c] border-4 border-[#b6a18a] text-black px-3 py-5 md:text-xl lg:text-2xl font-semibold">Borrowing Books: <span className="text-amber-600 font-bold">{books.length}</span></div>
                                <div className="bg-[#d1bf9c] border-4 border-[#b6a18a] text-black px-3 py-5 md:text-xl lg:text-2xl font-semibold">Total Fines: <span className="text-amber-600 font-bold">{countFine} tk</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <h1 className="mb-2 md:text-xl lg:text-2xl font-bold text-[#e9cca9]">List of Overdue Books:</h1>
                        <p className="mb-5 md:text-lg text-[#ea9b25]">Every extra day is count as 10tk fine</p>
                        <div className="overflow-x-auto px-2 md:px-0">
                            <table className="table border-2 border-[#404142]">
                                {/* head */}
                                <thead>
                                    <tr className="bg-[#d1bf9c] md:text-lg text-[#404142] border-b-2 border-[#404142]">
                                        <th></th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Overdue</th>
                                        <th>Fine</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* rows */}
                                    {
                                        dueBooks.map((book, idx) => <tr key={book._id} className="text-[4#04142] border-b-2 border-[#404142] md:text-base bg-[#c6bbb0] font-semibold md:font-bold hover:bg-[#404142] hover:text-[#FF9800]">
                                            <th>{idx + 1}</th>
                                            <td><img className="h-20 w-full object-cover object-center" src={book.book_photo} alt="Watchmen" /></td>
                                            <td>{book.book_name}</td>
                                            <td>{book.book_category}</td>
                                            <td>{book.return_date}</td>
                                            <td>YES</td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;