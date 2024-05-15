import { Rating, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Review = () => {
    const [value, setValue] = useState(2);
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const reviewHndler = event=>{
        event.preventDefault();
        const comment = event.target.review.value;
        const review = {comment, star:value, name:user.displayName, image: user.photoURL, date}

        fetch(`${import.meta.env.VITE_API}/review`,{
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(()=> {
            toast('Review Successfully');
            navigate(`/`);
        })

    }
    return (
        <div className="my-5 w-11/12 mx-auto">
            <div>
                <form onSubmit={reviewHndler} className="flex flex-col gap-5">
                    <Typography component="legend">Review</Typography>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                    />
                    <input name="review" type="text" placeholder="Write Your Comment" required />
                    <input className="px-2 py-1 border bg-blue-500 text-white" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Review;