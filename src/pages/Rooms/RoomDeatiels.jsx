import { useLoaderData } from "react-router-dom";
import MyModal from "../MyModal/MyModal";


const RoomDeatiels = () => {
    const room = useLoaderData();
    return (
        <div className="my-5 w-10/12 mx-auto">
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={room.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <p>{room.description}</p>
                    <div className="card-actions flex flex-col">
                        <button><span className="font-bold text-xl">${room.price_per_night}</span> per night</button>
                        <p>Room Size: {room.room_size}</p>
                        <div className="flex items-center justify-between w-full">
                            <button className="py-1 px-2 border rounded bg-blue-500 text-white">{room.availability}</button>
                            <h2 className="card-title"> 
                                {room.special_offer}
                                <div className="badge badge-secondary">Offer</div>
                            </h2>
                        </div>
                        <button className="border rounded px-2 py-1 bg-blue-500 text-white font-bold text-lg w-full text-center">
                             <MyModal roomInfo={room}></MyModal>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default RoomDeatiels;