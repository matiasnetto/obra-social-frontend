import { createContext, FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IAuthContext, IRegister, IRegisterData, IUserData } from '../common/interfaces/Context/AuthContext.interface';
import { logInService } from '../services/logInService';
import postNewUser from '../services/postNewUser';

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const DEFAULT_USER_DATA = {
  username: '',
  name: '',
  token: '',
};

const AuthContextProvider: FC = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState<IUserData>(DEFAULT_USER_DATA);
  const navigate = useNavigate();

  const logIn = async (username: string, password: string): Promise<{ ok: boolean; error: string }> => {
    try {
      const { error, token } = await logInService(username, password);
      if (error) return { ok: false, error };
      setUserData({ username, name: username, token });
      setIsLogged(true);
      navigate('/');
      return { ok: true, error: '' };
    } catch (err) {
      const error = err as { message: string };
      return { ok: false, error: error.message as string };
    }
  };

  const register = async (
    username: string,
    name: string,
    surname: string,
    email: string,
    password: string
  ): Promise<IRegister> => {
    const req = await postNewUser(username, name, surname, email, password);
    const data = req.data as IRegisterData;
    const isOk = req.status === 201 ? true : false;

    return { data, ok: isOk };
  };

  const logOut = () => {
    setIsLogged(false);
    setUserData(DEFAULT_USER_DATA);
  };

  return (
    <AuthContext.Provider value={{ isLogged, logIn, register, logOut, userData }}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
