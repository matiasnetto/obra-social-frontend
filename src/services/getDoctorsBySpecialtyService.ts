import axios from 'axios';
import { IDoctorAPI } from '../common/interfaces/API/Doctor.interface';

const getDoctorsBySpecialtyService = async (specialty: string) => {
  const req = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/doctors`, { params: { specialty } });

  const doctors: IDoctorAPI[] = req.data;

  return doctors;
};

export default getDoctorsBySpecialtyService;
