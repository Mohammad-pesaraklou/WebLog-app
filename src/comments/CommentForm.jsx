import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useMutation } from '@apollo/client';
import { SEND_COMMENT_INF } from '../Graphql/mutetion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CommentForm = ({slug}) => {

    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
  
 

    const [sendComment,{loading,data,error}] = useMutation(SEND_COMMENT_INF,{
        variables: { name, email, text, slug },
    });
    
    
    if(data){
        toast.success("Your comment send successfully please wait for the confirm",{
            position: 'top-center'
        })
    }

    


    return (
        <Grid container sx={{
            boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
            borderRadius: 4,
            py:1,
            mt: 5 ,
            background: "#ecececed"
        }}>
            <Grid item xs={12}>
                <Typography variant="h5" color="textPrimary" fontWeight={700}
                sx={{
                    ml:3,
                    mt:3
                }}>
                    Send Comment
                </Typography>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex',justifyContent: 'center',alignItems: "center"}}>
          {/* <input onChange={(e) => setName(e.target.value)}/> */}
          <TextField  
                label={<Typography variant="p" component="p"
                onChange={(e) => setName(e.target.value)}
                >
                    User Name
                </Typography>}
                color='secondary'
                sx={{width: "800px",mt: 8}}
                />
            </Grid>
            <Grid item xs={12} sx={{display: 'flex',justifyContent: 'center',alignItems: "center"}}>
                <TextField   
                label={<Typography variant="p" component="p"
                onChange={(e) => setEmail(e.target.value)}
                >
                    Email
                </Typography>}
                color='secondary'
                sx={{width: "800px",mt: 5}}
                />
            </Grid>
            <Grid item xs={12} sx={{display: 'flex',justifyContent: 'center',alignItems: "center"}}>
                <TextField  
                label={<Typography variant="p" component="p"
                onChange={(e) => setText(e.target.value)}
                >
                    Comment Text
                </Typography>}
                 multiline
                 rows={5}
                color='secondary'
                sx={{width: "800px",mt: 5,mb: 8}}
                />
            </Grid>
            <Grid item xs={12} sx={{ml:7,mb: 4}}>
                {
                    loading ? <Button variant='contained' disabled>Sended...</Button> : <Button variant='contained' onClick={sendComment}>
                    Send
                </Button>
                }
            </Grid>  <Grid item xs={12} sx={{ml:7,mb: 4}}>
            </Grid>
            <ToastContainer />
        </Grid>
    );
};

export default CommentForm;