import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
// import { IAppointmnetAPI } from '../../common/interfaces/API/Appointment.interface';
import useUserCalendar from '../../hooks/useUserCalendar';
import PageLoader from '../Utils/PageLoader';
import CalendarDay from './CalendarDay';

const CalendarMonth: FC<{ date: Date }> = ({ date }) => {
  const { data: monthData, isLoading } = useUserCalendar(date);

  let WEEK_DAYS: string[];
  if (window.innerWidth >= 996) WEEK_DAYS = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
  else WEEK_DAYS = ['Lun', 'Mar', 'Mier', 'Juev', 'Vier', 'Sab', 'Dom'];

  if (isLoading) return <PageLoader />;

  return (
    <Grid
      container
      columns={8}
      width="100%"
      marginTop="2rem"
      columnGap={{ xs: '1px', md: '5px' }}
      rowGap={{ xs: '1px', md: '5px' }}
      justifyContent="center"
    >
      {WEEK_DAYS.map((day) => (
        <Grid item key={day} xs={1}>
          <Typography textAlign="center" fontWeight="400" fontSize={{ xs: '0.8rem', md: '1.2rem' }} color="#444">
            {day}
          </Typography>
        </Grid>
      ))}
      {monthData &&
        monthData.map((el, i) => {
          if (!el)
            return (
              <Grid item key={i} xs={1} width="100%">
                <CalendarDay date={null} appointments={null} />
              </Grid>
            );
          return (
            <Grid item key={i} xs={1} width="100%">
              <CalendarDay date={el.date} appointments={el.appointments} />
            </Grid>
          );
        })}
    </Grid>
  );
};

export default CalendarMonth;
