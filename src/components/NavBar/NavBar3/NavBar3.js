import * as React from 'react'
import './NavBar3.less'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Divider as MuiDivider } from '@mui/material';
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

const NavLogo = styled('img')(({ theme }) => ({
  width: 'auto',
  height: 'auto',
  maxWidth: 65,
  maxHeight: 60,
  marginLeft: 8,
  marginRight: 8,
  [theme.breakpoints.down('sm')]: { // Apply to sm screens
    maxWidth: 55,
    maxHeight: 50,
  },
}))

const NavMenu = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255,255,255,0.45)',

}))

const NavMenuLink = styled(Button)(({ theme }) => ({
  textDecoration: 'none',
  textTransform: 'none',
  color: theme.palette.text.primary,
  padding: theme.spacing(1),
  borderRadius: 0,
  fontSize: theme.typography.h5.fontSize,
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.2)'
  }
}));

const NavMenuButton = styled(Button)(({ theme }) => ({
  textDecoration: 'none',
  textTransform: 'none',
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.text.primary,
  padding: theme.spacing(1),
  borderRadius: 0,
  fontSize: theme.typography.h5.fontSize,
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.2)'
  }
}));

const MobileMenu = styled(IconButton)(({ theme }) => ({
  color: "inherit",
  edge: "start",
  borderRadius: 0,
}))

const Divider = styled(MuiDivider)(({theme}) => ({
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  borderColor: theme.palette.text.secondary
}))


/**
 * @description Transparent NavBar with absolute positioning, top down drawer, mobile responsive
 * @param {*} props 
 * @returns 
 */
function NavBar3(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  // Set to auto for full page width
  const drawerWidth = 'auto';
  const navItems = [
    {
      type: 'link',
      label: 'Home',
      to: '/'
    },
    {
      type: 'link',
      label: 'About',
      to: '/'
    },
    {
      type: 'link',
      label: 'Contact',
      to: '/'
    },
    /*{
      type: 'divider',
    },*/
    {
      type: 'button',
      label: 'Sign Up',
      to: '/'
    }
  ]

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h3" color="text.primary" sx={{ my: 1 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
            item.type === 'divider' ?
            <Divider /> :
              <ListItem key={item} disablePadding>
                <ListItemButton disableRipple sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item.label} primaryTypographyProps={{variant: 'h5'}} />
                </ListItemButton>
              </ListItem>
        ))}
      </List>
    </Box>
  );

  const renderNavMenuItems = (
    navItems.map((item) => {
      if (item.type === 'divider') {
        return <Divider orientation='vertical' variant="middle" flexItem /> 
      }
      else if (item.type === 'link') {
        return (
          <NavMenuLink key={item} component='a' href={item.to} >
            {item.label}
          </NavMenuLink>
        )
      }
      else if (item.type === 'button') {
        return (
          <NavMenuButton key={item} component='a' href={item.to} >
            {item.label}
          </NavMenuButton>
        )
      }
    })
  )
    
  return (
      <Box>
          <TransparentNavBar component='nav' position='absolute' elevation={0}>
              <Toolbar sx={{justifyContent: 'space-between'}}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                  <NavLogo src={logo} alt="logo" />
                  <Typography
                      variant="h4"
                      component="div"
                      color='text.primary'
                  >
                      MUI
                  </Typography>
                </div>
                
                <NavMenu sx={{display: { xs: 'none', sm: 'flex' } }}>
                  {renderNavMenuItems}
                </NavMenu>
                <MobileMenu
                  onClick={handleDrawerToggle}
                  sx={{ display: { xs: 'block', sm: 'none' } }}
                >
                  <MenuIcon />
                </MobileMenu>
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
