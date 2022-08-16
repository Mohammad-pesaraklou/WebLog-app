import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_AUTHOR_INF } from '../Graphql/queries';
import { Avatar, Divider, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import { Container } from '@mui/system';


const Author = () => {

    const {loading,data,error} = useQuery(GET_AUTHOR_INF)


    const shorten = (title) => {
        const splitedName = title.split(" ")
        const newName = `${splitedName[0]}`
        return newName
    }



    if(loading) return <Loader />
    if(error) return <h4>error</h4>

    return (
        <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>            
        {
                data?.authors.map(item => (
                    <Grid container sx={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                    <Grid item key={item.id} xs={12} sm={4} sx={{textAlign: 'center'}}>
                        <Avatar src={item.avatar.url} sx={{width: '150px', height: "150px"}}/>
                        <Link to={`/authors/${item.slug}`}
                        style={{textDecoration: "none",
                        display: 'flex',
                        gap: 15,
                        textAlign: 'center'
                    }}
                        >
                    <Typography variant="h5" color="CaptionText" sx={{marginTop: '23px',textAlign: 'center',color: '#fefefe'}}>
                        {shorten(item.name)}
                    </Typography>

                        </Link>
                    </Grid>
                    </Grid>
                ))
            }
     
    </div>
    );
};

export default Author;