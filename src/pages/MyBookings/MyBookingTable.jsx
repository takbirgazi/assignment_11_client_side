import MyBookingTAbleRow from "./MyBookingTAbleRow";

const MyBookingTable = () => {
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
                <MyBookingTAbleRow></MyBookingTAbleRow>
            </tbody>
            
          </table>
        </div>
       </div>
      );
};

export default MyBookingTable;