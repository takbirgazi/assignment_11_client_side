import FeaturedRoomsCard from "./FeaturedRoomsCard";


const FeaturedRooms = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="my-5">
                <h2 className="font-bold text-2xl text-center">Featured Rooms</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
                <FeaturedRoomsCard></FeaturedRoomsCard>
                <FeaturedRoomsCard></FeaturedRoomsCard>
                <FeaturedRoomsCard></FeaturedRoomsCard>
                <FeaturedRoomsCard></FeaturedRoomsCard>
                <FeaturedRoomsCard></FeaturedRoomsCard>
            </div>
        </div>
    );
};

export default FeaturedRooms;