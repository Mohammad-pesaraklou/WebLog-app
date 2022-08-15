import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Get_BLOGS_INFO } from '../Graphql/queries';
import { Grid } from '@mui/material';
import CardEl from './CardEl';

function Blogs() {

    const {loading,data,error} = useQuery(Get_BLOGS_INFO)

    
    if(loading) return <h5>Loading...</h5>
    if(error) return <h5>an Error...</h5>

    return (
        <Grid container spacing={2}>
           {
            data.posts.map(post => (
              console.log(post),
                <Grid item xs={12} sm={6} md={4} key={post.id}>
                    <CardEl {...post}/>
                </Grid>
            ))
           }
        </Grid>
    );
}

export default Blogs;