import { useState } from "react";
import AddRoomForm from "../../../components/Forms/AddRoomsForm/AddRoomsForm";
import useAuth from "../../../hooks/useAuth";
import { ImageUpload } from "../../../../public/api/utils";
import toast from "react-hot-toast";


const AddRoom = () => {

    const [loading, setLoading] = useState(false)
    const { user } = useAuth()

    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: null,
        key: 'selection'
    });

    // date handler
    const handleDates = (item) => {
        // console.log(item.selection);
        setDates(item.selection);
    }

    // Form handler
    const handleFormSubmite = async e => {
        e.preventDefault()
        const form = e.target
        const location = form.location.value
        const category = form.category.value
        const title = form.title.value
        const to = dates.endDate
        const from = dates.startDate
        const price = form.price.value
        const guests = form.total_guest.value
        const bathrooms = form.bathrooms.value
        const description = form.description.value
        const bedrooms = form.bedrooms.value
        const image = form.image.files[0]

        const host = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
        }

        try {
            const image_url = await ImageUpload (image)
            const roomData = {
                location,
                category,
                title,
                to,
                from,
                price,
                guests,
                bathrooms,
                bedrooms,
                host,
                description,
                image: image_url,
            }
            console.table(roomData)

           
        } catch (err) {
            console.log(err)
            toast.error(err.message)
            setLoading(false)
        }
    }

return (
    <div>



        {/* from */}
        <AddRoomForm
            dates={dates}
            handleDates={handleDates}
            handleFormSubmite={handleFormSubmite}
        />
    </div>
);
};

export default AddRoom;