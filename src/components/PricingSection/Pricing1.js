import React, { useState } from 'react'
import { Box, Container, Typography, Card, CardHeader, CardContent, CardActions, Button, Switch, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import {priceConfig} from './PricingConfig'
import { borderColor, styled } from '@mui/system';
import {default as BackgroundGraphic} from '../../resources/graphics/red1.svg'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckIcon from '@mui/icons-material/Check';

const PriceOption = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-track': {
        backgroundColor: theme.palette.secondary.main
    },
    '& .MuiSwitch-thumb': {
        color: theme.palette.secondary.main
    }
}))

const PlanStandout = styled('div')(({ theme }) => ({
    position: 'absolute',
    right: 0,
    top: 0,
    fontSize: '1.2rem',
    textAlign:'center',
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: '100%',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText
}))

function Pricing1(props) {
    const [priceOption, setPriceOption] = useState('monthly')

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
            <Container maxWidth="lg" component="main" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Box>
                    <Typography variant="subtitle1" component="span">{priceConfig.option.monthly.label}</Typography>
                    &nbsp; <PriceOption name="checkbox" color="secondary" checked={priceOption !== 'monthly'} onChange={togglePriceOption} /> &nbsp;
                    <Typography variant="subtitle1" component="span">{priceConfig.option.annually.label}</Typography>
                </Box>
                <Box display='flex' justifyContent='center' flexWrap='wrap' alignItems='center'>
                    {priceConfig.plans.map((plan) => (
                        // Enterprise card is full width at sm breakpoint
                        <Card raised sx={{position: 'relative', mx: 2, my: 1, px: 2, py: 1, minHeight: '350px', borderRadius: 4, color: (plan.highlighted ? 'primary.contrastText' : 'text.primary'), backgroundColor: (plan.highlighted ? 'primary.dark' : 'background.paper')}} >
                            {
                                plan.subHeader && 
                                    <PlanStandout >
                                        {plan.subHeader}
                                    </PlanStandout>
                            }
                            {/*<CardHeader
                                title={plan.title}
                                titleTypographyProps={{ align: 'center', variant: 'h4', color: 'inherit' }}
                                
                                sx={{
                                    minHeight: '70px'
                                }}
                            />*/}
                            <CardContent>  
                                <Typography variant='h4' align='center' color='inherit' sx={{mt: 2, mb: 2, p: 1}} >
                                    {plan.title}
                                </Typography>                          
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'baseline',
                                        mb: 2,
                                        color: (plan.highlighted ? 'primary.contrastText' : 'text.primary'),
                                    }}
                                >
                                    <Typography variant="h2">
                                        ${plan.price[priceOption]}
                                    </Typography>
                                    <Typography variant="h5">
                                        {priceConfig.option[priceOption].suffix}
                                    </Typography>
                                </Box>
                                
                                    <List dense={true}>
                                        {plan.description.map((line) => (
                                            <ListItem sx={{px: 0}}>
                                                <ListItemIcon>
                                                    <CheckIcon sx={{color: 'primary.light'}}/>
                                                </ListItemIcon>
                                                <ListItemText primary={line} primaryTypographyProps={{variant: 'h5'}}  />
                                            </ListItem>
                                        ))}
                                    </List>
                                
                            </CardContent>
                            <CardActions>
                                <Button fullWidth size='large' variant='contained' sx={{fontSize: '1.2rem', color: 'primary.contrastText',  backgroundColor: 'primary.light'}}>
                                    {plan.buttonText}
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