import PropTypes from 'prop-types';

const BookingRow = ({ booking, handleDeleteBooking, handleConfirm }) => {

    const { _id, image, customerName, email, date, service, price, status } = booking;

    

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDeleteBooking(_id)} className="btn btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service}</div>
                        <div className="text-sm opacity-50">{date}</div>
                    </div>
                </div>
            </td>
            <td>
                <span>{customerName}</span>
            </td>
            <td><span>{email}</span></td>
            <td><span>{price}</span></td>
            <th>
                {
                    status === 'confirm' ?
                    <span className="px-4 py-2 rounded-2xl bg-green-600 text-white">Approved</span>:
                    <button onClick={() => handleConfirm(_id)} className="btn btn-ghost bg-red-500 text-white btn-sm">Pending</button>
                }
            </th>
        </tr>
    );
};

BookingRow.propTypes = {
    booking: PropTypes.object.isRequired,
    handleDeleteBooking: PropTypes.func.isRequired,
    handleConfirm: PropTypes.func.isRequired,
};

export default BookingRow;