import './App.scss';
import About from './components/about/About';
import Hero from './components/hero/Hero';
import NavBar from './components/navbar/NavBar';
import Project from './components/projects/Project';

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
        <div className="app__section">
          <Project />
        </div>
      </div>
    </section>
  )
}

export default App
