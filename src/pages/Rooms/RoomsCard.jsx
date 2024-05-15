import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Rating } from '@mui/material';
import PropTypes from 'prop-types'; 
import { NavLink } from 'react-router-dom';

const RoomsCard = ({CardInfo}) => {
    const {_id, image, totalReview, star, price_per_night, availability} = CardInfo;
  return (
    <NavLink to={`/rooms/${_id}`}>
      <Card>
        <CardMedia
          className='h-48'
          component="img"
          alt="green iguana"
          height="140px"
          image={image}
        />
        <CardActions className='flex items-center '>
          <Button size="small">
              <Rating
              name="simple-controlled"
              value={parseInt(star)}
              onChange={() => {
              // setValue(newValue);
              }}
              />
          </Button>
          <span className='font-bold'>{totalReview ? totalReview : 0} Reviews</span>
        </CardActions>
        <div className='flex items-center justify-between my-2 px-2'>
            <h2 className='font-bold'>${price_per_night}</h2>
            <h2 className='font-bold'>{availability}</h2>
        </div>
      </Card>
    </NavLink>
  );
}

export default RoomsCard;

RoomsCard.propTypes = {
    CardInfo: PropTypes.object,
}