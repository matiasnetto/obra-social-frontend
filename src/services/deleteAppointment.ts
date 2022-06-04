import axios from 'axios';

const deleteAppointment = async (appointmentId: string, accesToken: string) => {
  const req = await axios.delete(`${process.env.REACT_APP_API_ENDPOINT}/appointments/${appointmentId}`, {
    headers: { Authorization: accesToken },
  });

  return req.status;
};

export default deleteAppointment;
