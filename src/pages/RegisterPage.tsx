import { FC, FormEvent, useContext, useState } from 'react';
import { Alert, Avatar, Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { AuthContext } from '../Context/AuthContext';
import { Link as LinkRouter, useNavigate } from 'react-router-dom';
import validateRegisterForm from '../helpers/validateRegisterForm';

const RegisterPage: FC = () => {
  const { register } = useContext(AuthContext);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {
      username: (formData.get('username') as string) || '',
      name: (formData.get('name') as string) || '',
      surname: (formData.get('surname') as string) || '',
      email: (formData.get('email') as string) || '',
      password: (formData.get('password') as string) || '',
    };

    const { ok, message } = validateRegisterForm({ ...data });

    if (!ok) {
      setError(message);
    } else {
      const req = await register(data.username, data.name, data.surname, data.email, data.password);
      if (req.ok) navigate('/login');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      {error && <Alert severity="error">{error}</Alert>}
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
          Registrarse
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Nombre de usuario"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField margin="normal" required fullWidth id="name" label="Nombre" name="name" autoComplete="name" />
          <TextField
            margin="normal"
            required
            fullWidth
            id="surname"
            label="Apellido"
            name="surname"
            autoComplete="name"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo electronico"
            name="email"
            autoComplete="email"
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
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Registrarse
          </Button>
          <Grid container>
            <Grid item>
              <LinkRouter to="/login">
                <Link href="/login" variant="body2">
                  {'Ya tienes cuenta? Inicia sesion'}
                </Link>
              </LinkRouter>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterPage;
