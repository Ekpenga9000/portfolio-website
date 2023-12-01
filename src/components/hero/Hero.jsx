import "./Hero.scss";
import { useRef, useLayoutEffect } from "react";
import {gsap} from "gsap"; 

const Hero = () => {
    const titleItem = useRef(); 
    const textItem = useRef(); 
    const rocketItem = useRef();
    const comp = useRef();

    useLayoutEffect(()=>{
        let ctx = gsap.context(()=>{
            
            gsap.to(titleItem.current, { y:-20, opacity:1, duration:3, ease:"power2.inOut"});
            gsap.to(textItem.current, { y:-20, opacity:1, duration:4, ease:"power2.inOut"});
            gsap.to(rocketItem.current, { y:-20, opacity:1, duration:5, ease:"power2.inOut"});
        }, comp); 

        return () => ctx.revert();
    }, [])

    return (
        <section ref={comp} className="hero">
            <h2 ref={titleItem}className="hero__title">Hey there 👋🏽, fellow human, code voyager!</h2>
            <p ref={textItem} className="hero__text">This <span className="hero__name">Omogbare</span>, your friendly neighborhood full-stack wizard and code enthusiast 👨🏾‍💻✨ reaching from my TechCoven in 📍Alberta.</p>
            <span ref={rocketItem} className="hero__icon">🚀</span>
        </section>
    )
}

export default Hero; 