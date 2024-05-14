const UpcomingCollections = () => {
    return (
        <div className="mt-9 md:mt-14 container mx-auto">
            <h1 className="text-2xl md:text-4xl text-[#ff9900] font-bold text-center">Upcoming Collection</h1>
            <p className="text-center text-base-content md:text-lg mt-3">DExciting new books are on the horizon! Check out what is coming soon to our library and be the first to dive into our upcoming collection.</p>
            <hr className="mt-5 border-2 border-dashed mb-5" />
            {
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="card border border-[#13131326] bg-[#d1bf9c] w-full lg:w-96 h-full shadow-xl mx-auto">
                        <figure className="px-6 pt-6">
                            <div className="bg-base-100 w-full  max-h-[230px] rounded-2xl flex justify-center">
                                <img src={"https://i.ibb.co/hsq359T/The-Catcher-in-the-Rye.png"} alt="Shoes" className="rounded-xl w-full md:w-[326px] max-h-[230px] object-contain" />
                            </div>
                        </figure>
                        <div className="p-6">
                            <h1 className="mt-4 mb-4 fontPlayfairDisplay text-lg md:text-2xl font-bold">The Catcher in the rye</h1>
                            <h3 className=" font-medium md:text-lg">By : J.D. Salinger</h3>
                            <hr className="border-dashed mt-5 mb-5" />
                            <div className='flex justify-between text-[#131313CC] font-medium md:text-lg'>
                                <div>Category : Fiction</div>
                            </div>
                        </div>
                    </div>
                    <div className="card border border-[#13131326] w-full lg:w-96 bg-[#d1bf9c] h-full  shadow-xl mx-auto">
                        <figure className="px-6 pt-6">
                            <div className="bg-base-100 w-full  max-h-[230px] rounded-2xl flex justify-center">
                                <img src={"https://i.ibb.co/SmrGYs1/The-Da-Vinci-Code.png"} alt="Shoes" className="rounded-xl w-full md:w-[326px] max-h-[230px] object-contain" />
                            </div>
                        </figure>
                        <div className="p-6">
                            <h1 className="mt-4 mb-4 fontPlayfairDisplay text-lg md:text-2xl font-bold">The Da Vinci Code</h1>
                            <h3 className=" font-medium md:text-lg">By : Dan Brown</h3>
                            <hr className="border-dashed mt-5 mb-5" />
                            <div className='flex justify-between text-[#131313CC] font-medium md:text-lg '>
                                <div>Category : Mystery</div>
                            </div>
                        </div>
                    </div>
                    <div className="card border border-[#13131326] w-full lg:w-96 h-full bg-[#d1bf9c] shadow-xl mx-auto">
                        <figure className="px-6 pt-6">
                            <div className="bg-base-100 w-full  max-h-[230px] rounded-2xl flex justify-center">
                                <img src={"https://i.ibb.co/GdNx02D/The-Great-Gatsby.webp"} alt="Shoes" className="rounded-xl w-full md:w-[326px] max-h-[230px] object-contain" />
                            </div>
                        </figure>
                        <div className="p-6">
                            <h1 className="mt-4 mb-4 fontPlayfairDisplay text-lg md:text-2xl font-bold">The Great Gatsby</h1>
                            <h3 className=" font-medium md:text-lg">By : F. Scott Fitzgerald</h3>
                            <hr className="border-dashed mt-5 mb-5" />
                            <div className='flex justify-between text-[#131313CC] md:text-lg font-medium '>
                                <div>Category : Fiction</div>
                            </div>
                        </div>
                    </div>
                    <div className="card border border-[#13131326] w-full lg:w-96 h-full bg-[#d1bf9c] shadow-xl mx-auto">
                        <figure className="px-6 pt-6">
                            <div className="bg-base-100 w-full  max-h-[230px] rounded-2xl flex justify-center">
                                <img src={"https://i.ibb.co/SXpJwkg/To-Kill-a-Mockingbir.png"} alt="Shoes" className="rounded-xl w-full md:w-[326px] max-h-[230px] object-contain" />
                            </div>
                        </figure>
                        <div className="p-6">
                            <h1 className="mt-4 mb-4 fontPlayfairDisplay text-lg md:text-2xl font-bold">To Kill a Mockingbird</h1>
                            <h3 className=" font-medium md:text-lg">By : Harper Lee</h3>
                            <hr className="border-dashed mt-5 mb-5" />
                            <div className='flex justify-between text-[#131313CC] font-medium md:text-lg'>
                                <div>Category : Story Line</div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default UpcomingCollections;