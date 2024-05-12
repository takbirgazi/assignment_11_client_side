import { Helmet } from "react-helmet";
import LoactionMap from "../LoactionMap/LoactionMap";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Seven Star</title>
            </Helmet>
            <Banner></Banner>
            <LoactionMap></LoactionMap>
        </div>
    );
};

export default Home;