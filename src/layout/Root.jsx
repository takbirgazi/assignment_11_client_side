import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";


const Root = () => {
    return (
        <div>
            
            <div>
                <Outlet></Outlet>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Root;