import { Button, Modal } from "flowbite-react";
import { useContext, useState } from "react";
import PropTypes from 'prop-types'; 
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MyModal = ({roomInfo}) => {
  const navigate = useNavigate()
    const [openModal, setOpenModal] = useState(false);
    const {user} = useContext(AuthContext);
    const roomConfirmHndlr = (desc, id)=>{
      const booked = {
        name:user.displayName,
        email:user.email,
        image:user.photoURL,
        desc:desc,
        usrId:id
      }

      fetch(`${import.meta.env.VITE_API}/booking`,{
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(booked)
        })
        .then(res => res.json())
        .then(()=> {
            toast('Booking Successfully');
            navigate(`/booking/${user.email}`);
        })
    }
    return (
        <div>
            <p onClick={() => setOpenModal(true)}>Book Now</p>
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
              <Modal.Header>Room Details</Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">{roomInfo.description}</p>
                  <h5><span className="font-bold">${roomInfo.price_per_night}</span> pre night</h5>
                  <p>Room Size: {roomInfo.room_size}</p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={() => roomConfirmHndlr(roomInfo.description, roomInfo._id)}>Confirm</Button>
                <Button color="gray" onClick={() => setOpenModal(false)}>
                  Cancel
                </Button>
              </Modal.Footer>
            </Modal>
        </div>
    );
};

export default MyModal;

MyModal.propTypes = {
  roomInfo: PropTypes.object,
}