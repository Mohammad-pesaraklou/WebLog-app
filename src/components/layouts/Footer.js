import { Typography } from '@mui/material';
import React from 'react';

function Footer() {
    return (
        <footer style={{textAlign: 'center',padding: '20px 0',background: 'transparent',marginTop: '50px',
        boxShadow: "0px -11px 33px 0px rgb(8,7,7)"
        }}>
            <Typography
            variant='p'
            color="textSecondary"
            fontWeight="600"
            sx={{color: "#bbb190"}}
            >
                &copy;
                This WebLog Project Created in 2022
            </Typography>
        </footer>
    );
}


export default Footer;