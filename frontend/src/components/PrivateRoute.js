import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Userpage from '../pages/Userpage';

const PrivateRoute = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return isAuthenticated ? <Userpage /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;






