import React,{useState}from 'react';
import { useQuery } from '@apollo/client';
import { GET_AUTHOR_DET } from '../Graphql/queries';
import { useParams } from 'react-router-dom';
import { Avatar, Button, Card, CardContent, CardHeader, CardMedia, Container,Divider,Grid, Typography } from '@mui/material';




const AuthorPage = () => {
    
    const {slug} = useParams()
    const {loading,data,error} = useQuery(GET_AUTHOR_DET,{
        variables:{slug}
    })
 




  
    console.log(data);
    const { author } = data;
    return (
        <Container maxWidth="lg">
            <Grid container>
                <Grid item xs={12} mt={8} display="flex" flexDirection="column" alignItems="center">
                    <Avatar src={author.avatar.url} sx={{
                       width: "250px",
                       height: "250px" 
                    }}/>
                    <Typography variant='h4' mt={3}>
                        {author.name}
                    </Typography>
                    <Typography variant='h5' mt={1}>
                        {author.field}
                    </Typography>
                    <Grid item xs={12} mt={6}>
                    <Typography variant="p" sx={{fontSize: '18px'}}>
                        {author.description.text}
                    </Typography>
                    </Grid>
                    <Grid item mt={10}>
                        <Typography variant="h6" fontWeight="700">
                            Other Blogs from {author.name}
                        </Typography>
                    </Grid>
                    <Grid container>
                        {
                            author.posts.map(item => (
                                <Grid item xs={12} sm={6} md={4} key={item.id} mt={3}>
                                    <Card sx={{margin:2,borderRadius:4}} >
                                        <CardHeader
                                        avatar={<Avatar src={author.avatar.url}/>}
                                        title={<Typography >
                                            {author.name}
                                        </Typography>}
                                        />
                                        <CardMedia 
                                            component="img"
                                            image={item.coverPhoto.url}
                                            height= '198'
                                            alt='image'
                                        />
                                        <CardContent>
                                            <Typography fontWeight="600" sx={{textAlign: "center"}}>
                                            {item.title}
                                            </Typography>
                                        </CardContent>
                                        <Divider variant='middle'/>
                                        <Button
                                        sx={{margin: '10px',borderRadius: 3,width: 'calc(100% - 20px)',display: 'flex',alignItems: 'center'}}
                                        variant="contained"
                                        color="primary"
                                        >
                                            Read The Blog
                                        </Button>
                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
              
            </Grid>
        </Container>
    );
};

export default AuthorPage;