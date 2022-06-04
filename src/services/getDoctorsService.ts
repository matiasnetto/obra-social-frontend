import axios from 'axios';
import { IDoctorAPI } from '../common/interfaces/API/Doctor.interface';

const getDoctorsService = async () => {
  const req = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/doctors`);

  const doctors: IDoctorAPI[] = req.data;

  return doctors;
};

export default getDoctorsService;
