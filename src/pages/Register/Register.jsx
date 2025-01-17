import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { AuthContext } from "../../provider/AuthProvider";
import signUp from "../../assets/image/singup.jpg";



const Register = () => {
    const {signin} = useContext(AuthContext);
    const [showPwd, setShowPwd] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [succMsg, setSuccMsg] = useState('');
    const navigate = useNavigate();

    const eyeHandler =()=>{
        setShowPwd(!showPwd);
    }
    const formSubmitHandle = event =>{
        event.preventDefault();
        setErrMsg("");
        setSuccMsg("");
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const photoUrl = event.target.photourl.value;
        const user = {name,email,password,photoUrl};

        if(!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)){
            setErrMsg("Password must be 6 and minimum One Uppercase and One Lowercase");
            return;
        }

        signin(email, password)
        .then(result =>{
            result.user.photoURL=photoUrl;

            updateProfile(auth.currentUser,{
                displayName: name, photoURL: photoUrl
            })
            .then((data)=>{
                console.log(data)
            })
            .catch(err=>{
                console.error(err);
            })
            fetch(`${import.meta.env.VITE_API}/user`,{
                method: "POST",
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    navigate("/");
                }
            })
            setSuccMsg("Account Created Successfully!");
            toast("Account Created Successfully!");
        })
        .catch(err =>{
            setErrMsg(err.message);
            toast(err.message);
        })
    }

    return (
        <div>
            <Helmet>
                <title>Sign Up - Seven Star</title>
            </Helmet>
            <div className="flex items-center justify-center lg:w-1/2 md:w-4/5 w-full mx-auto p-2">
                <div className="bg-white shadow-sm rounded-md p-4 w-full mx-auto">
                    <h2 className="font-bold text-xl text-center">Sign Up</h2>
                    <img src={signUp} className="rounded mt-4" />
                    <form onSubmit={formSubmitHandle} className="flex gap-5 flex-col pt-10">
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
                            <input name="name" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="text" placeholder="Your Name" required/>
                            <input name="email" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="email" placeholder="Your Email" required/>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
                        <input name="photourl" className="border rounded-sm p-2 lg:w-1/2 w-full mx-auto" type="text" placeholder="Your photoURL" required/>
                            <div className="relative flex flex-col lg:w-1/2 w-full mx-auto">
                                <input name="password" className="border rounded-sm p-2" type={showPwd ? "text" : "password"} placeholder="Your Password" required/>
                                <span onClick={eyeHandler} className="absolute right-2 top-3 cursor-pointer">
                                    {showPwd ? <FaRegEyeSlash /> : <FaRegEye />}
                                </span>
                            </div>
                        </div>
                        <div className="flex lg:flex-row flex-col lg:items-center justify-between gap-5">
                            <div className="lg:w-1/2 w-full">
                                <input name="submit" className="border bg-yellow-500 text-black p-2 cursor-pointer rounded-md" type="submit" value="Register"/>
                            </div>
                            <div className="lg:w-1/2 w-full">
                                <p>Already have an account <Link className="text-red-500" to="/login">Log In</Link></p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            {errMsg && <p>{errMsg}</p>}
                            {succMsg && <p>{succMsg}</p>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;