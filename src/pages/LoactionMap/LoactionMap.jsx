import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const LoactionMap = ()=> {
    const position = [22.8373,89.5400];
    return (
      <section>
        <div className="container max-w-full h-[200px]">
          <MapContainer
            center={position}
            zoom={10}
            scrollWheelZoom={true}
            className="h-[60vh]"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup> Seven Star </Popup>
            </Marker>
          </MapContainer>
        </div>
      </section>
    );
  }
export default LoactionMap;