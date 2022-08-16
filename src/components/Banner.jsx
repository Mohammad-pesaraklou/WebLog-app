import React from 'react';
import styled from '@emotion/styled';
import './Banner.css';
import { Container, Grid, Typography } from '@mui/material';

const StyledContainer = styled(Container)`
/* height: 400px; */
display: flex;
flex-direction: column;
padding-top: 50px;
justify-content: space-around;
`
const Img = styled.img`
width: 100%;
height: 400px;
`


const Banner = () => {


    return (
        <Container maxWidth="lg">
            <Grid container spacing={7}>
            <Grid item xs={12} sm={3}  sx={{display: 'flex',alignItems: 'center', textAlign: 'center' }}>
                <Typography variant="h3" sx={{color: 'darkgray', textTransform: 'capitalize',fontFamily: 'Montserrat'}}>
                    Get all the info regarding Top 10 Movie in The World
                 </Typography>
            </Grid>
            <Grid item xs={12} sm={9} >
             <div className='banner'></div>
            </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;