import { Button, CircularProgress, Container, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useContext, useState } from 'react';
import { IDate } from '../common/interfaces/Pages/NewAppointmentPage.interface';
import NavBar from '../components/Navegation/NavBar';
import DateForm from '../components/NewAppointment/DateForm';
import SpecialtyForm from '../components/NewAppointment/SpecialtyForm';
import SubmitForm from '../components/NewAppointment/SubmitForm';
import { AuthContext } from '../Context/AuthContext';
import formatDateToSimple from '../helpers/formatDateToSimple';
import postNewAppointment from '../services/postNewAppointment';
import { colors } from '../common/styles/theme';
import { useNavigate } from 'react-router-dom';

const today = new Date();
const DEFAULT_DATE: IDate = {
  day: today.getDate() + 1,
  month: today.getMonth(),
  year: today.getFullYear(),
};

const NewAppointmentPage: FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [docSelected, setDocSelected] = useState<string | null>(null);
  const [dateSelected, setDateSelected] = useState<IDate>(DEFAULT_DATE);
  const [hourSelected, sethourSelected] = useState<string | null>(null);
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveStep((state) => state + 1);
  };

  const handlePrev = () => {
    setActiveStep((state) => state - 1);
  };

  const handleSubmit = () => {
    handleNext();
    const formattedDate = formatDateToSimple(new Date(dateSelected.year, dateSelected.month, dateSelected.day));
    postNewAppointment(formattedDate, hourSelected, docSelected, userData.token)
      .then(() => {
        navigate('/appointments');
      })
      .catch((e) => {
        console.log(e);
        alert('Error en la peticion, intente nuevamente');
        navigate('/');
      });
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <SpecialtyForm docSelected={docSelected} setDocSelected={setDocSelected} />;

      case 1:
        return (
          <DateForm
            date={dateSelected}
            setDate={setDateSelected}
            doctor={docSelected || ''}
            hourSelected={hourSelected}
            setHour={sethourSelected}
          />
        );

      default:
        return <SubmitForm docSelected={docSelected} dateSelected={dateSelected} hourSelected={hourSelected} />;
    }
  };

  const getNextButton = (step: number) => {
    let buttonProps = {};
    let buttonText: string | JSX.Element = 'Siguiente';
    if (step === 0) {
      buttonProps = { disabled: docSelected === null ? true : false, onClick: handleNext };
      buttonText = 'Siguiente';
    }

    if (step === 1) {
      buttonProps = { disabled: hourSelected === null ? true : false, onClick: handleNext };
      buttonText = 'Siguiente';
    }

    if (step === 2) {
      buttonProps = { disabled: false, onClick: handleSubmit };
      buttonText = 'Guardar';
    }

    if (step === 3) {
      buttonProps = { disabled: false };
      buttonText = <CircularProgress size={20} sx={{ color: '#fff' }} />;
    }

    console.log('render!');

    return (
      <Button variant="contained" {...buttonProps}>
        {buttonText}
      </Button>
    );
  };

  return (
    <Box width="100%" sx={{ background: colors.lightGrey }}>
      <NavBar title="Sacar turno" />
      <Container sx={{ marginTop: '3rem' }}>
        <Paper sx={{ padding: { xs: '1rem', md: '2rem' } }}>
          <Typography variant="h2" fontSize={{ xs: '2rem', md: '3rem' }} textAlign="center">
            Sacar turno
          </Typography>
          <Stepper
            activeStep={activeStep}
            sx={{ width: { xs: '100%', md: '50%' }, margin: '0 auto', marginTop: '1rem' }}
          >
            <Step completed={activeStep >= 1 ? true : false}>
              <StepLabel>
                <Box component="span" fontSize={{ xs: '0.8rem', md: '1rem' }}>
                  Medico y especialidad
                </Box>
              </StepLabel>
            </Step>
            <Step completed={activeStep >= 2 ? true : false}>
              <StepLabel>
                <Box component="span" fontSize={{ xs: '0.8rem', md: '1rem' }}>
                  Dia y fecha
                </Box>
              </StepLabel>
            </Step>
            <Step completed={activeStep >= 3 ? true : false}>
              <StepLabel>
                <Box component="span" fontSize={{ xs: '0.8rem', md: '1rem' }}>
                  Finalizar
                </Box>
              </StepLabel>
            </Step>
          </Stepper>
          {getStepContent(activeStep)}
          <Box display="flex" justifyContent="space-between">
            <Button
              variant="contained"
              disabled={activeStep === 0 || activeStep === 3 ? true : false}
              onClick={handlePrev}
            >
              Atras
            </Button>
            {getNextButton(activeStep)}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default NewAppointmentPage;
