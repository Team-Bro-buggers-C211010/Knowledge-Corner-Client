import { Link } from "react-router-dom";
import kids from "../../../src/images/kids.jpg";
import comics from "../../../src/images/Comics.jpg";
import entertainment from "../../../src/images/Entertainment.jpg";
import horror from "../../../src/images/Horror.jpg";
import computer from "../../../src/images/computer.jpg";
import sci from "../../../src/images/sci-fic.png";
import social from "../../../src/images/social.jpg";
import Marquee from "react-fast-marquee";

const Category = () => {
    return (
        <div className="mt-9 md:mt-14 container mx-auto">
            <h1 className="text-2xl md:text-4xl text-[#ff9900] font-bold text-center">Our Category</h1>
            <p className="text-center text-base-content md:text-lg mt-3">Discover Diverse Book Categories</p>
            <hr className="mt-5 border-2 border-dashed mb-5" />
            <div className="gap-5">
                <Marquee pauseOnHover={true} speed={70}>
                    <div className="ml-5 card card-compact rounded-none w-80 md:w-96 bg-[#d1bf9c] shadow-xl shadow-orange-400">
                        <figure className="w-full h-64 md:h-80"><img className="h-full w-full object-fill object-center" src={kids} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="font-bold md:text-2xl text-[#404142] text-center">Kids</h2>
                            <Link className="btn bg-[#404142] border-2 border-[#d1c2b2] text-[#d1c2b2] hover:rounded-full hover:bg-transparent hover:text-[#404142] hover:border-[#404142]">Explore more</Link>
                        </div>
                    </div>
                    <div className="ml-5 card card-compact rounded-none w-80 md:w-96 bg-[#d1bf9c] shadow-xl shadow-orange-400">
                        <figure className="w-full h-64 md:h-80"><img className="h-full w-full object-fill object-center" src={comics} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="font-bold md:text-2xl text-[#404142] text-center">Comics</h2>
                            <Link className="btn bg-[#404142] border-2 border-[#d1c2b2] text-[#d1c2b2] hover:rounded-full hover:bg-transparent hover:text-[#404142] hover:border-[#404142]">Explore more</Link>
                        </div>
                    </div>
                    <div className="ml-5 card card-compact rounded-none w-80 md:w-96 bg-[#d1bf9c] shadow-xl shadow-orange-400">
                        <figure className="w-full h-64 md:h-80"><img className="h-full w-full object-fill object-center" src={entertainment} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="font-bold md:text-2xl text-[#404142] text-center">Entertainment</h2>
                            <Link className="btn bg-[#404142] border-2 border-[#d1c2b2] text-[#d1c2b2] hover:rounded-full hover:bg-transparent hover:text-[#404142] hover:border-[#404142]">Explore more</Link>
                        </div>
                    </div>
                    <div className="ml-5 card card-compact rounded-none w-80 md:w-96 bg-[#d1bf9c] shadow-xl shadow-orange-400">
                        <figure className="w-full h-64 md:h-80"><img className="h-full w-full object-fill object-center" src={horror} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="font-bold md:text-2xl text-[#404142] text-center">Horror</h2>
                            <Link className="btn bg-[#404142] border-2 border-[#d1c2b2] text-[#d1c2b2] hover:rounded-full hover:bg-transparent hover:text-[#404142] hover:border-[#404142]">Explore more</Link>
                        </div>
                    </div>
                    <div className="ml-5 card card-compact rounded-none w-80 md:w-96 bg-[#d1bf9c] shadow-xl shadow-orange-400">
                        <figure className="w-full h-64 md:h-80"><img className="h-full w-full object-fill object-center" src={computer} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="font-bold md:text-2xl text-[#404142] text-center">Computer & Tech</h2>
                            <Link className="btn bg-[#404142] border-2 border-[#d1c2b2] text-[#d1c2b2] hover:rounded-full hover:bg-transparent hover:text-[#404142] hover:border-[#404142]">Explore more</Link>
                        </div>
                    </div>
                    <div className="ml-5 card card-compact rounded-none w-80 md:w-96 bg-[#d1bf9c] shadow-xl shadow-orange-400">
                        <figure className="w-full h-64 md:h-80"><img className="h-full w-full object-fill object-center" src={sci} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="font-bold md:text-2xl text-[#404142] text-center">Sci-Fi & Fantasy</h2>
                            <Link className="btn bg-[#404142] border-2 border-[#d1c2b2] text-[#d1c2b2] hover:rounded-full hover:bg-transparent hover:text-[#404142] hover:border-[#404142]">Explore more</Link>
                        </div>
                    </div>
                    <div className="ml-5 card card-compact rounded-none w-80 md:w-96 bg-[#d1bf9c] shadow-lg shadow-orange-300">
                        <figure className="w-full h-64 md:h-80"><img className="h-full w-full object-fill object-center" src={social} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="font-bold md:text-2xl text-[#404142] text-center">Social Science</h2>
                            <Link className="btn bg-[#404142] border-2 border-[#d1c2b2] text-[#d1c2b2] hover:rounded-full hover:bg-transparent hover:text-[#404142] hover:border-[#404142]">Explore more</Link>
                        </div>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Category;