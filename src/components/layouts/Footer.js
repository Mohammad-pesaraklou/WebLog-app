import { Typography } from '@mui/material';
import React from 'react';

function Footer() {
    return (
        <footer style={{textAlign: 'center',padding: '60px 0'}}>
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