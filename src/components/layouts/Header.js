import React from 'react';
import { AppBar, Container, IconButton, Toolbar, Typography } from '@mui/material'
import '../App.css'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';




const Header = () => {
    return ( 
        <AppBar position='sticky' color='primary' >
            <Container>              
            <Toolbar >
                <IconButton
              
                >
                    <LocalLibraryIcon   sx={{
                    color: "white",
                    fontSize: 50,
                    margin: 2
                }}/>
                </IconButton>
            <Typography variant='h5'  sx={{fontFamily: 'Montserrat'}}>
                Web Land
            </Typography>
            </Toolbar>    
        </Container>
        </AppBar>   
    );
};

export default Header;