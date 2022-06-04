import { Box } from '@mui/material';
import { FC, useContext, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { colors } from '../common/styles/theme';
import AppointmentsTable from '../components/Appointments/AppointmentsTable';
import NavBar from '../components/Navegation/NavBar';
import PageLoader from '../components/Utils/PageLoader';
import RenderIf from '../components/Utils/RenderIf';
import { AuthContext } from '../Context/AuthContext';
import getAppointmentsService from '../services/getMyAppointmentsService';

const DayPage: FC = () => {
  const [searchParams] = useSearchParams();
  const { userData } = useContext(AuthContext);
  const { data: allAppointments, isLoading } = useQuery('myAppointments', () => getAppointmentsService(userData.token));

  const dayAppointments = allAppointments?.filter((el) => el.date === searchParams.get('date'));

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <Box width="100%" height="200vh" sx={{ background: colors.lightGrey }}>
      <NavBar title={searchParams.get('date') || ''} />
      <RenderIf condition={!isLoading} fallback={<PageLoader />}>
        <AppointmentsTable appointments={dayAppointments} title={searchParams.get('date') || ''} />
      </RenderIf>
    </Box>
  );
};

export default DayPage;
