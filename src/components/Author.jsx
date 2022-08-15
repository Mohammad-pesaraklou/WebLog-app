import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_AUTHOR_INF } from '../Graphql/queries';
import { Avatar, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Author = () => {

    const {loading,data,error} = useQuery(GET_AUTHOR_INF)

    console.log(data)
    // const {authors} = data;


    if(loading) return <h4>loading</h4>
    if(error) return <h4>error</h4>

    return (
        <Grid container
        spacing={2}
        padding={1} 
        sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",borderRadius: 4}}
        >
            {
                data?.authors.map(item => (
                    <Grid item key={item.id} xs={12}>
                        <Link to={`/authors/${item.slug}`}
                        style={{textDecoration: "none",
                        display: 'flex',
                        gap: 15,
                    }}
                        >
                    <Avatar src={item.avatar.url} sx={{width: '70px', height: "70px"}}/>
                    <Typography variant="p" color="CaptionText" sx={{marginTop: '10px'}}>
                        {item.name}
                    </Typography>
                        </Link>
                    </Grid>
                ))
            }
        </Grid>
    );
};

export default Author;