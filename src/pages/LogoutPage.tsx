import { FC, useContext } from 'react';
import NavBar from '../components/Navegation/NavBar';
import { AuthContext } from '../Context/AuthContext';

const LogoutPage: FC = () => {
  const { logOut } = useContext(AuthContext);

  logOut();

  return (
    <div>
      <NavBar title="Logout" />
    </div>
  );
};

export default LogoutPage;
