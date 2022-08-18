import { useQuery } from '@apollo/client';
import { Avatar, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { GET_COMMENTS } from '../Graphql/queries';

const Comments = ({slug}) => {

    const{loading,data,error} = useQuery(GET_COMMENTS)


    if(loading) return null

    return (
        <Grid container sx={{
            boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
            borderRadius: 4,
            py:1,
            mt: 5 ,
            background: "#ecececed"
        }}>
            
                  <Grid item xs={12}>
                  <Typography variant="h5" sx={{margin: "10px 15px"}}>
                      Comments
                  </Typography>
              </Grid>
            {  
              data.comments.map(item => (
                  <Grid item xs={12} key={item.id} m={2} p={1} >
                    <Box sx={{display:"flex",alignItems:"center",mb:1}}>
                        <Avatar src={item.name[0]}/>
                    <Typography ml="7px" sx={{textTransform: "capitalize",}} variant="p">
                        {item.name}
                    </Typography>
                    </Box>
                    <Typography ml="7px" sx={{textTransform: "capitalize",}} variant="subtitle2" color="grayText">
                        {item.text}
                    </Typography>
                  </Grid>
            ))
            }
            
        </Grid>
    );
};

export default Comments;