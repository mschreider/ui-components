import React from 'react'
import IconButton from '@mui/material/IconButton';
import { ThemeModeContext } from '../../App';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import LightModeIcon from '@mui/icons-material/LightMode';

function ThemeToggle() {

    const themeState = React.useContext(ThemeModeContext);

    const toggleTheme = () => {
        if (themeState.mode === 'dark') {
          themeState.setThemeMode('light')
    
        }
        else {
          themeState.setThemeMode('dark')
    
        }
    }

    return (
        <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
            {themeState.mode === 'dark' ? <Brightness3Icon /> : <LightModeIcon />}
        </IconButton>
    )
}

export default ThemeToggle