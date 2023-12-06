import "./Hero.scss";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Animation from "../animation/Animation";


const Hero = ({handleResume, isResume}) => {
  const titleItem = useRef();
  const textItem = useRef();
    const eggItem = useRef();
    const infoItem = useRef();
  const comp = useRef();

  const handleClick = () => {
      handleResume();
    }  
    
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
          gsap.to(titleItem.current, {
            y: -20,
            opacity: 1,
            duration: 3,
            ease: "power2.inOut",
          });
          gsap.to(textItem.current, {
            y: -20,
            opacity: 1,
            duration: 4,
            ease: "power2.inOut",
          });
          gsap.to(eggItem.current, {
            y: -20,
            opacity: 1,
            duration: 5,
            ease: "power2.inOut",
          });
            gsap.to(infoItem.current, {
                y: -20,
                opacity: 1,
                duration: 6,
                ease: "power2.inOut",
            });
        }, comp);
    
        return () => ctx.revert();
      }, []);
    
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
        gsap.to(infoItem.current, {
            y: -20,
            opacity: 1,
            duration: 2,
            ease: "power2.inOut",
        });
    }, comp);

    return () => ctx.revert();
  }, [isResume]);

  return (
    <section ref={comp} className="hero">
      <h2 ref={titleItem} className="hero__title">
        Hey there 👋🏽, fellow human, code voyager!
      </h2>
      <p ref={textItem} className="hero__text">
        This <span className="hero__name">Omogbare</span>, your friendly
        neighborhood full-stack wizard and code enthusiast 👨🏾‍💻✨ reaching from my
        TechCoven in 📍Alberta.
      </p>
        <span ref={eggItem} className="hero__icon" onClick={handleClick}>
      <Animation>
            🥚
          </Animation>
              </span>
          {!isResume &&
           <p ref={infoItem} className="hero__info">Click to on the egg to see my Resume</p>   
          }
          
          {isResume &&
           <p ref={infoItem} className="hero__info">Click to on the egg to stop seeing my Resume</p>   
             }
    </section>
  );
};

export default Hero;
