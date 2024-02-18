import './App.scss';
import { pdfjs } from 'react-pdf';
import { useRef, useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from "./components/footer/Footer";
gsap.registerPlugin(ScrollTrigger);

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function App() {
  const cursorFollower = useRef(null);
  const triggerDiv = useRef(null);
  const topArrow = useRef(null);
  const comp = useRef(null); 
 
  useLayoutEffect(() => {
    document.addEventListener("mousemove", e => {
      gsap.to(cursorFollower.current, {
        duration: 0.8,
        x: e.clientX,
        y: e.clientY,
        ease: "power2.out"
      });
    });

    const tl = gsap.timeline();
    
    tl.to(topArrow.current, {
      duration:2, 
      display: "block",
      scrollTrigger: {
        trigger: triggerDiv.current, 
        scrub: true,
        start: "top 50%",
        bottom: "bottom 100%"
      }, 
      ease:"power1.out"
    })

  }, []);

  return (
    <>
      <Header />
      <Home />
      <section ref={triggerDiv}>
        <About/>
      </section>
      <div ref={cursorFollower} className='app__cursor-follower'></div>
      <a href="#home" className='app__top-arrow' ref={topArrow}>
        <i className='bx bx-chevrons-up bx-fade-down' ></i>
      </a>
      <Skills />
      <Qualification />
      <Contact />
      <Footer/>
    </>
  )
}

export default App
