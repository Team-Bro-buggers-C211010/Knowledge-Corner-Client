import { useRef } from 'react';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../../../src/style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function Banner() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='font-montserrat h-screen md:h-[700px] relative flex justify-center items-center'>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#FF9800',
                    '--swiper-pagination-color': '#FF9800',
                }}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide className="gradient-overlay">
                    <img className='relative' src="https://i.ibb.co/rkzBGfw/slide3.jpg" alt="Slide 1" />
                    <div className='absolute text-start md:w-1/2 lg:w-1/3 z-20'>
                        <h1 className='text-[#FF9800] text-2xl md:text-5xl font-josefin'>The Wonderful World of Reading</h1>
                        <p className='mt-5 text-white text-lg md:text-2xl'>The library is a place for everyone to explore, discover, and engage</p>
                        <Link to="/all-books" className='mt-5 btn text-white bg-[#C6AD8F] rounded-full hover:border hover:border-[#ea9b25] hover:text-[#FF9800] hover:bg-transparent'>Explore Collections</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="gradient-overlay">
                    <img className='relative' src="https://i.ibb.co/TL446kH/slide2.jpg" alt="Slide 2" />
                    <div className='absolute text-start md:w-1/2 lg:w-1/3 z-20'>
                        <h1 className='text-[#FF9800] text-2xl md:text-5xl font-josefin'>Inspire Lifelong Learning</h1>
                        <p className='mt-5 text-white text-lg md:text-2xl'>Cultivate a passion for continuous growth with resources that encourage critical thinking and intellectual curiosity.</p>
                        <Link to="/all-books" className=' mt-5 btn text-white bg-[#C6AD8F] rounded-full hover:border hover:border-[#ea9b25] hover:text-[#FF9800] hover:bg-transparent'>Explore Collections</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="gradient-overlay">
                    <img className='relative' src="https://i.ibb.co/k2BgnnC/slide1.jpg" alt="Slide 3" />
                    <div className='absolute text-start md:w-1/2 lg:w-1/3 z-20'>
                        <h1 className='text-[#FF9800] text-2xl md:text-5xl'>Unleash Your Imagination</h1>
                        <p className='mt-5 text-white text-lg md:text-2xl'>Immerse yourself in imaginative fiction that transports you to fantastical worlds and sparks your creativity.</p>
                        <Link to="/all-books" className=' mt-5 btn text-white bg-[#C6AD8F] rounded-full hover:border hover:border-[#ea9b25] hover:text-[#FF9800] hover:bg-transparent'>Explore Collections</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="gradient-overlay">
                    <img className='relative' src="https://i.ibb.co/9YTMJWB/slide4.jpg" alt="Slide 4" />
                    <div className='absolute text-start md:w-1/2 lg:w-1/3 z-20'>
                        <h1 className='text-[#FF9800] text-2xl md:text-5xl font-josefin'>Unearth Historical Treasures</h1>
                        <p className='mt-5 text-white text-lg md:text-2xl'>Journey through time with captivating accounts of significant events and influential figures that shaped our world.</p>
                        <Link to="/all-books" className=' mt-5 btn text-white bg-[#C6AD8F] rounded-full hover:border hover:border-[#ea9b25] hover:text-[#FF9800] hover:bg-transparent'>Explore Collections</Link>
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
}