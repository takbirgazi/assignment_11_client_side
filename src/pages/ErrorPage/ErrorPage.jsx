import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import fourOfour from "../../assets/image/404.png";


const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Helmet>
                <title>Error - Seven Star</title>
            </Helmet>
           <div className=" flex flex-col items-center justify-center gap-5 m-5">
            {/* <h1 className="font-bold text-4xl">404 | Page Not Found</h1> */}
            <img className="border rounded-xl" src={fourOfour} alt="404" />
            <Link to="/" className="px-2 py-1 rounded-lg border">Back to Home</Link>
           </div> 
        </div>
    );
};

export default ErrorPage;