import { ButtonGroup, Button, Box, Grid } from '@mui/material';
import { FC, MouseEvent } from 'react';
import { IHour } from '../../common/interfaces/API/Day.interface';

interface IHoursSelectorProps {
  avaibleHours: IHour[] | undefined;
  hourSelected: string | null;
  handleSelectHour: (e: MouseEvent<HTMLButtonElement>) => void;
}

const HoursSelector: FC<IHoursSelectorProps> = ({ avaibleHours, hourSelected, handleSelectHour }) => {
  return (
    <>
      <Grid rowSpacing="0.5rem" columnSpacing="0.5rem" container marginTop="1rem">
        {avaibleHours?.map((hour) => (
          <Grid item key={hour.hour}>
            <ButtonGroup key={hour.hour}>
              <Button
                disabled={!hour.avaible}
                onClick={handleSelectHour}
                variant={hourSelected === hour.hour ? 'contained' : 'outlined'}
              >
                {hour.hour}
              </Button>
            </ButtonGroup>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HoursSelector;
