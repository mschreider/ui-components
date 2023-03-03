
import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import '../App.css';
import { Box, Button, CssBaseline } from '@mui/material';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import LightModeIcon from '@mui/icons-material/LightMode';



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
			</ul>
			<ul>
				Hero Content
			</ul>		
		</Box>
	)
	
}

export default Root
