import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IAppointmnetAPI } from '../../common/interfaces/API/Appointment.interface';
import formatDateToSimple from '../../helpers/formatDateToSimple';
import CalendarAppointments from './CalendarAppointments';

interface IProps {
  date: Date | null;
  appointments: IAppointmnetAPI[] | null;
}

const CalendarDay: FC<IProps> = ({ appointments, date }) => {
  const navigate = useNavigate();

  const handleDayClick = () => {
    if (appointments !== null && appointments?.length !== 0 && date) {
      navigate(`/day?date=${formatDateToSimple(date)}`);
    }
  };

  return (
    <>
      <Box
        sx={{ height: '12rem', width: '100%', maxWidth: '15rem', background: '#fff', boxSizing: 'border-box' }}
        padding={{ xs: '0.2rem', md: '1rem' }}
        onClick={handleDayClick}
      >
        <Typography color="#666" fontSize={{ xs: '0.8rem', md: '1rem' }}>
          {date?.getDate()}
        </Typography>
        {appointments && <CalendarAppointments appointments={appointments} />}
      </Box>
    </>
  );
};

export default CalendarDay;
