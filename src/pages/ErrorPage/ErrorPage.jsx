import { NavLink } from "react-router-dom"

const ErrorPage = () => {
    return (
        <div className="bg-[#13131308] min-h-screen  w-full flex flex-col gap-y-3 justify-center items-center p-6">
            <div className="bg-green-950 p-8 flex flex-col justify-center items-center rounded-2xl ">
                <h1 className="bg-green-950 mb-4 text-gray-500 fontPlayfairDisplay font-extrabold text-9xl">4<span className="text-orange-400">0</span>4</h1>
                <p className="text-base md:text-2xl fontWorkSans text-red-300">The page you want,</p>
                <p className="text-base md:text-2xl fontWorkSans text-red-300">Our <span className="text-red-500 text-xl">Habluu</span> Developer still trying to fixed it up.</p>
            </div>
            <NavLink to="/" className="btn bg-transparent border border-[#ff9900] hover:bg-[#ff9900] text-[#ff9900] hover:text-white">
                Go back to School Again
            </NavLink>
        </div>
    )
}

export default ErrorPage;
