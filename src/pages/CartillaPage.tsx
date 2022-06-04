import { Box, Grid } from '@mui/material';
import { FC } from 'react';
import { useQuery } from 'react-query';
import DoctorCard from '../components/Cards/DoctorCard';
import NavBar from '../components/Navegation/NavBar';
import PageLoader from '../components/Utils/PageLoader';
import RenderIf from '../components/Utils/RenderIf';
import getDoctorsService from '../services/getDoctorsService';
import { colors } from '../common/styles/theme';

const CartillaPage: FC = () => {
  const { isLoading, isError, error, data: doctors } = useQuery('doctors', getDoctorsService);

  // if (isLoading) return <PageLoader />;

  if (isError) return <h1>{JSON.stringify(error)}</h1>;

  return (
    <Box width="100%" sx={{ background: colors.lightGrey }}>
      <NavBar title="Cartilla medica" />
      <RenderIf condition={!isLoading} fallback={<PageLoader />}>
        <Grid container spacing={{ xs: 0, md: '1rem' }} justifyContent="center" margin="0 auto" paddingY="0.5rem">
          {doctors &&
            doctors.map((doc) => (
              <Grid margin="0.5rem 0" item key={doc.id}>
                <DoctorCard name={doc.name} specialty={doc.specialty} />
              </Grid>
            ))}
        </Grid>
      </RenderIf>
    </Box>
  );
};

export default CartillaPage;
