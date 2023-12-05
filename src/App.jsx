import './App.scss';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import NavBar from './components/navbar/NavBar';
import Project from './components/projects/Project';
import kubi from "./assets/images/kubi-screenshot.png";
import haadu from "./assets/images/haadu.png";

function App() {
  return (
    <section className='app'>
      <div className='app__container'>
        <div className='app__nav'>
          <NavBar />
        </div>
        <div className="app__section">
          <Hero />
        </div>
        <div className="app__section">
          <About />
        </div>
        <h2 className='app__project'>My Projects</h2>
        <div className="app__section">
          <Project title={"Qlique-Qlick: Social media application"}
            text={" Embark on a refreshing social journey with my capstone creation, Qlique-Qlick! Tired of algorithmic chaos and mindless scrolling? Qlique-Qlick is your digital sanctuary, offering a customer-centric, distraction-free haven. This minimalist social media app is tailored for genuine connections, stripping away the noise to let your unique voice shine. Navigate effortlessly through a seamless, intuitive interface, and reclaim the joy of sharing with those who matter most. Join the Qlique-Qlick movement — because your social experience should reflect you, not an algorithm. 🚀✨"}
            frontend={"https://github.com/Ekpenga9000/qlick-qlique-client/"}
            backend={"https://github.com/Ekpenga9000/qlick-qlique-api"}
            video={true}
          />
        </div>
        <div className="app__section">
          <Project title={"Kubi: Your Playground for Project Management!"}
            text={"Kubi, inspired by Jira, invites you to a space where creativity reigns and collaboration knows no boundaries. No titles, no red tape—just a canvas for turning your boldest ideas into reality. With Kubi, projects become celebrations, tasks transform into adventures, and every click feels like a victory. Unleash the fun, break free from the ordinary, and let Kubi be your accomplice on the journey to project management bliss!"}
            frontend={"https://github.com/Ekpenga9000/kubi-client"}
            backend={"https://github.com/Ekpenga9000/kubi-api"}
            isReverse={true}
            link={"https://kubi-software.netlify.app/login"}
            src={kubi}
            alt={"Login page for kubi software"}
          />
        </div>
        <div className="app__section">
          <Project title={"Haadu: An Agro based e-commerce website!"}
            text={"Welcome to Haadu, your digital gateway to the farm-fresh universe! 🌾 Say goodbye to middlemen and hello to direct connections with our amazing farmers. It's not just shopping; it's a celebration of flavors and a festival of colors, bringing the farm to your doorstep. Join us for a green-thumb handshake and let the agro-fiesta begin at Haadu – where freshness meets fun! 🚜🍓"}
            repo={"https://github.com/Ekpenga9000/haadu"}
            isReverse={false}
            src={haadu}
            alt={"Haadu marketplace"}
            set2={true}
          />
        </div>
        <div className='app__section'>
         <Footer/>
        </div>
      </div>
    </section>
  )
}

export default App
