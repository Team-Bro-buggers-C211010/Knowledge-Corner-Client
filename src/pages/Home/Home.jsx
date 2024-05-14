import Banner from '../../components/Banner/Banner';
import Trending from './Trending';
import Category from './Category';
import UpcomingCollections from './UpcomingCollections';
import AboutUs from './AboutUs';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Trending></Trending>
            <Category></Category>
            <UpcomingCollections></UpcomingCollections>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;