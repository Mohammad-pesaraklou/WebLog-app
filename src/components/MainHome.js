import React from 'react';
import { motion } from "framer-motion"
import Banner from './Banner';
import HomePage from './HomePage';
const MainHome = () => {
    return (
        <motion.div
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
        >
            <Banner />
            <HomePage />
        </motion.div>
    );
};

export default MainHome;