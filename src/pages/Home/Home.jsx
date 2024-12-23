import About from "../About/About";
import Banner from "../Banner/Banner";
import LatestLostFoundItems from "../LatestLostFoundItems/LatestLostFoundItems";
import MarqueLostFound from "../MarqueLostFound/MarqueLostFound";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <LatestLostFoundItems></LatestLostFoundItems>
            <MarqueLostFound></MarqueLostFound>
        </div>
    );
};

export default Home;