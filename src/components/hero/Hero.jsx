import "./hero.scss";
import { motion } from "framer-motion";


const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    },
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

const Hero = () =>{
    return(
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} 
                initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>Ananda Fasya Islami</motion.h2>
                    <motion.h1 variants={textVariants}>Enthusiastic Figma Designer</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button variants={textVariants}> <a href="https://www.youtube.com/watch?v=uWdyS2NwYrw">Online Task Here</a></motion.button>
                        <motion.button variants={textVariants}> <a href="https://wa.me/6281315958391">Contact Me</a></motion.button>
                    </motion.div>
                    <motion.img src="/scroll.png" alt="" variants={textVariants} animate="scrollButton"/>
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" 
            variants={sliderVariants} initial="initial" animate="animate">
                Hanya Desainer Gabut
            </motion.div>
            <div className="imageContainer">
                <img src="/z3.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;
