import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import Loader from "../pages/Loader/Loader";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <Loader></Loader>
    }
    if (user) {
        return children
    }
    return  <Navigate to={"/login"}></Navigate>
};

export default PrivateRoutes;