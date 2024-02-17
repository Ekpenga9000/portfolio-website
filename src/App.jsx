import './App.scss';
import { pdfjs } from 'react-pdf';
import { useState, useRef, useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap";
// import ProgressBar from './components/progressBar/ProgressBar';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
gsap.registerPlugin(ScrollTrigger);

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function App() {
  const cursorFollower = useRef(null);
  const projectHeader = useRef(null);
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

    let ctx = gsap.context(() => {
      gsap.from(projectHeader.current, {
        duration: 1, 
        x: -300, 
        opacity: 0.2, 
        scrollTrigger: projectHeader.current,
        ease:"power2.out"
      })
    }, comp); 

    return () => ctx.revert(); 

  }, []);

  return (
    <>
      <Header />
      <Home />
      <About/>
      <div ref={cursorFollower} className='app__cursor-follower'></div>
    </>
  )
}

export default App
