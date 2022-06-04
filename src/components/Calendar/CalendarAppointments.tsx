import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import { IAppointmnetAPI } from '../../common/interfaces/API/Appointment.interface';
import { colors } from '../../common/styles/theme';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface IProps {
  appointments: IAppointmnetAPI[];
}

const CalendarAppointments: FC<IProps> = ({ appointments }) => {
  return (
    <Box paddingTop="0.5rem" position="relative">
      {appointments.slice(0, 2).map((appointment) => (
        <Box display="flex" flexDirection="column" marginBottom={{ xs: '0.5rem', md: '0' }} key={appointment.id}>
          <Typography fontSize={{ xs: '0.7rem', md: '1rem' }}>{appointment.doctor.name}</Typography>
          <Box width="fit-content" padding="0 2px" borderRadius="5px" sx={{ background: colors.blue }}>
            <Typography color="#fff" fontSize={{ xs: '0.7rem', md: '1rem' }}>
              {appointment.hour}
            </Typography>
          </Box>
        </Box>
      ))}
      {appointments.length > 2 && (
        <Box display="flex" flexDirection="column" alignItems="center" sx={{ cursor: 'pointer' }}>
          <Typography fontSize={{ xs: '0.7rem', md: '1rem' }} noWrap textAlign="center" marginTop="0.5rem">
            Ver mas
          </Typography>
          <ArrowDropDownIcon sx={{ transform: 'translateY(-6px)' }} />
        </Box>
      )}
    </Box>
  );
};

export default CalendarAppointments;
