import ServiceCard from "./ServiceCard";
import { useQuery } from '@tanstack/react-query'
import Loader from "./Loader";

const Service = () => {

    const { data, isLoading } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/services')
            const data = await res.json();
            return data
        },
    })

    if(isLoading) {
        return <Loader></Loader>;
    }

    return (
        <div className="my-8 md:my-14 lg:my-[200px]">
            <div className="lg:w-2/5 mx-auto text-center">
                <h4 className="text-xl font-bold text-[#FF3811] mb-5">Service</h4>
                <h2 className="text-3xl lg:text-5xl font-bold mb-6 lg:mb-8">Our Service Area</h2>
                <p className="opacity-80 mb-5">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>
            <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    data.map((service) => <ServiceCard key={service._id} service={service
                    }></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;