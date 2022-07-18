import { Button, Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';

interface IModalWindowProps {
  onAccept: () => void;
}

const ModalWindow: FC<IModalWindowProps> = ({ onAccept }) => {
  return (
    <Box
      height="100vh"
      width="100%"
      position="absolute"
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex={9999}
      sx={{ background: '#0005' }}
    >
      <Card sx={{ width: { xs: '80%', md: '25%' }, padding: '1rem' }}>
        <CardContent>
          <Typography fontSize="1.5rem" marginBottom="0.5rem">
            Bienvenido a mi app de obra social
          </Typography>
          <Typography>
            Si deseas probar esta demo sin necesidad de crear una cuenta, puedes utilizar el siguiente usuario y
            contraseña. Asi y todo, te recomiendo crear tu cuenta para una mejor experiencia con la app{' '}
          </Typography>
          <br />
          <Typography>
            Usuario: <span style={{ fontWeight: '600' }}>jhondoe</span>
          </Typography>
          <Typography>
            Contraseña: <span style={{ fontWeight: '600' }}>password</span>
          </Typography>
          <Button fullWidth variant="contained" sx={{ mt: 3 }} onClick={onAccept}>
            Aceptar
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ModalWindow;
