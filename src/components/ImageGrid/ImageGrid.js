import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import ButtonDrawBorder from '../Buttons/ButtonDrawBorder'
import { images } from './ImageGridConfig';
import { Link } from 'react-router-dom';


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
                    <Link to={image.to}>
                        <ButtonDrawBorder text={image.title} />
                    </Link>
                </Box>
            </CategoryWrapper>
            ))}
        </Box>
    </Container>
  );
}

export default CategoriesImageGrid