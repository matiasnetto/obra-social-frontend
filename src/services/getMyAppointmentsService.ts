import axios from 'axios';
import { IAppointmnetAPI } from '../common/interfaces/API/Appointment.interface';
const getAppointmentsService = async (accesToken: string) => {
  const req = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/users/me`, {
    params: { appointments: true },
    headers: { Authorization: accesToken },
  });

  const appointments: IAppointmnetAPI[] = req.data.appointments;

  return appointments;
};

export default getAppointmentsService;
