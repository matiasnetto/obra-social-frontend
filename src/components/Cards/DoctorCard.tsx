import { Avatar, Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  name: string;
  specialty: string;
  description?: string;
  image?: string;
}

const defaultImage =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Hz2zc6bs5XSwenctIT5FmgHaG4%26pid%3DApi&f=1';

const defaultDesc = 'lorem ipsum dolor amend boliviano sivina escudero binomo';

const DoctorCard: FC<IProps> = ({ name, specialty, description = defaultDesc, image = defaultImage }) => {
  return (
    <Card sx={{ width: { xs: '90%', md: 365 }, margin: { xs: '0 auto', md: '0 0' } }}>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="center" height="10rem">
          <Avatar sx={{ height: '8rem', width: '8rem' }} src={image} />
        </Box>
        <Box>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="subtitle1" fontSize="0.9rem" color="#666">
            {specialty}
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

export default DoctorCard;
