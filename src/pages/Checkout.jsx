import { useLoaderData } from "react-router-dom";

const Checkout = () => {

    const service = useLoaderData();

    const handleOrder = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h2>{service.title}</h2>
            <div className="w-full lg:w-3/4 mx-auto">
                <form onSubmit={handleOrder} className="w-full border-2 rounded-lg p-8 lg:p-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <label className="form-control w-full mb-5 lg:mb-7">
                            <input type="text" name="fname" placeholder="First Name" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full mb-5 lg:mb-7">
                            <input type="text" name="lname" placeholder="Last Name" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full mb-5 lg:mb-7">
                            <input type="text" name="phone" placeholder="Your Phone" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full mb-5 lg:mb-7">
                            <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full" />
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

export default Checkout;