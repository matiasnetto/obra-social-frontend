import { FC, useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
// import LoginPage from '../../pages/LoginPage';

const PrivateRoute: FC = () => {
  const { isLogged } = useContext(AuthContext);
  return isLogged ? <Outlet /> : <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
