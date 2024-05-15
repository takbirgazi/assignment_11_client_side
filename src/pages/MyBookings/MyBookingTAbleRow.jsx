import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyBookingTAbleRow = () => {
    const {user} = useContext(AuthContext);
    return (
          <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.photoURL} alt="Avatar Tailwind CSS Component" className="border border-yellow-500" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.displayName}</div>
                    </div>
                  </div>
                </td>
                <td>Daniel and Leannon</td>
                <th>
                  <div className="flex flex-col md:flex-row gap-2 items-center">
                    <button className="btn btn-ghost btn-xs bg-red-500 text-white">Cancel</button>
                    <button className="btn btn-ghost btn-xs bg-blue-500 text-white">Update</button>
                    <button className="btn btn-ghost btn-xs bg-yellow-500 text-white">Review</button>
                  </div>
                </th>
            </tr>
    );
};

export default MyBookingTAbleRow;