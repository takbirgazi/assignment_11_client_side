import MyBookingTAbleRow from "./MyBookingTAbleRow";
import PropTypes from 'prop-types';

const MyBookingTable = ({allBooking}) => {
  console.log(allBooking);
    return (
       <div>
        <div className="overflow-x-auto">
          <table className="table">
           
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {
                allBooking.map(booking=> <MyBookingTAbleRow key={booking._id} bookingInfo={booking} ></MyBookingTAbleRow>)
              }
            </tbody>
            
          </table>
        </div>
       </div>
      );
};

export default MyBookingTable;


MyBookingTable.propTypes = {
  allBooking: PropTypes.array,
}