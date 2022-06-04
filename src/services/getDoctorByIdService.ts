import axios from 'axios';
import { IDoctorAPI } from '../common/interfaces/API/Doctor.interface';

const getDoctorByIdService = async (docId: string) => {
  const req = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/doctors/${docId}`);

  const doctor: IDoctorAPI = req.data;

  return doctor;
};

export default getDoctorByIdService;
