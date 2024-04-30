import bg from "../../assets/images/homeCarousel/1.jpg";

const slide1 = () => {
    return (
        <div className="relative flex items-center w-full h-[600px] rounded-lg overflow-hidden bg-no-repeat bg-cover bg-bottom" style={{ backgroundImage: `url(${bg})` }}>
            <div className="absolute h-full w-full bg-black bg-opacity-30">
            </div>
            <div className="w-full z-10 lg:w-2/5 space-y-5 lg:space-y-7 text-white px-6 lg:px-28">
                <h3 className="text-4xl lg:text-6xl font-bold text-white">Affordable Price For Car Servicing</h3>
                <p className="text-lg opacity-80">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex items-center gap-5">
                <button className="btn bg-[#FF3811] border-none text-white font-semibold text-lg ">Discover More</button>
                <button className="btn border text-white font-semibold text-lg bg-transparent">Latest Project</button>
                </div>
            </div>
        </div>
    );
};

export default slide1;