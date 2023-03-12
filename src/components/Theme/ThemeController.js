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

    let theme = createTheme({
        palette: {
            ...themeState.mode,
            ...(themeState.mode === 'light'
            ? {
                    // palette values for light mode
                    background: {
                        default: '#fafafa',
                        paper: '#fff'
                    }
                }
            : {
                // palette values for dark mode
                background: {
                  default: '#303030',
                  paper: '#424242',
                }
            }),
        } 
    })

    //theme = responsiveFontSizes(theme)

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