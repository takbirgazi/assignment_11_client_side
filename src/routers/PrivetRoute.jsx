// import Lottie from "lottie-react";
// import loder from '../../public/loader.json';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'; 

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
    return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-20 h-20">
                    {/* <Lottie animationData={loder} loop={true} /> */}
                    Loading...
                </div>
            </div>
        );
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login' replace></Navigate>
};

export default PrivetRoute;

PrivetRoute.propTypes = {
    children: PropTypes.node,
}