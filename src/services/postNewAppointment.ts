import axios from 'axios';

const postNewAppointment = async (date: string, hour: string | null, doctor: string | null, accessToken: string) => {
  const req = await axios.post(
    `${process.env.REACT_APP_API_ENDPOINT}/appointments`,
    { date, hour, doctor },
    { headers: { Authorization: accessToken } }
  );
  const res = req.data;

  return res;
};

export default postNewAppointment;
