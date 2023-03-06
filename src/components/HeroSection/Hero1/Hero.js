import { Container, Button, Box, Typography  } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import cityBackground from '../../../resources/images/city.jpg'
import HeroLayout from "./HeroLayout";
import NavBar3 from "../../NavBar/NavBar3/NavBar3";

function Hero() {

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <NavBar3 />
            <HeroLayout
                sxBackground={{
                    backgroundImage: `url(${cityBackground})`,
                    backgroundColor: '#93a5a6', // Average color of the background image.
                    backgroundPosition: 'center',
                }}
            >
                {/* Increase the network loading priority of the background image. */}
                <img style={{ display: 'none' }} src={cityBackground} alt="increase priority" />
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
        </div>
        
    )
}

export default Hero
