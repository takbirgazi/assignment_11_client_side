import { Avatar, Rating } from "@mui/material";
import PropTypes from 'prop-types'; 
const UserReviewsCard = ({cardInfo}) => {
    const {comment, date, image, name, star} = cardInfo;
    return (
        <div className="p-2 bg-gray-200 rounded-md">
           <div className="flex gap-3 items-center">
                <Avatar alt="Remy Sharp" src={image} className="border border-yellow-600" />
                <div>
                    <h4 className="font-bold">{name}</h4>
                    <div className="flex gap-1">
                        <Rating name="read-only" value={star} readOnly />
                    </div>
                </div>
           </div>
           <div className="">
            <p className="my-2">{date}</p>
            <p>{comment}</p>
           </div>
        </div>
    );
};

export default UserReviewsCard;

UserReviewsCard.propTypes = {
    cardInfo: PropTypes.object,
  }