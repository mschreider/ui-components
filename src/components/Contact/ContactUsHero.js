import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Box';
import { Typography } from '@mui/material';
import SupportIcon from '@mui/icons-material/Support';

function ContactUsHero() {
    return (
        <Container component='section' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 } }>
            <Button sx={{ border: '4px solid', borderColor: 'text.primary', p:2 }} >
                <Typography variant="h2" component="span">
                    Got any questions? Need help?
                </Typography>
            </Button>
            <Typography variant="subtitle1" sx={{ my: 3 }}>
                We are here to help. Get in touch!
            </Typography>
            <SupportIcon fontSize='large'/>
        </Container>
    )
}   

export default ContactUsHero