import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { PacmanLoader } from "react-spinners";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="flex justify-center items-center min-h-screen"><PacmanLoader color="#ea9b25" /></div>;
    }
    if (user) {
        return children;
    }
    return (
        <>
            <Navigate state={location.pathname} to="/login"></Navigate>
        </>
    );
};

PrivateRoutes.propTypes = {
    children: PropTypes.node,
};
export default PrivateRoutes;