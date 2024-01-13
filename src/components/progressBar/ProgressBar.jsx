import { useRef, useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const ProgressBar = () => {
    const progressBar = useRef(null);
    useLayoutEffect(() => {
        const tl = gsap.timeline(); 

    tl.to(progressBar.current, {
      width: "100%",
        duration: 2, 
      ease:"power1.out",
      scrollTrigger: {
        trigger: document.body, 
          scrub: true, 
          start: "top 0%",
        bottom:"bottom 100%"
      }
    });
    }, [])
  return (
    <div className='app__progress' ref={progressBar}></div>
  )
}

export default ProgressBar