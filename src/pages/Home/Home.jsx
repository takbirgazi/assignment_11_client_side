import { Helmet } from "react-helmet";
import LoactionMap from "../LoactionMap/LoactionMap";
import Banner from "../Banner/Banner";
import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Seven Star</title>
            </Helmet>
            <Banner></Banner>
            <FeaturedRooms></FeaturedRooms>
            <LoactionMap></LoactionMap>
        </div>
    );
};

export default Home;