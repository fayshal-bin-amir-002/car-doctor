import { Link, NavLink } from "react-router-dom";
import logo from "../assets/icons/logo.svg";

const LoginNav = () => {

    const navLinks = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-[#FF3811]' : ''}>Home</NavLink></li>
        <li><NavLink to="/order" className={({ isActive }) => isActive ? 'text-[#FF3811]' : ''}>Order</NavLink></li>
        <li><NavLink to="/order-review" className={({ isActive }) => isActive ? 'text-[#FF3811]' : ''}>Order Review</NavLink></li>
        <li><NavLink to="/manage-inventory" className={({ isActive }) => isActive ? 'text-[#FF3811]' : ''}>Manage Inventory</NavLink></li>
        <li><NavLink to="/login" className={({ isActive }) => isActive ? 'text-[#FF3811]' : ''}>Login</NavLink></li>
    </>

    return (
        <nav>
            <div className="navbar justify-between py-4 lg:py-6">
                <div>
                    <Link to="/">
                        <img src={logo} alt="logo" className="w-14 lg:w-20" />
                    </Link>
                </div>
                <div className="flex">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu space-y-2 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <ul className="items-center menu-horizontal gap-8 text-lg font-medium hidden lg:flex">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default LoginNav;