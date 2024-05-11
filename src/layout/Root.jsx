import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "../pages/NavBar/NavBar";
import Footer from "../pages/Footer/Footer";


const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;