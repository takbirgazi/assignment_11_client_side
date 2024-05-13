import UserReviewsCard from "./UserReviewsCard";


const UserReviews = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="my-5">
                <h2 className="font-bold text-2xl text-center">User Reviews</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
                <UserReviewsCard></UserReviewsCard>
                <UserReviewsCard></UserReviewsCard>
                <UserReviewsCard></UserReviewsCard>
                <UserReviewsCard></UserReviewsCard>
                <UserReviewsCard></UserReviewsCard>
                <UserReviewsCard></UserReviewsCard>
                <UserReviewsCard></UserReviewsCard>
            </div>
        </div>
    );
};

export default UserReviews;