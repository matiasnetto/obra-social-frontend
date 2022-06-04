import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import { PhotoCamera, Visibility, VisibilityOff } from '@mui/icons-material';
import { ChangeEvent, FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps {
  name: string;
  surname: string;
  email: string;
  username: string;
}

const defaultImage =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Hz2zc6bs5XSwenctIT5FmgHaG4%26pid%3DApi&f=1';

const Form: FC<IProps> = ({ name, surname, email, username }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [newPassword, setNewPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword((value) => !value);
  };

  const handleNewPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Submit');
    alert('Funcinalidad aun no implementada');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <Box
      height="100%"
      component="form"
      marginTop="1rem"
      position="relative"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      onSubmit={handleSubmit}
    >
      <Box>
        <Typography>Informacion de tu perfil</Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between" marginTop={{ xs: '1rem', md: '2rem' }}>
          <Box display="flex" alignItems="center">
            <Box width="fit-content" position="relative">
              <Box
                component="img"
                width={{ xs: '5rem', md: '8rem' }}
                height={{ xs: '5rem', md: '8rem' }}
                src={defaultImage}
                borderRadius="100%"
                alt=""
              />
              <Box component="label" htmlFor="contained-button-file" position="absolute" zIndex={999} top="0" right="0">
                <Input id="contained-button-file" type="file" hidden={true} sx={{ display: 'none' }} />
                <Button
                  component="span"
                  sx={{ minWidth: '0', padding: '6px', borderRadius: '100%' }}
                  variant="contained"
                >
                  <PhotoCamera fontSize="small" />
                </Button>
              </Box>
            </Box>
            <Box marginLeft="1rem">
              <Typography fontSize={{ xs: '1.1rem', md: '1.3rem' }}>
                {name} {surname}
              </Typography>
              <Typography color="#666">@{username}</Typography>
            </Box>
          </Box>

          {/* Buttons on Desktop device */}
          <Box width="50%" display={{ xs: 'none', md: 'flex' }} justifyContent="end">
            <Button variant="outlined" color="primary" onClick={handleCancel}>
              Cancelar
            </Button>
            <Button variant="contained" color="primary" sx={{ marginLeft: '1rem' }} onClick={handleSubmit}>
              Guardar
            </Button>
          </Box>
        </Box>

        {/* Nombre y apellido */}
        <Box display="flex" flexDirection="column">
          <Box
            width="100%"
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            marginTop={{ xs: '1rem', md: '2rem' }}
          >
            <TextField label="Nombre" defaultValue={name} fullWidth sx={{ marginBottom: { xs: '1rem', md: '0' } }} />
            <TextField
              label="Apellido"
              defaultValue={surname}
              fullWidth
              sx={{ marginLeft: { xs: '0', md: '3rem' }, marginBottom: { xs: '1rem', md: '0' } }}
            />
          </Box>

          <Box
            width="100%"
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            marginTop={{ xs: '0rem', md: '2rem' }}
          >
            {/* Email */}
            <FormControl sx={{ marginBottom: { xs: '1rem', md: '0' } }} fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput label="E-Mail" defaultValue={email} />
            </FormControl>

            {/* Password */}
            <FormControl
              fullWidth
              sx={{
                marginBottom: { xs: '1rem', md: '0' },
                marginLeft: { xs: '0', md: '3rem' },
              }}
            >
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                label="Nueva contraseña"
                type={showPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={handleNewPasswordChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
        </Box>
      </Box>

      {/* Buttons on Mobile device */}
      <Box width="100%" display={{ xs: 'flex', md: 'none' }} justifyContent="space-around" marginBottom="0">
        <Button variant="outlined" color="primary" onClick={handleCancel}>
          Cancelar
        </Button>
        <Button variant="contained" color="primary" sx={{ marginLeft: '1rem' }} onClick={handleSubmit}>
          Guardar
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
