import { IAppointmnetAPI } from './Appointment.interface';
export interface IHour {
  hour: string;
  avaible: boolean;
}

export interface IDayApi {
  date: string;
  day: number;
  month: number;
  year: number;
  hours: IHour[];
  dayAvaible: boolean;
  doctor: string;
}

export interface ISimpleDay {
  date: Date;
  day: number;
  month: number;
  year: number;
  weekDay: number;
}

export interface IDayWithAppointment extends ISimpleDay {
  appointments: IAppointmnetAPI[];
}
