import { Grid, Typography ,Box} from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Author from './Author';
//components
import Blogs from './Blogs';

function HomePage() {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} padding={1}>
            <Grid item xs={12} md={3} mt={6}>
            <Typography variant='h4' color="textPrimary"  mb={3} fontWeight="500" sx={{transform: 'translateY(-15px)'}}>
                Authors
            </Typography>
            <Author />
            </Grid>
            <Grid item xs={12} md={9}  mt={4}>
                <Typography variant='h4' color="textPrimary" mb={3} fontWeight="700">
                    Blogs
                </Typography>
                    <Blogs />
            </Grid>
            </Grid>
        </Container>
    );
}

export default HomePage;