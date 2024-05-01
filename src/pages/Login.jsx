import { Link } from "react-router-dom";
import loginImg from "../assets/images/login/login.svg";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import LoginNav from "../components/LoginNav";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {

    const { userLogin } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password) 
            .then((result) => {
                if(result.user) {
                    toast.success("Log in successfully.");
                    form.reset();
                }
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    return (
        <div className="container mx-auto px-6">
            <LoginNav></LoginNav>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16 my-6 lg:my-12">
                <div className="lg:w-1/2">
                    <img src={loginImg} alt="" className="lg:w-3/4" />
                </div>
                <div className="w-full lg:w-1/2">
                    <form onSubmit={handleLogin} className="w-full border-2 rounded-lg p-8 lg:p-16">
                        <h3 className="text-3xl lg:text-4xl font-semibold text-center mb-6 lg:mb-12 opacity-80">Login</h3>
                        <label className="form-control w-full mb-5 lg:mb-7">
                            <div className="label font-semibold">
                                <span className="label-text">Email</span>
                            </div>
                            <input type="email" name="email" placeholder="Your email" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full mb-8 lg:mb-12">
                            <div className="label font-semibold">
                                <span className="label-text">Password</span>
                            </div>
                            <input type="password" name="password" placeholder="Your password" className="input input-bordered w-full" />
                        </label>
                        <button className="btn bg-[#FF3811] border-none text-white font-semibold text-lg w-full">Log In</button>
                        <p className="font-medium text-lg my-6 lg:my-8 text-center opacity-80">Or Sign In with</p>
                        <div className="flex justify-center gap-10 text-2xl mb-6 lg:mb-12">
                            <span className="p-3 bg-gray-200 rounded-full cursor-pointer text-red-500"><FaGoogle /></span>
                            <span className="p-3 bg-gray-200 rounded-full cursor-pointer"><FaGithub /></span>
                            <span className="p-3 bg-gray-200 rounded-full cursor-pointer text-blue-600"><FaFacebook /></span>
                        </div>
                        <p className="text-lg text-center"><span className="opacity-80">Dont have an account? </span><Link to="/register" className=" font-semibold text-[#FF3811]">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;