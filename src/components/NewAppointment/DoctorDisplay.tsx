import { Box, Avatar, Typography } from '@mui/material';
import { colors } from '../../common/styles/theme';
import { FC } from 'react';
import { IDoctorAPI } from '../../common/interfaces/API/Doctor.interface';

interface IDoctorDisplayProps {
  docData: IDoctorAPI;
  isSelected: boolean;
  handleSelect?: (docId: string) => void;
  marginTop?: string;
}

const defaultDocImage =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Hz2zc6bs5XSwenctIT5FmgHaG4%26pid%3DApi&f=1';

const DoctorDisplay: FC<IDoctorDisplayProps> = ({ docData, isSelected, handleSelect, marginTop = '0.8rem' }) => {
  return (
    <Box
      key={docData.id}
      display="flex"
      width="fit-content"
      alignItems="center"
      border={isSelected ? `2px solid ${colors.blue}` : `2px solid transparent`}
      borderRadius="4px"
      padding="3px 6px"
      marginTop={marginTop}
      sx={{ cursor: handleSelect ? 'pointer' : 'auto' }}
      onClick={() => (handleSelect ? handleSelect(docData.id) : null)}
    >
      <Avatar src={defaultDocImage} />
      <Typography>{docData.name}</Typography>
    </Box>
  );
};

export default DoctorDisplay;
