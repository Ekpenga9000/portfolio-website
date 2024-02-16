import './App.scss';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import NavBar from './components/navbar/NavBar';
import Project from './components/projects/Project';
import kubi from "./assets/images/kubi-screenshot.png";
import haadu from "./assets/images/haadu.png";
import poster from "./assets/images/alt-logo.png";
import video from "./assets/video/qlique-qlick.mp4";
import { pdfjs } from 'react-pdf';
import PdfComponent from "./components/pdf/PdfComponent";
import { useState, useRef, useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap";
import ProgressBar from './components/progressBar/ProgressBar';
import Header from './components/header/Header';
import Home from './components/home/Home';
gsap.registerPlugin(ScrollTrigger);

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function App() {
  const [isResume, setIsResume] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const [isContact, setIsContact] = useState(false); 
  const cursorFollower = useRef(null);
  const projectHeader = useRef(null);
  const comp = useRef(null); 
  const handleResume = () => {
    setIsResume(!isResume);
  }

  const handleMenuToggle = () => {
    setIsDropdown(!isDropdown);
    setIsContact(false);
  };

  const handleContactToggle = () => {
    setIsContact(!isContact);
    setIsDropdown(false);
  }

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
      <main>
        <Home/>
      </main>
    </>
  )
}

export default App
