import { IAppointmnetAPI } from '../common/interfaces/API/Appointment.interface';

const sortByDate = (appointments: IAppointmnetAPI[], direction: 'ASC' | 'DESC') => {
  appointments.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (dateA.getTime() > dateB.getTime()) return direction === 'DESC' ? -1 : 1;
    else return direction === 'DESC' ? 1 : -1;
  });
  return appointments;
};

export default sortByDate;
