import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loader from "../components/Loader";
import BookingRow from "../components/BookingRow";
import { toast } from "react-toastify";

const Bookings = () => {

    const { user, loading } = useContext(AuthContext);

    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:3000/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
    }, [url]);

    const handleDeleteBooking = (id) => {
        fetch(`http://localhost:3000/bookings/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    toast.success("Booking deleted successfully");
                    const remaining = bookings.filter((booking) => booking._id !== id);
                    setBookings(remaining);
                }
                else {
                    toast.error("Something went wrong");
                }
            })
    }

    const handleConfirm = (id) => {
        fetch(`http://localhost:3000/bookings/${id}`, {
            method: "PATCH",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({status: 'confirm'})
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    toast.success("Booking updated successfully");
                    const remaining = bookings.filter((booking) => booking._id !== id);
                    const updated = bookings.find((booking) => booking._id === id);
                    updated.status = 'confirm';
                    setBookings([updated, ...remaining]);
                }
                else {
                    toast.error("Something went wrong");
                }
            })
    }

    if (loading) {
        return <Loader></Loader>;
    }

    return (
        <div>
            <h2 className="text-5xl font-semibold text-center">Your Booking : {bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking) => <BookingRow
                                key={booking._id} booking={booking}
                                handleDeleteBooking={handleDeleteBooking}
                                handleConfirm={handleConfirm}></BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;