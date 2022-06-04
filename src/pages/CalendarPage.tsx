import { FC, useState } from 'react';
import CalendarMonth from '../components/Calendar/CalendarMonth';
import { Box, Typography } from '@mui/material';
import NavBar from '../components/Navegation/NavBar';
import { colors } from '../common/styles/theme';
import { addMonths, subMonths } from 'date-fns';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const MONTHS_NAMES = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

const CalendarPage: FC = () => {
  const [date, setDate] = useState<Date>(new Date());

  const handleIncrementMonth = () => {
    setDate((date) => addMonths(date, 1));
  };

  const handleDecrementMonth = () => {
    setDate((date) => subMonths(date, 1));
  };

  return (
    <Box width="100%" height="200vh" sx={{ background: colors.lightGrey }}>
      <NavBar title="Calendario">
        <Box display="flex" alignItems="center" justifyContent="center" marginLeft="1rem">
          <Box
            height="fit-content"
            component="button"
            onClick={handleDecrementMonth}
            color="#fff"
            border="none"
            sx={{ width: 'fit-content', background: 'transparent' }}
          >
            <ArrowBackIosIcon fontSize="small" />
          </Box>
          <Typography fontSize={{ xs: '1.1rem', md: '1.2rem' }}>{MONTHS_NAMES[date.getMonth()]}</Typography>
          <Box
            component="button"
            onClick={handleIncrementMonth}
            color="#fff"
            border="none"
            sx={{ width: 'fit-content', background: 'transparent' }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </Box>
        </Box>
      </NavBar>
      <CalendarMonth date={date} />
    </Box>
  );
};

export default CalendarPage;
