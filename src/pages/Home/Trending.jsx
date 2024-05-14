import trend1 from "../../../src/images/trend1.jpg";
import trend2 from "../../../src/images/trend2.jpg";
const Trending = () => {
    return (
        <div className="mt-9 md:mt-14 container mx-auto">
            <h1 className="text-2xl md:text-4xl text-[#ff9900] font-bold text-center">Currently Trending</h1>
            <p className="text-center text-base-content md:text-lg mt-3">Check out the must-reads that everyone is talking about.</p>
            <hr className="mt-5 border-2 border-dashed mb-5" />
            <div className="card md:card-side md:h-[450px] lg:h-[400px] rounded-none bg-base-100 shadow-xl mb-10">
                <figure className="md:w-1/2"><img className="rounded-none h-full w-full object-cover object-center" src={trend1} alt="Album" /></figure>
                <div className="card-body md:w-1/2">
                    <div className="border-l-4 pl-5 border-[#f3701d]">
                        <h2 className="card-title text-base-content">Library Expands Digital Collection</h2>
                        <h1 className="text-[#f3701d]">More E-books and Audio books Available</h1>
                    </div>
                    <h3 className="pl-5 mt-8 text-base-content">Our library is thrilled to announce the significant expansion of our digital collection, bringing an array of new e-books and audiobooks to our patrons. With this update, accessing your favorite titles and discovering new ones has never been easier. Whether you prefer the convenience of reading on your device or listening to audiobooks on the go, our enhanced digital library offers something for everyone. Explore the latest bestsellers, timeless classics, and an extensive range of genres right from the comfort of your home. Dive into our digital collection today and enjoy an unparalleled reading experience!</h3>
                </div>
            </div>
            <div className="card md:card-side rounded-none md:h-[450px] lg:h-[400px] md:flex-row-reverse bg-base-100 shadow-xl">
                <figure className="md:w-1/2"><img className="rounded-none h-full w-full object-cover object-center" src={trend2} alt="Album" /></figure>
                <div className="card-body md:w-1/2">
                    <div className="border-l-4 pl-5 border-[#f3701d]">
                        <h2 className="card-title text-base-content">New Reading Spaces Open</h2>
                        <h1 className="text-[#f3701d]">Modern and Cozy Areas for All</h1>
                    </div>
                    <h3 className="pl-5 mt-8 text-base-content">We are excited to unveil our newly opened reading spaces, designed to provide a modern, comfortable, and inspiring environment for all our visitors. These areas have been thoughtfully created to cater to diverse needs, whether you are studying for exams, working on a project, or simply relaxing with a good book. Featuring ergonomic seating, ample lighting, and a tranquil atmosphere, our new reading spaces offer the perfect setting for concentration and creativity. Visit our library to experience these inviting and innovative areas that are sure to enhance your reading and working experience.</h3>
                </div>
            </div>
            <hr className="mt-5 border-2 border-dashed mb-5" />
        </div>
    );
};

export default Trending;