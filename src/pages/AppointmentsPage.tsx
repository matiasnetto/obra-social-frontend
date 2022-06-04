import { Box } from '@mui/material';
import { FC, useContext } from 'react';
import { useQuery } from 'react-query';
import AppointmentsTableWithActions from '../components/Appointments/AppointmentsTableWithActions';
import NavBar from '../components/Navegation/NavBar';
import { AuthContext } from '../Context/AuthContext';
import getAppointmentsService from '../services/getMyAppointmentsService';
import { colors } from '../common/styles/theme';
import AppointmentsTable from '../components/Appointments/AppointmentsTable';
import RenderIf from '../components/Utils/RenderIf';
import PageLoader from '../components/Utils/PageLoader';

const AppointmentsPage: FC = () => {
  const { userData } = useContext(AuthContext);
  const {
    isLoading,
    isError,
    error,
    data: appointments,
    refetch,
  } = useQuery('appointments', () => getAppointmentsService(userData.token));

  const proximosTurnos = appointments?.filter((el) => {
    const date = new Date(el.date);
    const today = new Date();

    if (date > today) return true;
    return false;
  });

  const turnosPasados = appointments?.filter((el) => {
    const date = new Date(el.date);
    const today = new Date();

    if (date < today) return true;
    return false;
  });

  if (isError) return <h1>{JSON.stringify(error)}</h1>;

  return (
    <Box width="100%" sx={{ background: colors.lightGrey }}>
      <NavBar title="Mis turnos" />
      <RenderIf condition={!isLoading} fallback={<PageLoader />}>
        <AppointmentsTableWithActions appointments={proximosTurnos} refetchAppointments={refetch} />
        <AppointmentsTable appointments={turnosPasados} title="Historial de turnos" />
      </RenderIf>
    </Box>
  );
};

export default AppointmentsPage;
