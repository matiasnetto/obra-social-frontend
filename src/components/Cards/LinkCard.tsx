import { FilterNone } from '@mui/icons-material';
import { Avatar, Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ILinkCardProps } from '../../common/interfaces/LinkCard.interface';

const LinkCard: FC<ILinkCardProps> = ({ title, description, url }) => {
  return (
    <Link to={url} style={{ textDecoration: 'none' }}>
      <Card>
        <CardContent>
          <Box display="flex" alignItems="center" sx={{ background: '#fff' }}>
            <Avatar sx={{ bgcolor: '#5dba47', marginRight: { xs: '0.5rem', md: '1rem' } }}>
              <FilterNone htmlColor="#fff" fontSize="small" />
            </Avatar>

            <Typography variant="h4" fontSize={{ xs: '1rem', md: '1.2rem' }}>
              {title}
            </Typography>
          </Box>
          <Typography fontSize={{ xs: '0.8rem', md: '0.9rem' }} marginTop="0.5rem">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default LinkCard;
