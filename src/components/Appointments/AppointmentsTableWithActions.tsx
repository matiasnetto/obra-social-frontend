import { ChangeEvent, FC, useContext, useState } from 'react';
import {
  Avatar,
  Button,
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
import formatDate from '../../helpers/formatDate';
import { colors } from '../../common/styles/theme';
import { IAppointmnetAPI } from '../../common/interfaces/API/Appointment.interface';
import sortByDate from '../../helpers/sortByDate';
import deleteAppointment from '../../services/deleteAppointment';
import { AuthContext } from '../../Context/AuthContext';
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from 'react-query';
import { Box } from '@mui/system';
import AppointmentRow from './AppointmentRow';
import RenderIf from '../Utils/RenderIf';
import { Link } from 'react-router-dom';
import NoAppointmentsMessage from './NoAppointmentsMessage';

const defaultImage =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Hz2zc6bs5XSwenctIT5FmgHaG4%26pid%3DApi&f=1';

interface IProps {
  appointments: IAppointmnetAPI[] | undefined;
  refetchAppointments: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<IAppointmnetAPI[], unknown>>;
}

const AppointmentsTableWithActions: FC<IProps> = ({ appointments, refetchAppointments }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { userData } = useContext(AuthContext);

  const handlePageChange = (e: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+e.target.value);
    setPage(0);
  };

  const handleCancelTurn = async (appointmentId: string) => {
    const reqStatus = await deleteAppointment(appointmentId, userData.token);
    if (reqStatus > 300) alert('Error');
    refetchAppointments();
  };

  return (
    <TableContainer component={Paper} sx={{ width: { xs: '90%', md: '80%' }, margin: '0 auto', marginTop: '3rem' }}>
      <Typography variant="h2" fontSize="1.7rem" padding="16px 0 0 16px" color={colors.blue} fontWeight={400}>
        Proximos turnos
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
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments &&
              sortByDate(appointments, 'ASC')
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((el) => <AppointmentRow data={el} acctions handleCancelTurn={handleCancelTurn} key={el.id} />)}
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

export default AppointmentsTableWithActions;
