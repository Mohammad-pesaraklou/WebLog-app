import { Typography } from '@mui/material';
import React from 'react';

function Footer() {
    return (
        <footer style={{textAlign: 'center',padding: '20px 0',background: 'rgb(193, 198, 202)',marginTop: '50px',
        boxShadow: "0px -11px 33px 0px rgba(184,170,170,0.75)"
        }}>
            <Typography
            variant='p'
            color="textSecondary"
            fontWeight="600"
            
            >
                &copy;
                This WebLog Project Created in 2022
            </Typography>
        </footer>
    );
}


export default Footer;