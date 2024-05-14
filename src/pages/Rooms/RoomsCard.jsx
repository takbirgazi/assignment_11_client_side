import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Rating } from '@mui/material';
import { useState } from 'react';
import PropTypes from 'prop-types'; 

const RoomsCard = ({CardInfo}) => {
    const [value, setValue] = useState(2)
    const {image} = CardInfo;
  return (
    <Card >
      <CardMedia
        className='h-48'
        component="img"
        alt="green iguana"
        height="140px"
        image={image}
      />
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">
            <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
            />
        </Button>
      </CardActions>
    </Card>
  );
}

export default RoomsCard;

RoomsCard.propTypes = {
    CardInfo: PropTypes.object,
}