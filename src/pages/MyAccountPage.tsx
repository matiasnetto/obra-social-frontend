import { Box, Paper } from '@mui/material';
import { FC, useContext } from 'react';
import { useQuery } from 'react-query';
import Form from '../components/MyAccount/Form';
import NavBar from '../components/Navegation/NavBar';
import PageLoader from '../components/Utils/PageLoader';
import { AuthContext } from '../Context/AuthContext';
import getMyUserService from '../services/getMyUser';
import { colors } from '../common/styles/theme';
import RenderIf from '../components/Utils/RenderIf';

const MyAccountPage: FC = () => {
  const { userData: userContextData } = useContext(AuthContext);

  const { isLoading, isError, error, data: user } = useQuery('user', () => getMyUserService(userContextData.token));

  if (isError)
    return (
      <h1>
        Fatal error:\n <pre>{JSON.stringify(error)}</pre>
      </h1>
    );

  return (
    <Box width="100%" sx={{ background: colors.lightGrey }}>
      <NavBar title="Mi cuenta" />
      <RenderIf condition={!isLoading} fallback={<PageLoader />}>
        <Box
          width={{ xs: '100%', md: '60%' }}
          height={{ xs: 'auto', md: '70vh' }}
          margin={{ xs: '2rem 0 0 0', md: '4rem auto 0 auto' }}
        >
          <Paper sx={{ height: '100%', width: '90%', padding: { xs: '1rem', md: '2rem' } }}>
            <Form
              email={user?.email || ''}
              name={user?.name || ''}
              surname={user?.surname || ''}
              username={user?.username || ''}
            />
          </Paper>
        </Box>
      </RenderIf>
    </Box>
  );
};

export default MyAccountPage;
