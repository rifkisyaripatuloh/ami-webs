import "./services.scss"
import { motion, useInView } from "framer-motion"

const variants = {
    initial:{
        x: -500,
        y: 100,
        opacity:0
    },
    animate:{
        x: 0,
        y: 0,
        opacity:1,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {
    return(
        <motion.div className="services" variants={variants} 
        initial="initial" 
        //animate="animate"
        whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <p>I focus on learning to improve my skills 
                    <br />in the field of design
                    </p>
                    <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{color:"orange"}}>For My</motion.b> Hobby</h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                    <h2>Branding</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                    <h2>Branding</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                    <h2>Branding</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                    <h2>Branding</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services;