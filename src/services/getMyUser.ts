import axios from 'axios';
import { IUserAPI } from '../common/interfaces/API/User.interface';

const getMyUserService = async (accesToken: string) => {
  const req = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/users/me`, {
    headers: { Authorization: accesToken },
  });

  const user: IUserAPI = req.data;

  return user;
};

export default getMyUserService;
