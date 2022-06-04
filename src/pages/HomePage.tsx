import { FC } from 'react';
import { Box } from '@mui/system';
import NavBar from '../components/Navegation/NavBar';
import imageLogo from '../common/assets/clinic-logo.png';
import { Grid } from '@mui/material';
import LinkCard from '../components/Cards/LinkCard';

const HomePage: FC = () => {
  return (
    <Box width="100%" minHeight="100vh">
      <NavBar title="Home" />
      <Box
        width="100%"
        height="90%"
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent={{ xs: 'normal', md: 'center' }}
        alignItems="center"
      >
        <Box component="img" width={{ xs: '60%', md: '30%' }} src={imageLogo} alt="logo" />
        <Grid container columns={2} spacing={2} width={{ xs: '100%', md: '50%' }}>
          <Grid item xs={1}>
            <LinkCard
              title="Pedir turno"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, veniam in"
              url="/add-appointment"
            />
          </Grid>
          <Grid item xs={1}>
            <LinkCard
              title="Mis turnos"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, veniam in"
              url="/appointments"
            />
          </Grid>
          <Grid item xs={1}>
            <LinkCard
              title="Cartilla medica"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, veniam in"
              url="/cartilla"
            />
          </Grid>
          <Grid item xs={1}>
            <LinkCard
              title="Mi credencial"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, veniam in"
              url="/credential"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
