import Banner from '../../components/Banner/Banner';
import Trending from './Trending';
import Category from './Category';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Trending></Trending>
            <Category></Category>
        </div>
    );
};

export default Home;