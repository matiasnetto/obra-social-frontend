import axios from 'axios';
import { IDayApi } from '../common/interfaces/API/Day.interface';
import formatDateToSimple from '../helpers/formatDateToSimple';

const getAvaibleHours = async (date: Date, doctor: string) => {
  const req = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/days`, {
    params: { date: formatDateToSimple(date), doctor },
  });
  console.log(req.data);

  const day: IDayApi = req.data;

  return day.hours;
};

export default getAvaibleHours;
