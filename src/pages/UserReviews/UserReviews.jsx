import { useEffect, useState } from "react";
import UserReviewsCard from "./UserReviewsCard";


const UserReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API}/review`)
        .then(res=> res.json())
        .then(data => setReviews(data));
    },[])
    return (
        <div className="w-11/12 mx-auto">
            <div className="my-5">
                <h2 className="font-bold text-2xl text-center">User Reviews</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
                {
                    reviews.map(rev => <UserReviewsCard key={rev._id} cardInfo={rev}></UserReviewsCard>)
                }
            </div>
        </div>
    );
};

export default UserReviews;