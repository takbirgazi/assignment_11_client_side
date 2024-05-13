import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const NewsletterSignup = () => {
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
        console.log(user)

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
        <div className="w-11/12 mx-auto">
            <div className="my-5">
                <h2 className="font-bold text-2xl text-center">Newsletter</h2>
            </div>
            <div className="bg-[#f3f1c6] py-10 md:py-40 rounded-md flex items-center justify-center my-5 w-11/12 mx-auto min-h-full">
                <div className="flex flex-col gap-5 md:gap-10">
                    <div className="flex flex-col gap-5">
                        <h2 className="md:text-4xl text-xl font-bold text-center">Explore Our Best Service</h2>
                        <p className="text-center">Join first to get the best service</p>
                    </div>                   
                    <div>
                        <form onSubmit={formSubmitHandle} className="flex flex-col gap-2">
                            <div className="flex md:flex-row flex-col gap-2 md:gap-0">
                                <div className="border rounded md:rounded-tl-md md:rounded-bl-md">
                                    <input className="p-1 w-full" name="name" type="text" placeholder="Write your Name" required/>
                                </div>
                                <div className="border rounded md:rounded-tr-md md:rounded-br-md">
                                    <input className="p-1 w-full" name="email" type="email" placeholder="Write your Email" required/>
                                </div>
                            </div>
                            <div className="flex md:flex-row flex-col gap-2 md:gap-0">
                                <div className="border rounded md:rounded-tl-md md:rounded-bl-md">
                                    <input className="p-1 w-full" name="photourl" type="text" placeholder="Write your Photo URL" required/>
                                </div>
                                <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
                    
                                    <div className="relative flex flex-col w-full mx-auto">
                                        <input name="password" className="border p-1" type={showPwd ? "text" : "password"} placeholder="Write Your Password" required/>
                                        <span onClick={eyeHandler} className="absolute right-2 top-3 cursor-pointer">
                                            {showPwd ? <FaRegEyeSlash /> : <FaRegEye />}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="ml-1 border border-orange-600 rounded bg-orange-500 text-white text-center">
                                <input className="p-1 cursor-pointer" name="submit" type="submit" value="Subscribe" />
                            </div>
                        </form>
                        <div className="flex items-center justify-center">
                            {errMsg && <p>{errMsg}</p>}
                            {succMsg && <p>{succMsg}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsletterSignup;