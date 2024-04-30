import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Loader from "../components/Loader";

const MainLayout = () => {

    const navigation = useNavigation();

    return (
        <div className="container mx-auto px-6">
            <NavBar></NavBar>
            {
                navigation.state === 'loading' ?
                <Loader></Loader> :
                <Outlet></Outlet>
            }
        </div>
    );
};

export default MainLayout;