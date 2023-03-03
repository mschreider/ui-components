import React from 'react'
import SiteUtilities from '../../utilities/SiteUtilities'
import { ThemeProvider, createTheme } from '@mui/material/styles';

/**
 * Setup
 *  Insert the code below onto the 
 */

export const ThemeModeContext = React.createContext({
    mode: '',
    setThemeMode: () => {}
});

function ThemeController({children, ...props}) {
    const [themeState, setThemeState] = React.useState({
        mode: SiteUtilities.getSiteTheme(),
        setThemeMode: (n) => setThemeState({ ...themeState, mode: n })
    });

    let theme = createTheme({
        palette: {
          mode: themeState.mode,
        },
    })

    return (
        <ThemeModeContext.Provider value={themeState} >
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeModeContext.Provider>
    )
}

export default ThemeController