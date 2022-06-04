import axios from 'axios';
import { ILoginAPIReturn, TLoginService } from '../common/interfaces/Services/logInService.interface';

export const logInService: TLoginService = async (username, password = 'password') => {
  // let req: any;

  // try {
  //   req = await fetch(, {
  //     method: 'POST',
  //     body: JSON.stringify(),
  //     ,
  //   });
  // } catch (err) {
  //   alert(err);
  // }

  const req = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/users/login`, {
    username: username,
    password: password,
  });

  const res: ILoginAPIReturn = await req.data;

  if (!res.token) {
    return { token: '', error: res.message || '' };
  }
  return { token: res.token || '', error: '' };
};
