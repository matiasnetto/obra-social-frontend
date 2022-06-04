import { FC, FormEvent, useContext, useState } from 'react';
import {
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { AuthContext } from '../Context/AuthContext';
import { Link as LinkRouter } from 'react-router-dom';

const LoginPage: FC = () => {
  const { logIn } = useContext(AuthContext);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {
      email: (formData.get('email') as string) || '',
      password: (formData.get('password') as string) || '',
    };

    const logInRes = await logIn(data.email, data.password);

    if (!logInRes.ok) setError(logInRes.error);
  };

  return (
    <Container component="main" maxWidth="xs">
      {error && <Alert severity="error">Usuario o contraseña invalidos</Alert>}
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Inicia sesion
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Nombre de usuario"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Recordar usuario" />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Iniciar sesion
          </Button>
          <Grid container>
            <Grid item>
              <LinkRouter to="/register">
                <Link component="p" href="/register" variant="body2">
                  {'No tienes cuenta? Registrate'}
                </Link>
              </LinkRouter>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
