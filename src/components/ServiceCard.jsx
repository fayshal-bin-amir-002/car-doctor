import PropTypes from 'prop-types';
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { _id, title, img, price } = service;

    return (
        <div className="card flex flex-col justify-between shadow-xl p-6">
            <figure>
                <img src={img} alt="Shoes" className="rounded-xl w-full h-[250px] mb-6" />
            </figure>
            <div>
                <h3 className='text-2xl font-bold mb-4'>{title}</h3>
                <div className='flex items-center justify-between'>
                    <h4 className='text-xl font-semibold text-[#FF3811]'>Price : ${price}</h4>
                    <Link to={`/book-service/${_id}`} className='text-[#FF3811] text-2xl'><GoArrowRight /></Link>
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object.isRequired
};

export default ServiceCard;