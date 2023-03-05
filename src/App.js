
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './routes/errorPage';
import NavBar1 from './components/NavBar/Navbar1';
import NavBar2 from './components/NavBar/Navbar2';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Box, Button, CssBaseline } from '@mui/material';
import SiteUtilities from './utilities/SiteUtilities'
import ThemeController from './components/Theme/ThemeController';



function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            errorElement: <ErrorPage />
        }, 
        {
            path: '/nav1',
            element: <NavBar1 />
        },
        {
            path: '/nav2',
            element: <NavBar2 />
        }
    ])

    return (
        <ThemeController >
            <RouterProvider router={router} />
        </ThemeController >
    )
}

export default App
