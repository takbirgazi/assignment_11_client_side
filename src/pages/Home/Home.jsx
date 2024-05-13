import { Helmet } from "react-helmet";
import LoactionMap from "../LoactionMap/LoactionMap";
import Banner from "../Banner/Banner";
import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";
import NewsletterSignup from "../NewsletterSignup/NewsletterSignup";
import UserReviews from "../UserReviews/UserReviews";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Seven Star</title>
            </Helmet>
            <Banner></Banner>
            <NewsletterSignup></NewsletterSignup>
            <FeaturedRooms></FeaturedRooms>
            <UserReviews></UserReviews>
            <LoactionMap></LoactionMap>
        </div>
    );
};

export default Home;