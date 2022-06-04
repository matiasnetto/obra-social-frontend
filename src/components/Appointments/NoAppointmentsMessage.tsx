import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { FC } from 'react';

const NoAppointmentsMessage: FC = () => {
  return (
    <Box margin="2rem 0" display="flex" flexDirection="column" alignItems="center">
      <Typography textAlign="center" fontSize="1.3rem">
        No hay ningun turno
      </Typography>
      <Link to="/add-appointment" style={{ textDecoration: 'none' }}>
        <Button variant="contained" sx={{ marginTop: '.5rem' }}>
          Sacar un turno
        </Button>
      </Link>
    </Box>
  );
};

export default NoAppointmentsMessage;
