import { CircularProgress, FormLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useEffect, useState, Dispatch, SetStateAction } from 'react';
import { useQuery } from 'react-query';
import getDoctorsBySpecialtyService from '../../services/getDoctorsBySpecialtyService';
import RenderIf from '../Utils/RenderIf';
import DoctorDisplay from './DoctorDisplay';
interface IProps {
  docSelected: string | null;
  setDocSelected: Dispatch<SetStateAction<string | null>>;
}

const SpecialtyForm: FC<IProps> = ({ setDocSelected, docSelected }) => {
  const [specialty, setSpecialty] = useState<string>('neurologo');
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery('specialtyDoctor', () => getDoctorsBySpecialtyService(specialty));

  useEffect(() => {
    refetch();
  }, [specialty, refetch]);

  const handleSpecialtyChange = (e: SelectChangeEvent<string>) => {
    setSpecialty(e.target.value);
  };

  const handleSelect = (docId: string) => {
    if (docSelected === docId) return setDocSelected(null);
    else return setDocSelected(docId);
  };

  return (
    <div>
      <Box display="flex" alignItems="center" marginTop="1rem">
        <FormLabel htmlFor="specialty" sx={{ marginRight: '1rem' }}>
          Especialidad:
        </FormLabel>
        <Select value={specialty} onChange={handleSpecialtyChange} id="specialty" size="small">
          <MenuItem value="neurologo">Neurologia</MenuItem>
          <MenuItem value="cardiologia">Cardiologia</MenuItem>
          <MenuItem value="traumatology">Traumatologia</MenuItem>
        </Select>
      </Box>
      <Box margin="1rem 0">
        <RenderIf condition={!isLoading} fallback={<CircularProgress size={40} sx={{ marginLeft: '.5rem' }} />}>
          {doctors?.map((doc) => (
            <DoctorDisplay docData={doc} isSelected={docSelected === doc.id} handleSelect={handleSelect} key={doc.id} />
          ))}
        </RenderIf>
      </Box>
    </div>
  );
};

export default SpecialtyForm;
