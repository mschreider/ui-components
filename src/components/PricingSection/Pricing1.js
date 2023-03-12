import React, { useState } from 'react'
import { Box, Container, Typography, Card, CardHeader, CardContent, CardActions, Button, Switch } from '@mui/material'
import StarIcon from '@mui/icons-material/StarBorder';
import {priceConfig} from './PricingConfig'
import { borderColor, styled } from '@mui/system';
import { ReactComponent as BackgroundGraphic } from '../../resources/graphics/red1.svg'

const PriceOption = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase': {
        color: theme.palette.secondary.main
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: theme.palette.secondary.main
    },
    '& .MuiSwitch-track': {
        backgroundColor: theme.palette.background.default
    },
  }))

const GraphicContainer = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
});

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
            setPriceOption('yearly')
        }
        else {
            setPriceOption('monthly')
        }
    }

    return (
        <Box component='section' >
            <GraphicContainer sx={{zIndex: -2}}>
                <BackgroundGraphic />

            </GraphicContainer>
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
                    &nbsp; <PriceOption name="checkbox" color="primary" checked={priceOption === 'monthly'} onChange={togglePriceOption} /> &nbsp;
                    <Typography variant="subtitle1" component="span">{priceConfig.option.annually.label}</Typography>
                </Box>
                <Box display='flex' justifyContent='center' flexWrap='wrap' alignItems='center'>
                    {priceConfig.plans.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        
                            <Card raised sx={{mx: 2, my: 1}}>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subHeader}
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
                                            ${tier.priceMonthly}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                            {priceConfig.option[priceOption].suffix}
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
        </Box>
    )
}

export default Pricing1