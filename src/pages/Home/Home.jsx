import Banner from '../../components/Banner/Banner';
import Trending from './Trending';
import Category from './Category';
import UpcomingCollections from './UpcomingCollections';
import AboutUs from './AboutUs';
import { Helmet } from 'react-helmet';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>{"Knowledge Corner | Home"}</title>
            </Helmet>
            <Banner></Banner>
            <Trending></Trending>
            <Category></Category>
            <UpcomingCollections></UpcomingCollections>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;