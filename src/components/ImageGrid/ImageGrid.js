import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import ButtonDrawBorder from '../Buttons/ButtonDrawBorder'

const ImageBackdrop = styled('div')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: '#000',
    opacity: 0.5,
    transition: theme.transitions.create('opacity', {
        duration: theme.transitions.duration.short
    }),
}));

const CategoryWrapper = styled('div')(({theme}) => ({
    position: 'relative',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('md')]: {
        width: '100% !important',
        height: 100,
    },
    '&:hover': {
        zIndex: 1,
    },
    '&:hover .imageBackdrop': {
        opacity: 0.15,
    },
}))

const BoxBackgroundImage = styled(Box)({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
})

const images = [
    {
        url: 'https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=400',
        title: 'Snorkeling',
        width: '40%',
    },
    {
        url: 'https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400',
        title: 'Massage',
        width: '20%',
    },
    {
        url: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400',
        title: 'Hiking',
        width: '40%',
    },
    {
        url: 'https://images.unsplash.com/photo-1453747063559-36695c8771bd?auto=format&fit=crop&w=400',
        title: 'Tour',
        width: '38%',
    },
    {
        url: 'https://images.unsplash.com/photo-1523309996740-d5315f9cc28b?auto=format&fit=crop&w=400',
        title: 'Gastronomy',
        width: '38%',
    },
    {
        url: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=400',
        title: 'Shopping',
        width: '24%',
    },
    {
        url: 'https://images.unsplash.com/photo-1506941433945-99a2aa4bd50a?auto=format&fit=crop&w=400',
        title: 'Walking',
        width: '40%',
    },
    {
        url: 'https://images.unsplash.com/photo-1533727937480-da3a97967e95?auto=format&fit=crop&w=400',
        title: 'Fitness',
        width: '20%',
    },
    {
        url: 'https://images.unsplash.com/photo-1518136247453-74e7b5265980?auto=format&fit=crop&w=400',
        title: 'Reading',
        width: '40%',
    },
];

function CategoriesImageGrid() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h3" align="center" component="h2" color='text.primary'>
            For all tastes and all desires
        </Typography>
        <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
            {images.map((image) => (
            <CategoryWrapper key={image.title} style={{width: image.width}} >
                <BoxBackgroundImage sx={{backgroundImage: `url(${image.url})`}} />
                <ImageBackdrop className="imageBackdrop" />
                <Box
                sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'common.white',
                }}
                >
                    <ButtonDrawBorder text={image.title} />
                </Box>
            </CategoryWrapper>
            ))}
        </Box>
    </Container>
  );
}

export default CategoriesImageGrid