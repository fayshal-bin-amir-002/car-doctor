import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Loader from '../components/Loader';

const PrivetRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);

    if(loading) {
        return <Loader></Loader>
    }

    if(user) {
        return children;
    }
    else {
        return <Navigate to="/login"></Navigate>
    }
};

PrivetRoute.propTypes = {
    children: PropTypes.node
};

export default PrivetRoute;