import Banner from '../../components/Banner/Banner';
import Trending from './Trending';
import Category from './Category';
import UpcomingCollections from './UpcomingCollections';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Trending></Trending>
            <Category></Category>
            <UpcomingCollections></UpcomingCollections>
        </div>
    );
};

export default Home;