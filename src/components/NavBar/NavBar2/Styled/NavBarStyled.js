import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

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


export { NavLink }