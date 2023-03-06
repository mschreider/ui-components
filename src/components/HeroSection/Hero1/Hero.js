import { Container, Button, Box, Typography, Toolbar  } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import cityBackground from '../../../resources/images/city.jpg'
import HeroLayout from "./HeroLayout";

function Hero() {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>            
            <HeroLayout
                sxBackground={{
                    backgroundImage: `url(${cityBackground})`,
                    backgroundColor: '#93a5a6', // Average color of the background image.
                    backgroundPosition: 'center',
                }}
            >

                {/* Increase the network loading priority of the background image. */}
                <img style={{ display: 'none' }} src={cityBackground} alt="increase priority" />
                <Toolbar sx={{ backgroundColor: 'transparent'}}/> {/* Adds space below navbar and content. */}
                <Typography color="inherit" align="center" variant="h2">
                    Upgrade your Sundays
                </Typography>
                <Typography
                    color="inherit"
                    align="center"
                    variant="h5"
                    sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
                >
                    Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
                </Typography>
                <Button color="secondary" variant="contained" size="large" component="a" href="/" sx={{ minWidth: 200, px: 5, py: 2 }}>
                    Register
                </Button>
            </HeroLayout>
        </Box>
        
    )
}

export default Hero
