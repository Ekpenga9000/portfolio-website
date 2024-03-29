import { useState, useLayoutEffect, useRef } from 'react'; 
import "./Header.scss"; 
import gsap from "gsap";

const Header = () => {
    const comp = useRef(null); 
    const nav = useRef(null);
    const [navMenu, setNavMenu] = useState(false); 


    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(nav.current, {
                duration: 1, 
                y:100,
                ease:"power1.in"
            })
        }, comp);
        
        return () => ctx.revert();
    }, [])

    const handleToggle = () => {
        setNavMenu(!navMenu);
    }

  return (
      <header className='header'>
          <nav className='nav container' ref={comp}>
              <a href="index.html" className="nav__logo">oe.</a>

              <div className="nav__menu">
                  <ul className="nav__list grid">
                      <li className="nav__item">
                          <a href="#home" className="nav__link">
                              <i className="uil uil-estate nav__icon"></i>
                              Home
                          </a>
                      </li>
                      <li className="nav__item">
                          <a href="#about" className="nav__link">
                              <i className="uil uil-user nav__icon"></i>
                              About
                          </a>
                      </li>
                      <li className="nav__item">
                          <a href="#skills" className="nav__link">
                              <i className="uil uil-file-alt nav__icon"></i>
                              Skills
                          </a>
                      </li>
                      <li className="nav__item">
                          <a href="#projects" className="nav__link">
                              <i className="uil uil-scenery nav__icon"></i>
                              Projects
                          </a>
                      </li>
                      {/* <li className="nav__item">
                          <a href="#services" className="nav__link">
                              <i className="uil uil-briefcase-alt nav__icon"></i>
                              Services
                          </a>
                      </li> */}
                      <li className="nav__item">
                          <a href="#contact" className="nav__link">
                              <i className="uil uil-message nav__icon"></i>
                              Contact
                          </a>
                      </li>
                  </ul>
              </div>

              {navMenu && <div className="nav__menu--mobile" ref={nav}>
                  <ul className="nav__list grid">
                      <li className="nav__item">
                          <a href="#home" className="nav__link">
                              <i className="uil uil-estate nav__icon"></i>
                              Home
                          </a>
                      </li>
                      <li className="nav__item">
                          <a href="#about" className="nav__link">
                              <i className="uil uil-user nav__icon"></i>
                              About
                          </a>
                      </li>
                      <li className="nav__item">
                          <a href="#skills" className="nav__link">
                              <i className="uil uil-file-alt nav__icon"></i>
                              Skills
                          </a>
                      </li>
                      <li className="nav__item">
                          <a href="#projects" className="nav__link">
                              <i className="uil uil-scenery nav__icon"></i>
                              Projects
                          </a>
                      </li>
                      {/* <li className="nav__item">
                          <a href="#services" className="nav__link">
                              <i className="uil uil-briefcase-alt nav__icon"></i>
                              Services
                          </a>
                      </li> */}
                      <li className="nav__item">
                          <a href="#contact" className="nav__link">
                              <i className="uil uil-message nav__icon"></i>
                              Contact
                          </a>
                      </li>
                  </ul>

                  <i className='uil uil-times nav__close' onClick={handleToggle}></i>
              </div> }

              <div className="nav__toggle" onClick={handleToggle}>
                  <i className='uil uil-apps'></i>
              </div>
          </nav>
    </header>
  )
}

export default Header