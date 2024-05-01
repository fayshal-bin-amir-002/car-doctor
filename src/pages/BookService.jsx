import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

const BookService = () => {

    const { user, loading } = useContext(AuthContext);

    const service = useLoaderData();

    const handleOrder = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const amount = form.amount.value;
        const msg = form.msg.value;

        const order = {
            customerName: name,
            email,
            date,
            phone,
            service_id: service._id,
            service: service.title,
            price: amount,
            details: msg,
            image: service.img
        }

        console.log(order);

        fetch('http://localhost:3000/bookings', {
            method: "POST",
            headers: {'content-type': "application/json"},
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId) {
                    toast.success('Booking successfully');
                    form.reset();
                }
                else {
                    toast.error('Something went wrong');
                }
            })
    }

    if(loading) {
        return <Loader></Loader>
    }

    return (
        <div className="p-6">
            <h2 className="mb-8 text-5xl font-semibold text-center opacity-80">Service : {service.title}</h2>
            <div className="w-full lg:w-3/4 mx-auto">
                <form onSubmit={handleOrder} className="w-full border-2 rounded-lg p-8 lg:p-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <label className="form-control w-full mb-5 lg:mb-7">
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full mb-5 lg:mb-7">
                            <input type="date" name="date" placeholder="Last Name" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full mb-5 lg:mb-7">
                            <input type="text" name="phone" defaultValue={user?.displayName} placeholder="Your Phone" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full mb-5 lg:mb-7">
                            <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full mb-5 lg:mb-7">
                            <input type="text" name="amount" defaultValue={service.price + ' $'} placeholder="Your Due" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full md:col-span-2 mb-7 lg:mb-12">
                            <textarea name="msg" className="border rounded-lg p-4" placeholder="Your Message" rows="7"></textarea>
                        </label>
                    </div>
                    <button className="btn bg-[#FF3811] border-none text-white font-semibold text-lg w-full">Order Confirm</button>
                </form>
            </div>
        </div>
    );
};

export default BookService;