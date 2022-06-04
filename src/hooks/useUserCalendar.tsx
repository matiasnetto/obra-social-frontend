import { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../Context/AuthContext';
import genEmptyCalendar from '../helpers/genEmptyCalendar';
import getAppointmentsService from '../services/getMyAppointmentsService';

const useUserCalendar = (date: Date) => {
  const { userData } = useContext(AuthContext);
  const { data: myAppointments, isLoading } = useQuery('my-appointments', () => getAppointmentsService(userData.token));

  const emptyCalendar = genEmptyCalendar(date);

  const calendar = emptyCalendar.map((day) => {
    if (!day) return day; //if is a prev or last month day (undefined)

    const dayAppointments = myAppointments?.filter(
      (appointment) =>
        Number(appointment.day) === day.day &&
        Number(appointment.month) === day.month &&
        Number(appointment.year) === day.year
    );

    if (!dayAppointments) return { ...day, appointments: [] };
    else return { ...day, appointments: dayAppointments };
  });

  return { data: calendar, isLoading };
};

export default useUserCalendar;
