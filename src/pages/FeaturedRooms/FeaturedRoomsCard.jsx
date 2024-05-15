import PropTypes from 'prop-types'; 
import { NavLink } from 'react-router-dom';
const FeaturedRoomsCard = ({cardInfo}) => {
    const {_id, image, description} = cardInfo;
    return (
            <div className="card bg-base-100 shadow-xl">
                <figure className="h-48"><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <p>{description}</p>
                    <div className="card-actions">
                     <NavLink to={`/rooms/${_id}`} className="border bg-blue-500 text-white px-2 py-1 rounded-md">Book Now</NavLink>
                    </div>
                </div>
            </div>
    );
};

export default FeaturedRoomsCard;

FeaturedRoomsCard.propTypes = {
    cardInfo: PropTypes.object,
}