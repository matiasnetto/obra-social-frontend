import { IDoctorAPI } from './Doctor.interface';

export interface IAppointmnetAPI {
  date: string;
  day: number;
  month: number;
  year: number;
  hour: string;
  client: string;
  doctor: IDoctorAPI;
  id: string;
}
