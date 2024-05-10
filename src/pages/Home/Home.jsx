import { Helmet } from "react-helmet";
import LoactionMap from "../LoactionMap/LoactionMap";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Seven Star</title>
            </Helmet>
            this is home page
            <LoactionMap></LoactionMap>
        </div>
    );
};

export default Home;