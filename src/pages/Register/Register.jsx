// import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// const [showPwd, setShowPwd] = useState(false);
// const [errMsg, setErrMsg] = useState('');
// const [succMsg, setsuccMsg] = useState('');
// const navigate = useNavigate();



const Register = () => {
    return (
        <div>
            <Helmet>
                <title>Sign Up - Seven Star</title>
            </Helmet>
            <div className="flex items-center justify-center lg:w-1/2 md:w-4/5 w-full mx-auto p-2">
                <div className="bg-white shadow-sm rounded-md p-4 w-full mx-auto">
                    <h2 className="font-bold text-xl text-center">Sign Up</h2>
                    <form className="flex gap-5 flex-col pt-10">
                        <div className="flex items-center justify-center">
                            <input name="name" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="text" placeholder="Your Name" required/>
                        </div>
                        <div className="flex items-center justify-center">
                            <input name="email" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="email" placeholder="Your Email" required/>
                        </div>
                        <div className="flex items-center justify-center">
                            <input name="photourl" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="text" placeholder="Your photoURL" required/>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="relative flex flex-col lg:w-1/2 w-full mx-auto">
                                <input name="password" className="border rounded-sm p-2" type="password" placeholder="Your Password" required/>
                                <span className="absolute right-2 top-3 cursor-pointer">
                                    {/* {showPwd ? <>Hide</> : <>Show</>} */}
                                    show
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <input name="submit" className="border bg-blue-500 text-white rounded-sm p-2 lg:w-1/2 w-full mx-auto cursor-pointer" type="submit" value="Register"/>
                        </div>
                        <div className="flex items-center justify-center">
                            
                        </div>

                        <div className="flex items-center justify-center">
                        <p>I have an account <Link className="text-red-500" to="/login">Log In</Link></p>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;