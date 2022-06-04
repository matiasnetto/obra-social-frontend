import { FC } from 'react';
import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

const PageLoader: FC = () => {
  return (
    <Box width="100%" height="70vh" display="flex" alignItems="center" justifyContent="center">
      <CircularProgress size={100} />
    </Box>
  );
};

export default PageLoader;
