import { AppBar, Divider, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useContext } from 'react';
import { INavBarProps } from '../../common/interfaces/NavBar.interface';
import { AsidebarContext } from '../../Context/AsideBarContext';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar: FC<INavBarProps> = ({ title, children }) => {
  const { handleOpenAsideMenu } = useContext(AsidebarContext);

  return (
    <Box>
      <AppBar position="relative">
        <Toolbar sx={{ padding: '0 1rem' }}>
          <Box
            component="button"
            onClick={handleOpenAsideMenu}
            height="100%"
            marginRight="1rem"
            padding="0"
            display={{ xs: 'flex', md: 'none' }}
            alignItems="center"
            justifyContent="center"
            sx={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
          >
            <MenuIcon htmlColor="#fff" fontSize="large" />
          </Box>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.6rem' } }}>
            {title}
          </Typography>
          {children}
        </Toolbar>
        <Divider />
      </AppBar>
    </Box>
  );
};

export default NavBar;
