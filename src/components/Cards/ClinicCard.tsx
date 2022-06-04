import { FC } from 'react';
import { Avatar, Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface IProps {
  name: string;
  address: string;
  description?: string;
  image?: string;
}

const defaultImage =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.uhlbd.com%2Fbackend%2Fweb%2Fuploads%2F1451280834DSC_0157.jpg&f=1&nofb=1';

const ClinicCard: FC<IProps> = ({
  name,
  address,
  description = 'lorem ipsum dolor amend boliviano sivina escudero binomo',
  image = defaultImage,
}) => {
  return (
    <Card sx={{ width: { xs: '90%', md: 365 }, margin: { xs: '0 auto', md: '0 0' } }}>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="center" height="10rem">
          <Avatar sx={{ height: '8rem', width: '8rem' }} src={image} />
        </Box>
        <Box>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="subtitle1" fontSize="0.9rem" color="#666">
            {address}
          </Typography>
          <Typography>{description}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Link to="/add-appointment">
          <Button>Sacar turno</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ClinicCard;
