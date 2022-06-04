import { ChangeEvent, FC, useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import { colors } from '../../common/styles/theme';
import { IAppointmnetAPI } from '../../common/interfaces/API/Appointment.interface';
import sortByDate from '../../helpers/sortByDate';
import AppointmentRow from './AppointmentRow';
import NoAppointmentsMessage from './NoAppointmentsMessage';
import RenderIf from '../Utils/RenderIf';

interface IProps {
  title: string;
  appointments: IAppointmnetAPI[] | undefined;
}

const AppointmentsTable: FC<IProps> = ({ appointments, title }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handlePageChange = (e: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+e.target.value);
    setPage(0);
  };

  return (
    <TableContainer component={Paper} sx={{ width: { xs: '90%', md: '80%' }, margin: '0 auto', marginTop: '3rem' }}>
      <Typography variant="h2" fontSize="1.7rem" padding="16px 0 0 16px" color={colors.blue} fontWeight={400}>
        {title}
      </Typography>
      <RenderIf condition={appointments?.length === 0}>
        <NoAppointmentsMessage />
      </RenderIf>

      <RenderIf condition={appointments?.length !== 0}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Fecha</TableCell>
              <TableCell>Horario</TableCell>
              <TableCell>Doctor</TableCell>
              <TableCell>Especialidad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments &&
              sortByDate(appointments, 'DESC')
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((el) => <AppointmentRow data={el} key={el.id} />)}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5]}
          component="div"
          count={appointments?.length || 0}
          rowsPerPage={5}
          page={page}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </RenderIf>
    </TableContainer>
  );
};

export default AppointmentsTable;
