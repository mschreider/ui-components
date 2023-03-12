import React, { useState } from 'react'
import { Box, Container, Typography, Card, CardHeader, CardContent, CardActions, Button, Switch, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import StarIcon from '@mui/icons-material/StarBorder';
import {priceConfig} from './PricingConfig'
import { borderColor, styled } from '@mui/system';
import {default as BackgroundGraphic} from '../../resources/graphics/red1.svg'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const PriceOption = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-track': {
        backgroundColor: theme.palette.secondary.main
    },
    '& .MuiSwitch-thumb': {
        color: theme.palette.secondary.main
    }
}))


function Pricing1(props) {
    const [priceOption, setPriceOption] = useState('monthly')

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
      
    const togglePriceOption = () => {
        if (priceOption === 'monthly') {
            setPriceOption('annually')
        }
        else {
            setPriceOption('monthly')
        }
    }

    return (
        <Box component='section' >
        
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
            <Container maxWidth="md" component="main" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Box>
                    <Typography variant="subtitle1" component="span">{priceConfig.option.monthly.label}</Typography>
                    &nbsp; <PriceOption name="checkbox" color="secondary" checked={priceOption === 'monthly'} onChange={togglePriceOption} /> &nbsp;
                    <Typography variant="subtitle1" component="span">{priceConfig.option.annually.label}</Typography>
                </Box>
                <Box display='flex' justifyContent='center' flexWrap='wrap' alignItems='center'>
                    {priceConfig.plans.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        
                            <Card raised sx={{mx: 2, my: 1, px: 2, py: 1, minHeight: '350px'}}>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subHeader}
                                    titleTypographyProps={{ align: 'center', variant: 'h5' }}
                                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                        variant: 'h6'
                                    }}
                                    sx={{
                                        backgroundColor: 'background.paper',
                                        minHeight: '70px'
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
                                        <Typography variant="h2" color="text.primary">
                                            ${tier.priceMonthly}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                            {priceConfig.option[priceOption].suffix}
                                        </Typography>
                                    </Box>
                                    
                                        <List dense={true}>
                                            {tier.description.map((line) => (
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <CheckCircleIcon sx={{color: 'secondary.main'}}/>
                                                    </ListItemIcon>
                                                    <ListItemText primary={line}  />
                                                </ListItem>
                                            ))}
                                        </List>
                                    
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
        </Box>
    )
}

export default Pricing1