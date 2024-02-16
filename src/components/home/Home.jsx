import React from 'react'; 
import "./Home.scss";
import louis from "../../assets/images/Louis.jpg";

const Home = () => {
  return (
      <main className='main' id='home'>
          <section className='main__container container'>
              <div className='main__socials'>
                  <a href="mailto:ekpenga9000@gmail.com" className='main__link'>
                    <i className="uil uil-envelope"></i>   
                  </a>
                  <a href="https://www.linkedin.com/in/omogbareekpenga/" className='main__link'>
                    <i className="uil uil-linkedin-alt"></i>    
                  </a>
                  <a href="https://github.com/Ekpenga9000" className='main__link'>
                    <i className="uil uil-github-alt"></i>
                  </a>
              </div>
              <div className='main__img-div'>
                  <img src={ louis } alt="Picture of Louis smiling" className='main__img'/>
              </div>
              <div className='main__content'>
                  <h1 className='main__h1'>Omogbare Ekpenga 👋🏾</h1>
                  <h3 className='main__h3'>Software Developer</h3>
                  <p className='main__p'>I'm an enthusiastic Full-stack developer based in Alberta📍, I'm passionate and dedicated to my work.</p>
                  <a href="#contact" className='main__contact'>Say Hello
                  <i className="uil uil-message main__send"></i>
                  </a>
              </div>
              <div className="main__scroll-div">
                  <i className='bx bx-mouse bx-fade-down main__scroll-icon'></i> 
                  <p>Scroll down</p>  
                  <i className='bx bx-chevrons-down bx-fade-down main__scroll-icon' ></i>
              </div>
          </section>
    </main>
  )
}

export default Home;