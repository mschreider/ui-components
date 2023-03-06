
import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom';

import '../App.css';
import { Box, Button, CssBaseline } from '@mui/material';
import ThemeToggle from '../components/Theme/ThemeToggle'



function Root(props) {
	return (

		<Box className="App">
			<ul>
				Nav Bar
				<li>
					<Link to='/nav1'>
						NavBar 1
					</Link>
					
				</li>
				<li>
					<Link to='/nav2'>
						NavBar 2
					</Link>
					
				</li>
				<li>
					<Link to='/nav3'>
						NavBar 3
					</Link>
					
				</li>
			</ul>
			<ul>
				Hero Content
				<li>
					<Link to='/hero1'>
						Hero 1
					</Link>
					
				</li>
			</ul>	
			<ThemeToggle />
	
		</Box>
	)
	
}

export default Root
