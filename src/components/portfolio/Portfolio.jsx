import { useRef } from "react"
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id: 1,
        title: "3D Vector Design",
        img: "https://i.pinimg.com/564x/3c/ea/39/3cea393d768f7658e68558604f156326.jpg",
        desc: "majCool NFT Avatars for Metaverse designed by MQoS UI/UX for MultiQoS. Connect with them on Dribbble; the global community for designers and creative professionals.inbuu"
    },
    {
        id: 2,
        title: "3D Vector Design",
        img: "https://i.pinimg.com/564x/d5/b7/fb/d5b7fbe2f74c90b51ebd7c68901f2cc5.jpg",
        desc: "Beru3D Graphic Design Tools designed by M Wildan Cahya Syarief for Orizon: UI/UX Design Agency. Connect with them on Dribbble; the global community for designers and creative professionalsang"
    },
    {
        id: 3,
        title: "3D Vector Design",
        img: "https://i.pinimg.com/564x/89/cb/cf/89cbcffb4dca27178e92a2d23bb1f7a5.jpg",
        desc: "Free Saint George Stencil Font is a clean and experimental font, based on a widely available Georgia. The intention was to modify an existing typeface and create something new. Because it is an experimental project, it is available only in lowercase chara…"
    }
]

const Single = ({item}) =>{
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target:ref, 
        // offset: ["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0,1], [-100, 100])
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>  
                </div>
            </div>
        </section>
    )
}

const Portfolio = () =>{
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target:ref, 
        offset:["end end", "start start"],
    });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });
    return(
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{scaleX}} className="progressBar">
                </motion.div>
            </div>
            {items.map(item=>(
                <Single item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default Portfolio