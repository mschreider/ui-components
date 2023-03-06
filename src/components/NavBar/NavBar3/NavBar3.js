import * as React from 'react';
import './NavBar3.less'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import logo from '../../../resources/images/logo.jpg'
import { Link } from 'react-router-dom';

const TransparentNavBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
}))

const NavLogo = styled('img')({
  maxWidth: 65,
  marginLeft: 8,
  marginRight: 8
})

const NavMenu = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255,255,255,0.35)',
  display: { xs: 'none', sm: 'block' }, 

}))

const NavLink = styled(Button)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  padding: theme.spacing(1),
  borderRadius: 0,
  fontSize: theme.typography.h6.fontSize,
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.2)'
  }
}));


/**
 * @description Transparent NavBar with absolute positioning, top down drawer, mobile responsive
 * @param {*} props 
 * @returns 
 */
function NavBar3(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  // Set to auto for full page width
  const drawerWidth = 'auto';
  const navItems = ['Home', 'About', 'Contact'];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" color="primary" sx={{ my: 1 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton disableRipple sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

    
    return (
        <Box>
            <TransparentNavBar component='nav' elevation={0}>
                <Toolbar sx={{justifyContent: 'space-between'}}>
                  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                    <NavLogo src={logo} alt="logo" />
                    <Typography
                        variant="h6"
                        component="div"
                        color='text.primary'
                    >
                        MUI
                    </Typography>
                  </div>
                  
                  <NavMenu >
                    {navItems.map((item) => (
                      <NavLink key={item} component='a' >
                        {item}
                      </NavLink>
                  ))}
                  </NavMenu>
                  <IconButton
                    color="inherit"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ display: { xs: 'block', sm: 'none' } }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Toolbar>
            </TransparentNavBar>
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    anchor='top'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            
        
        </Box>
    );
}


export default NavBar3;
