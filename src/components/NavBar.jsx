import { Link, NavLink } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const NavBar = () => {

    const { user, userLogOut } = useContext(AuthContext);

    const handleLogout = () => {
        userLogOut()
            .then(() => {
                toast.success('Log out successfully');
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    const navLinks = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-[#FF3811] p-2 border rounded-lg border-[#FF3811]' : ''}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'text-[#FF3811]' : ''}>About</NavLink></li>
        <li><NavLink to="/services" className={({ isActive }) => isActive ? 'text-[#FF3811]' : ''}>Services</NavLink></li>
        <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'text-[#FF3811]' : ''}>Blog</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'text-[#FF3811]' : ''}>Contact</NavLink></li>
        <li><NavLink to="/bookings" className={({ isActive }) => isActive ? 'text-[#FF3811] p-2 border rounded-lg border-[#FF3811]' : ''}>Bookings</NavLink></li>
    </>

    return (
        <nav>
            <div className="navbar py-4 lg:py-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu space-y-2 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/">
                        <img src={logo} alt="logo" className="w-14 lg:w-20" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="items-center menu-horizontal gap-8 text-lg font-medium">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <button className="btn border-[#FF3811] text-[#FF3811] font-semibold text-lg bg-white">Appointment</button>
                    {
                        !user ?
                            <Link to="/login" className="btn border-[#FF3811] text-[#FF3811] font-semibold text-lg bg-white">Login</Link> :
                            <button onClick={handleLogout} className="btn bg-[#FF3811] text-white font-semibold text-lg">Log Out</button>
                    }
                </div>
            </div>
        </nav>
    );
};

export default NavBar;