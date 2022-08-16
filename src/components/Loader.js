import React from 'react';
import { TailSpin } from  'react-loader-spinner'

const Loader = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent:'center',
            width: '100%',
            height: '1000px',
            paddingTop: '20px'
        }}>
        <TailSpin
            height = "100"
            width = "100"
            color = 'gray'
            ariaLabel = 'loading'     
          
        />
        </div>
    );
};

export default Loader;