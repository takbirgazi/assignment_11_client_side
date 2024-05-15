import { useLoaderData } from "react-router-dom";
import MyBookingTable from "./MyBookingTable";
import { Helmet } from "react-helmet";


const MyBookings = () => {
    const myBooking = useLoaderData();
    return (
        <div className="w-11/12 mx-auto">
            <Helmet>
                <title>My Booking - Seven Star</title>
            </Helmet>
            <div className="my-5">
                <h2 className="font-bold text-2xl text-center">My Bookings</h2>
            </div>
            <div>
               <MyBookingTable allBooking={myBooking}></MyBookingTable>
            </div>
        </div>
    );
};

export default MyBookings;