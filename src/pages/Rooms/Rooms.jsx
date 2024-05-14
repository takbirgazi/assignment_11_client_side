import { useLoaderData } from "react-router-dom";
import RoomsCard from "./RoomsCard";

const Rooms = () => {
    const rooms = useLoaderData();
    return (
        <div className="w-11/12 mx-auto">
            <div className="my-5">
                <h2 className="font-bold text-2xl text-center">Rooms</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    rooms.map(room => <RoomsCard key={room._id} CardInfo={room}></RoomsCard>)
                }
            </div>
        </div>
    );
};

export default Rooms;