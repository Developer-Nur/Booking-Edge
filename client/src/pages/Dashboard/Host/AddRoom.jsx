import { useState } from "react";
import AddRoomForm from "../../../components/Forms/AddRoomsForm/AddRoomsForm";


const AddRoom = () => {
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: null,
        key: 'selection'
    });

    const handleDates = (item) => {
        // console.log(range);
        console.log(item.selection);
        setDates(item.selection);
    }
    return (
        <div>

           

            {/* from */}
            <AddRoomForm dates={dates} handleDates={handleDates} />
        </div>
    );
};

export default AddRoom;