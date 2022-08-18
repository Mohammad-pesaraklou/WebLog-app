import { Grid, Typography ,Box} from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Author from '../Authors/Author';
//components
import Blogs from '../Blogs/Blogs';

function HomePage() {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} padding={1}>
                <Grid item xs={12} mt={3}>
                <Typography mt={2} variant='h1' sx={{fontWeight: '500', marginBottom: '20px', fontFamily: 'Montserrat',color: "#ebc90a",textAlign: 'center'}}>
                    Web Land
                </Typography>
                </Grid>
            <Grid item xs={12}>
            <Typography variant='h4' color="textPrimary"  mb={3} fontWeight="500" mt={6} sx={{transform: 'translateY(-15px)',color:"#bbb190"}}>
                Authors
            </Typography>
            <Author />
            </Grid>
            <Grid item xs={12} md={12}  mt={8}>
                <Typography variant='h4' color="textPrimary" mb={3} fontWeight="700" sx={{color: "#bbb190"}}>
                    Blogs
                </Typography>
                    <Blogs />
            </Grid>
            </Grid>
        </Container>
    );
}

export default HomePage;