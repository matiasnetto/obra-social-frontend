import { Box } from '@mui/material';
import { FC } from 'react';
import NavBar from '../components/Navegation/NavBar';
import { colors } from '../common/styles/theme';

const CredentialPage: FC = () => {
  return (
    <Box width="100%" sx={{ background: colors.lightGrey }}>
      <NavBar title="Credencial virtual" />
    </Box>
  );
};

export default CredentialPage;
