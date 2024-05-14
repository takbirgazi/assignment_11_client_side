import MyBookingTable from "./MyBookingTable";


const MyBookings = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="my-5">
                <h2 className="font-bold text-2xl text-center">My Bookings</h2>
            </div>
            <div>
               <MyBookingTable></MyBookingTable>
            </div>
        </div>
    );
};

export default MyBookings;