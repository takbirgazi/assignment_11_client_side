import RoomsCard from "./RoomsCard";
import { useState } from "react";
import { useEffect } from "react";

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [asnd, setasnd] = useState(true);

    const filterHndler = ()=>{
        setasnd(!asnd);
    }
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API}/rooms`)
        .then(res => res.json())
        .then(data => setRooms(data))
    },[])
    return (
        <div className="w-11/12 mx-auto">
            <div className="my-5">
                <h2 className="font-bold text-2xl text-center">Rooms</h2>
            </div>
            <div className="my-5 flex items-center justify-center">
                <button onClick={filterHndler} className="border bg-green-500 rounded-md px-2 py-1 text-white font-bold">{asnd ? 'Heigh to Low' : 'Low to Heigh'}</button>
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