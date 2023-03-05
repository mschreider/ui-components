import React from 'react'
import { ThemeProvider, createTheme, useTheme, responsiveFontSizes } from '@mui/material/styles';
import {CssBaseline} from '@mui/material'
import { appTheme } from './config';

export const ThemeContext = React.createContext({
    mode: '',
    setTheme: () => {}
});

function ThemeController({ children }) {
    const [themeState, setThemeState] = React.useState({
        mode: useTheme().palette.mode,
        setTheme: (n) => setThemeState({ ...themeState, mode: n })
    });

    let theme = createTheme(appTheme, {
        palette: {
          mode: themeState.mode,
        },
    })

    theme = responsiveFontSizes(theme)

    return (
        <ThemeContext.Provider value={themeState} >
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeController