import { Avatar, Rating } from "@mui/material";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const UserReviewsCard = () => {
    const {user} = useContext(AuthContext);
    const [value, setValue] = useState(4);
    return (
        <div className="p-2 bg-gray-200 rounded-md">
           <div className="flex gap-3 items-center">
                <Avatar alt="Remy Sharp" src={user?.photoURL} className="border border-yellow-600" />
                <div>
                    <h4 className="font-bold">{user?.displayName}</h4>
                    <div className="flex gap-1">
                        <Rating name="read-only" value={value} readOnly />
                    </div>
                </div>
           </div>
           <div className="">
            <p className="my-2">{user?.metadata.creationTime}</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, id?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, id?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, id?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, id?</p>
           </div>
        </div>
    );
};

export default UserReviewsCard;