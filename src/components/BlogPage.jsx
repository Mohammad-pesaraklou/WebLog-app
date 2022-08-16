import { useQuery } from '@apollo/client';
import { Avatar, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GET_BLOG_DET } from '../Graphql/queries';
import Loader from './Loader';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BlogPage = () => {

    const { slug } = useParams();
    const navigate = useNavigate()
    const{loading,data,error} = useQuery(GET_BLOG_DET,{
        variables:{slug}
    })

    if(loading) return <Loader />

    if(error) return <h5>an Error...</h5>
  
    // console.log(data);


    return (
        <Container>
            <Grid container>
                <Grid item xs={12} textAlign="left" mt={4}>
                    <ArrowBackIcon sx={{fontSize:"40px",cursor: "pointer",textDecoration: "none", color: "#bbb190"}} onClick={() => navigate(-1)}/>
                </Grid>
                <Grid item xs={12} mt={8} textAlign="center">
                    <Typography component="h2" variant='h2' fontWeight={700} sx={{color: "#EEBC1D"}}>
                        {data.post.title}
                    </Typography>
                </Grid>
                <Grid item xs={12} mt={6}>
                    <img src={data.post.coverPhoto.url} style={{width: "100%"}}/>
                </Grid>
                <Grid xs={12} mt={6} item sx={{display: 'flex',alignItems: 'center'}}>
                    <Avatar src={data.post.author.avatar.url} sx={{width:100,height: 100}}/>
                    <div >
                    <Typography variant="h5" color="gold"  ml={3}>
                    {data.post.author.name}
                    </Typography>
                    <Typography variant="h5" color="#bbb190"   ml={3}>
                    {data.post.author.field}
                    </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} mt={6}>
                    <Typography variant='p' color="white" fontSize={20}>
                        <div dangerouslySetInnerHTML={{__html: data.post.content.html}}>

                        </div>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default BlogPage;