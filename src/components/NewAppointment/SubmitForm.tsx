import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { useQuery } from 'react-query';
import { IDoctorAPI } from '../../common/interfaces/API/Doctor.interface';
import { ISubmitFormProps } from '../../common/interfaces/Pages/NewAppointmentPage.interface';
import formatDateToSimple from '../../helpers/formatDateToSimple';
import getDoctorByIdService from '../../services/getDoctorByIdService';
import RenderIf from '../Utils/RenderIf';
import DoctorDisplay from './DoctorDisplay';

const SubmitForm: FC<ISubmitFormProps> = ({ dateSelected, docSelected, hourSelected }) => {
  const formattedDate = formatDateToSimple(new Date(dateSelected.year, dateSelected.month, dateSelected.day));
  console.log(docSelected);

  const { data: docData, isLoading } = useQuery('doctor', () => getDoctorByIdService(docSelected as string));
  console.log(docData);

  return (
    <Box margin="1rem 0">
      <Box display="flex" alignItems="center" marginBottom=".8rem">
        <Typography fontSize="1.1rem">Doctor: </Typography>
        <RenderIf condition={!isLoading && docData !== undefined}>
          <DoctorDisplay docData={docData as IDoctorAPI} isSelected={false} marginTop="0" />
        </RenderIf>
      </Box>
      <Typography fontSize="1.1rem" marginBottom="1rem">
        Fecha: {formattedDate.replace('-', '/')}
      </Typography>
      <Typography fontSize="1.1rem">Hora: {hourSelected}</Typography>
    </Box>
  );
};

export default SubmitForm;
