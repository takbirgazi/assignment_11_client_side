import { Helmet } from "react-helmet";
import LoactionMap from "../LoactionMap/LoactionMap";
import Banner from "../Banner/Banner";
import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";
import NewsletterSignup from "../NewsletterSignup/NewsletterSignup";
import UserReviews from "../UserReviews/UserReviews";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <Helmet>
                <title>Home - Seven Star</title>
            </Helmet>
            <Banner></Banner>
            {
               user ? '' : <NewsletterSignup></NewsletterSignup>
            }
            <FeaturedRooms></FeaturedRooms>
            <UserReviews></UserReviews>
            <LoactionMap></LoactionMap>
        </div>
    );
};

export default Home;