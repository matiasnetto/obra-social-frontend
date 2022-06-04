import { Avatar, Box, Button, TableCell, TableRow, Typography } from '@mui/material';
import { FC } from 'react';
import { IAppointmnetAPI } from '../../common/interfaces/API/Appointment.interface';
import formatDate from '../../helpers/formatDate';
import RenderIf from '../Utils/RenderIf';

interface IAppointmentRowProps {
  data: IAppointmnetAPI;
  acctions?: boolean;
  handleCancelTurn?: (appointmentId: string) => Promise<void>;
}

const defaultImage =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Hz2zc6bs5XSwenctIT5FmgHaG4%26pid%3DApi&f=1';

const AppointmentRow: FC<IAppointmentRowProps> = ({ data, acctions = false, handleCancelTurn }) => {
  return (
    <TableRow key={data.id}>
      <TableCell>{formatDate(data.day, data.month, data.year)}</TableCell>
      <TableCell>{data.hour}</TableCell>
      <TableCell>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent={{ xs: 'center', md: 'normal' }}
          alignItems="center"
        >
          <Avatar src={defaultImage} />
          <Typography marginLeft="0.5rem">{data.doctor.name}</Typography>
        </Box>
      </TableCell>
      <TableCell>{data.doctor.specialty.replace(/^\w/, (c) => c.toUpperCase())}</TableCell>
      <RenderIf condition={acctions}>
        <TableCell>
          <Button variant="outlined" color="error" onClick={() => handleCancelTurn && handleCancelTurn(data.id)}>
            Cancelar turno
          </Button>
        </TableCell>
      </RenderIf>
    </TableRow>
  );
};

export default AppointmentRow;
