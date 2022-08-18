import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_AUTHOR_INF } from '../Graphql/queries';
import { Avatar, Divider, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Loader from '../shared/Loader';
import { motion } from "framer-motion"
import { Container } from '@mui/system';
import AliceCarousel from "react-alice-carousel";

import '../components/Banner.css'

const Author = () => {

    const {loading,data,error} = useQuery(GET_AUTHOR_INF)


    const shorten = (title) => {
        const splitedName = title.split(" ")
        const newName = `${splitedName[0]}`
        return newName
    }



    if(loading) return <Loader />
    if(error) return <h4>error</h4>

    const responsive = {
        0: {
          items: 2,
        },
        512: {
          items: 4,
        },
      };
      


    const items = data?.authors.map(item => (
        <Link className='carouselItem' to={`/authors/${item.slug}`}>
    <Avatar src={item.avatar.url} sx={{width: '150px', height: "150px"}}/>
         <Typography variant="h5" color="CaptionText" sx={{marginTop: '23px',textAlign: 'center',color: '#fefefe'}}>
          {shorten(item.name)}
          </Typography>
  
    </Link>
    
    ))

    return (
        <motion.div className='carousel'
        animate={{opacity: 2}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
        >
            <AliceCarousel 
             mouseTracking
             infinite
             autoPlayInterval={1000}
             animationDuration={1500}
             disableDotsControls
             disableButtonsControls
             responsive={responsive}
             items={items}
             autoPlay
            />
        </motion.div>
    );
};

export default Author;