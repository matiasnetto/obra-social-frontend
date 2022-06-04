import axios from 'axios';

const postNewUser = async (username: string, name: string, surname: string, email: string, password: string) => {
  const req = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/users`, {
    username,
    name,
    surname,
    email,
    password,
  });

  return req;
};

export default postNewUser;
