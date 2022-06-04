export interface IUserAPI<TAppointmentsType = string> {
  username: string;
  name: string;
  surname: string;
  email: string;
  role: string;
  appointments: TAppointmentsType[];
  id: string;
}
