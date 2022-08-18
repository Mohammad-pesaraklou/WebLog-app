import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography , CardActions, Divider, Button} from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';
const CardEl = ({coverPhoto, title,name,slug, avatar,author}) => {
    

    return (
        <Card sx={{boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}>
            <CardHeader 
            avatar={<Avatar src={author.avatar.url}/>}
            title={<Typography 
            variant="p" 
            color="GrayText" 
            component="p">
            {author.name}
            </Typography>}
            />
            <CardMedia 
            component="img"
            image={coverPhoto.url}
            height= '198'
            alt='image'
            />
            <CardContent sx={{textAlign: 'center',fontWeight: 600}}>
                {title}
            </CardContent>
            <Divider variant="middle" color="textPrimary" />
            <CardActions sx={{}}>
            <Link to={`/blogs/${slug}`} style={{textDecoration: "none",width: '100%',display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
            <Button
            sx={{margin: '10px',borderRadius: 3,}}
            variant="contained"
            fullWidth
            color="primary"
            >
                Read The Blog
            </Button>
            </Link>
            </CardActions>
        </Card>
    );
};

export default CardEl;