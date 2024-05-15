import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MyBookingTAbleRow = ({bookingInfo}) => {
    const {image, name, desc} = bookingInfo;
    return (
          <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={image} alt="Avatar Tailwind CSS Component" className="border border-yellow-500" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{name}</div>
                    </div>
                  </div>
                </td>
                <td>{desc}</td>
                <th>
                  <div className="flex flex-col md:flex-row gap-2 items-center">
                    <button className="btn btn-ghost btn-xs bg-red-500 text-white">Cancel</button>
                    <button className="btn btn-ghost btn-xs bg-blue-500 text-white">Update</button>
                    <NavLink to="/review" className="btn btn-ghost btn-xs bg-yellow-500 text-white cursor-pointer">Review</NavLink>
                  </div>
                </th>
            </tr>
    );
};

export default MyBookingTAbleRow;


MyBookingTAbleRow.propTypes = {
  bookingInfo: PropTypes.object,
}