import { Container, Button, Box, Typography  } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import cityBackground from '../../../resources/images/city.jpg'
import HeroLayout from "./HeroLayout";

function Hero() {

    

    return (
        <HeroLayout
            sxBackground={{
                backgroundImage: `url(${cityBackground})`,
                backgroundColor: '#93a5a6', // Average color of the background image.
                backgroundPosition: 'center',
            }}
        >
            {/* Increase the network loading priority of the background image. */}
            <img
                style={{ display: 'none' }}
                src={cityBackground}
                alt="increase priority"
            />
            <Typography color="inherit" align="center" variant="h2" marked="center">
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
            <Button
                color="secondary"
                variant="contained"
                size="large"
                component="a"
                href="/premium-themes/onepirate/sign-up/"
                sx={{ minWidth: 200 }}
            >
                Register
            </Button>
            <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
                Discover the experience
            </Typography>
        </HeroLayout>
    )
}

export default Hero
