import {
  Button,
  ButtonGroup,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { FC, MouseEvent, MouseEventHandler, useEffect } from 'react';
import { endOfMonth } from 'date-fns';
import { IDateFormProps } from '../../common/interfaces/Pages/NewAppointmentPage.interface';
import { Box } from '@mui/system';
import { useQuery } from 'react-query';
import getAvaibleHours from '../../services/getAvaibleHours';
import RenderIf from '../Utils/RenderIf';
import HoursSelector from './HoursSelector';

const MONTHS = [
  'Enero',
  'Febrero',
  'Marzo ',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre ',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

const today = new Date();

const DateForm: FC<IDateFormProps> = ({ date, setDate, hourSelected, setHour, doctor }) => {
  const queryFunction = () => getAvaibleHours(new Date(date.year, date.month, date.day), doctor);

  const { isLoading, data: avaibleHours, refetch } = useQuery('avaible-hours', queryFunction);

  useEffect(() => {
    refetch();
  }, [date, doctor, refetch]);

  const totalMonthDays = endOfMonth(new Date(date.year, date.month, date.day)).getDate();

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { value, name } = e.target;
    setDate((date) => ({ ...date, [name]: Number(value) }));
  };

  const handleSelectHour = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.textContent);
    setHour(e.currentTarget.textContent);
  };

  return (
    <Box margin="1rem 0">
      <FormControl>
        <InputLabel id="day">Dia</InputLabel>
        <Select
          labelId="day"
          id="day"
          label="Dia"
          placeholder="Dia"
          name="day"
          value={String(date.day)}
          onChange={handleSelectChange}
        >
          {Array(totalMonthDays)
            .fill('a')
            .map((a, i) => (
              <MenuItem value={i + 1} key={i}>
                {i + 1}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <FormControl sx={{ marginLeft: '.8rem' }}>
        <InputLabel id="month">Mes</InputLabel>
        <Select
          labelId="month"
          id="month"
          label="month"
          placeholder="Mes"
          name="month"
          value={String(date.month)}
          onChange={handleSelectChange}
        >
          {MONTHS.map((month, i) => (
            <MenuItem value={i} key={i}>
              {month}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ marginLeft: '.8rem' }}>
        <InputLabel id="year">Año</InputLabel>
        <Select
          labelId="year"
          id="year"
          label="year"
          placeholder="Dia"
          name="year"
          value={String(date.year)}
          onChange={handleSelectChange}
        >
          <MenuItem value={today.getFullYear()}>{today.getFullYear()}</MenuItem>
          <MenuItem value={today.getFullYear() + 1}>{today.getFullYear() + 1}</MenuItem>
        </Select>
      </FormControl>

      {/* Horarios */}
      <RenderIf condition={!isLoading} fallback={<CircularProgress size={40} sx={{ margin: '0 1rem' }} />}>
        <HoursSelector avaibleHours={avaibleHours} hourSelected={hourSelected} handleSelectHour={handleSelectHour} />
      </RenderIf>
    </Box>
  );
};

export default DateForm;
