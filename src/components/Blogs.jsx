import React, { useState,useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Get_BLOGS_INFO } from '../Graphql/queries';
import { Grid } from '@mui/material';
import CardEl from './CardEl';
import Loader from './Loader';

function Blogs() {

    const {loading,data,error} = useQuery(Get_BLOGS_INFO)
  
    if(loading) return <Loader />
    if(error) return <h5>an Error...</h5>


    return (
        <Grid container spacing={2}>
           {
            data.posts.map(post => (
                <Grid item xs={12} sm={6} md={4} key={post.id}>
                    <CardEl {...post}/>
                </Grid>
            ))
           }
        </Grid>
    );
}

export default Blogs;