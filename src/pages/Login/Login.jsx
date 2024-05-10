import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { AuthContext } from "../../provider/AuthProvider";


const Login = () => {
    const [showPwd, setShowPwd] = useState(false);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    const eyeHandler =()=>{
        setShowPwd(!showPwd);
    }

    const signInWithGoogleHandler =()=>{
        signInWithPopup(auth,googleProvider)
        .then(()=>{
            toast("Log In Successfully!");
        })
        .catch(err=>{
            console.error(err.message);
            toast(err.message);
        })
    }
    const signInWithGitHubHandler = ()=>{
        signInWithPopup(auth,gitHubProvider)
        .then(()=>{
            toast("Log In Successfully!");
        })
        .catch(err=>{
            console.error(err.message);
            toast(err.message);
        })
    }
    const logInWithEmPwd = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const pwd = event.target.password.value;
        login(email,pwd)
        .then(()=>{
            navigate('/');
        })
        .catch(err=>{
            toast(err.message);
        })   
    }
    
    return (
        <div>
            <Helmet>
                <title>Log In - Seven Star</title>
            </Helmet>
            <div className="flex items-center justify-center lg:w-1/2 md:w-4/5 w-full mx-auto p-2">
                <div className="bg-white shadow-sm rounded-md p-4 w-full mx-auto">
                    <h2 className="font-bold text-xl text-center">Log In</h2>
                    <form onSubmit={logInWithEmPwd} className="flex gap-5 flex-col pt-10">
                        <div className="flex items-center justify-center">
                            <input name="email" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="email" placeholder="Write Your Email"/>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="relative flex flex-col lg:w-1/2 w-full mx-auto">
                                <input name="password" className="border rounded-sm p-2" type={showPwd ? "text" : "password"}placeholder="Your Password" required/>
                                <span onClick={eyeHandler} className="absolute right-2 top-3 cursor-pointer">
                                    {showPwd ? <FaRegEyeSlash /> : <FaRegEye />}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <input className="border bg-blue-500 text-white rounded-sm p-2 lg:w-1/2 w-full mx-auto cursor-pointer" type="submit" value="Log In"/>
                        </div>

                        <div className="flex items-center justify-center">
                        <p>If you want to create an account <Link className="text-red-500" to="/register">Register</Link></p>
                        </div>
                        <div className="divider divider-info">OR</div>
                    </form>
                    <div className="flex gap-5 flex-col pb-10 items-center">
                        <button onClick={signInWithGoogleHandler} className="border bg-blue-800 text-white rounded-sm p-2 lg:w-1/2 w-full mx-auto text-center">Log In With Google</button>
                        <button onClick={signInWithGitHubHandler} className="border bg-blue-800 text-white rounded-sm p-2 lg:w-1/2 w-full mx-auto text-center">Log In With GitHub</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;