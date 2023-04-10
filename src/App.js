
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './routes/errorPage';
import NavBar1 from './components/NavBar/NavBar1/NavBar1';
import NavBar2 from './components/NavBar/NavBar2/NavBar2';
import NavBar3 from './components/NavBar/NavBar3/NavBar3';
import ThemeController from './components/Theme/ThemeController';
import Hero from './components/HeroSection/Hero1/Hero';
import Sample1 from './pages/Sample1';
import FullPageJsSample from './pages/FullPageJs';

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
        },
        {
            path: '/nav3',
            element: <NavBar3 />
        },
        {
            path: '/hero1',
            element: <Hero />
        },
        {
            path: '/sample1',
            element: <Sample1 />
        },
        {
            path: '/fullpagesample',
            element: <FullPageJsSample />
        }
    ])

    return (
        <ThemeController >
            <RouterProvider router={router} />
        </ThemeController >
    )
}

export default App
