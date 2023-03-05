import React from 'react'
import IconButton from '@mui/material/IconButton';
import { ThemeContext } from './ThemeController';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import LightModeIcon from '@mui/icons-material/LightMode';

function ThemeToggle(props) {

    const themeState = React.useContext(ThemeContext);

    const toggleTheme = () => {
        if (themeState.mode === 'dark') {
          themeState.setTheme('light')
    
        }
        else {
          themeState.setTheme('dark')
    
        }
    }

    return (
        <IconButton {...props} sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
            {themeState.mode === 'dark' ? <Brightness3Icon /> : <LightModeIcon />}
        </IconButton>
    )
}

export default ThemeToggle