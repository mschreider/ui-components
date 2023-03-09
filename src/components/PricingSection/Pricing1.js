import React from 'react'
import { Box, Container, Typography, Card, CardHeader, CardContent, CardActions, Button  } from '@mui/material'
import StarIcon from '@mui/icons-material/StarBorder';


function Pricing1(props) {
    const tiers = [
        {
          title: 'Free',
          price: '0',
          description: [
            '10 users included',
            '2 GB of storage',
            'Help center access',
            'Email support',
          ],
          buttonText: 'Sign up for free',
          buttonVariant: 'outlined',
        },
        {
          title: 'Pro',
          subheader: 'Most popular',
          price: '15',
          description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support',
          ],
          buttonText: 'Get started',
          buttonVariant: 'contained',
        },
        {
          title: 'Enterprise',
          price: '30',
          description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Phone & email support',
          ],
          buttonText: 'Contact us',
          buttonVariant: 'outlined',
        },
    ];
      

    return (
        <Container >
            {/* Hero unit */}
            <Container maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                Pricing
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p">
                    Quickly build an effective pricing table for your potential customers with
                    this layout. It&apos;s built with default MUI components with little
                    customization.
                </Typography>
            </Container>
            {/* End hero unit */}
            <Container maxWidth="md" component="main">
                <Box display='flex' justifyContent='center' flexWrap='wrap' alignItems='center'>
                    {tiers.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        
                            <Card raised sx={{mx: 2}}>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: 'background.paper'
                                    }}
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'baseline',
                                        mb: 2,
                                        }}
                                    >
                                        <Typography component="h2" variant="h3" color="text.primary">
                                            ${tier.price}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                            /mo
                                        </Typography>
                                    </Box>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                align="center"
                                                key={line}
                                            >
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth variant={tier.buttonVariant}>
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                   
                    ))}
                </Box>
                
                
                
                
            </Container>
        </Container>
    )
}

export default Pricing1