import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Banner from "../Banner/Banner";
import LatestLostFoundItems from "../LatestLostFoundItems/LatestLostFoundItems";
import MarqueLostFound from "../MarqueLostFound/MarqueLostFound";

const Home = () => {
    return (
        <div>
        
            <div>
            <Helmet>
                <title>Home | Lost & Found</title>
            </Helmet>

                <Banner></Banner>
                <About></About>
                <LatestLostFoundItems></LatestLostFoundItems>
                <MarqueLostFound></MarqueLostFound>
            </div>
        </div>
    );
};

export default Home;