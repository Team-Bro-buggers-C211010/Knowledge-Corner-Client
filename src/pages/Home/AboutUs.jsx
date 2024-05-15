const AboutUs = () => {
    return (
        <div className="pb-10 container mx-auto mt-9 md:mt-14">
            <div className="hero h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/dPVvZtb/about.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg backdrop-blur-sm bg-base-100/10 md:p-5">
                        <h1 className="mb-5 text-2xl md:text-4xl font-bold text-[#ff9900]">Knowledge Corner</h1>
                        <p className="mb-5 font-montserrat">Welcome to Knowledge Corner, your gateway to a world of learning and exploration. Dive into a treasure trove of knowledge with our vast collection of books, articles, and resources. Expand your horizons, feed your curiosity, and embark on a journey of discovery with Knowledge Corner.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;