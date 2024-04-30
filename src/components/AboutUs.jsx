import img1 from "../assets/images/about_us/person.jpg";
import img2 from "../assets/images/about_us/parts.jpg";

const AboutUs = () => {
    return (
        <div className="my-7 md:my-14 lg:my-28 px-6 flex flex-col lg:flex-row gap-14 md:gap-28">
            <div className="lg:w-1/2">
                <div className="relative">
                    <img src={img1} alt="" className="rounded-lg w-[90%]" />
                    <div className="absolute -bottom-12 -right-8 w-3/4 md:-bottom-28 lg:-bottom-24 lg:-right-14 p-2 bg-white rounded-lg"><img src={img2} alt="" /></div>
                </div>
            </div>
            <div className="lg:w-1/2">
                <h4 className="text-xl font-bold text-[#FF3811] mb-5">About Us</h4>
                <h2 className="text-3xl lg:text-5xl font-bold mb-6 lg:mb-8">We are qualified & of experience in this field</h2>
                <p className="opacity-80 mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                <p className="opacity-80 mb-6 lg:mb-8">The majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                <button className="btn bg-[#FF3811] border-none text-white font-semibold text-lg ">Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;