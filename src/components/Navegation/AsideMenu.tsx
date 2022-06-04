import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material';
import { FC, useContext } from 'react';
import AsideLinkItem from './AsideLinkItem';
import {
  Home,
  CalendarMonth,
  Assignment,
  Group,
  Apartment,
  Person,
  Badge,
  PowerSettingsNew,
} from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { AsidebarContext } from '../../Context/AsideBarContext';

const firstTabs = [
  { name: 'Home', url: '/', icon: <Home /> },
  { name: 'Calendario', url: '/calendar', icon: <CalendarMonth /> },
  { name: 'Mis turnos', url: '/appointments', icon: <Assignment /> },
  { name: 'Cartilla medica', url: '/cartilla', icon: <Group /> },
  { name: 'Clinicas', url: '/clinics', icon: <Apartment /> },
];

const secondTabs = [
  { name: 'Mi cuenta', url: '/user', icon: <Person /> },
  { name: 'Credencial Virtual', url: '/credential', icon: <Badge /> },
  { name: 'Cerrar sesion', url: '/logout', icon: <PowerSettingsNew /> },
];

const AsideMenuContent: FC = () => {
  const { handleCloseAsideMenu } = useContext(AsidebarContext);

  return (
    <Box height="100%" sx={{ background: '#fff' }}>
      <Toolbar />
      <Divider />
      <List>
        {firstTabs.map((el) => (
          <AsideLinkItem
            name={el.name}
            url={el.url}
            Icon={el.icon}
            key={el.name}
            handleLinkClick={handleCloseAsideMenu}
          />
        ))}
        <Divider />
        <Typography align="center" sx={{ color: '#666', fontSize: '0.8rem', marginTop: '0.5rem' }}>
          Mi panel
        </Typography>
        {secondTabs.map((el) => (
          <AsideLinkItem
            name={el.name}
            url={el.url}
            Icon={el.icon}
            key={el.name}
            handleLinkClick={handleCloseAsideMenu}
          />
        ))}
      </List>
    </Box>
  );
};

const AsideMenu: FC = () => {
  const { isAsideMenuOpen, handleCloseAsideMenu } = useContext(AsidebarContext);
  const location = useLocation();

  if (location.pathname.includes('/login') || location.pathname.includes('/register')) return <div></div>;

  return (
    <>
      <Drawer
        anchor="left"
        open={isAsideMenuOpen}
        onClose={handleCloseAsideMenu}
        variant="temporary"
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <AsideMenuContent />
      </Drawer>

      <Box sx={{ display: { xs: 'none', md: 'block' }, width: '18vw' }}>
        <AsideMenuContent />
      </Box>
    </>
  );
};

export default AsideMenu;
