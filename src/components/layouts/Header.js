import React from 'react';
import { AppBar, Container, IconButton, Toolbar, Typography } from '@mui/material'
import '../App.css'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { Link } from 'react-router-dom';
import '../Banner.css';



const Header = () => {
    return ( 
        <AppBar position='sticky' x={{color: "#14161a"}}>
            <Container>              
            <Toolbar >

                <Link to="/">
                <IconButton
              
                >
                    <LocalLibraryIcon   sx={{
                        color: "white",
                        fontSize: 50,
                        margin: 2,
                        color: "gold"
                    }}/>
                </IconButton>
                    </Link>
            <Typography variant='h5'  sx={{fontFamily: 'Montserrat',color: "#EEBC1D"}}>
                Web Land
            </Typography>
            {/* <nav>
                <ul>
                    <Typography sx={{display: 'flex',padding: '0px 40px',margin: "20px",listStyle: 'none',color: '#fefefe'}} variant="p">
                    <li className='list-item'>Blog</li>
                    <li className='list-item'>Authors</li>
                    <li className='list-item'>Contact Us</li>
                    </Typography>
                </ul>
            </nav> */}
            </Toolbar>    
        </Container>
        </AppBar>   
    );
};

export default Header;