import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { AppBar } from '@mui/material';

const TransparentNavBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: theme.palette.text.primary
}))

const NavLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    fontSize: theme.typography.h6.fontSize,
    margin: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.primary.dark
    }
}));


export { NavLink, TransparentNavBar }