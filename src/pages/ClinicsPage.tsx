import { Box, Grid } from '@mui/material';
import { FC } from 'react';
import { useQuery } from 'react-query';
import NavBar from '../components/Navegation/NavBar';
import getClinics from '../services/getClinics';
import { colors } from '../common/styles/theme';
import ClinicCard from '../components/Cards/ClinicCard';
import PageLoader from '../components/Utils/PageLoader';
import RenderIf from '../components/Utils/RenderIf';

const ClinicsPage: FC = () => {
  const { isLoading, isError, error, data } = useQuery('clinics', getClinics);

  if (isError) return <h1>{JSON.stringify(error)}</h1>;

  console.log(data);

  return (
    <Box width="100%" sx={{ background: colors.lightGrey }}>
      <NavBar title="Clinicas" />
      <RenderIf condition={!isLoading} fallback={<PageLoader />}>
        <Grid container spacing={{ xs: 0, md: '1rem' }} justifyContent="center" margin="0 auto" paddingY="0.5rem">
          {data &&
            data.map((el) => (
              <Grid margin="0.5rem 0" item key={el.name}>
                <ClinicCard name={el.name} address={el.address} />
              </Grid>
            ))}
        </Grid>
      </RenderIf>
    </Box>
  );
};

export default ClinicsPage;
