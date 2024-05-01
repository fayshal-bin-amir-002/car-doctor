import { Outlet } from "react-router-dom";
import LoginNav from "../components/LoginNav";

const LoginLayout = () => {
    return (
        <div className="container mx-auto px-6">
            <LoginNav></LoginNav>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;