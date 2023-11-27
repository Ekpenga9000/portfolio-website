import './App.scss'
import About from './components/about/About'
import Hero from './components/hero/Hero'
import NavBar from './components/navbar/NavBar'

function App() {
  return (
    <section className='app'>
      <div className='app__container'>
        <div className='app__nav'>
          <NavBar />
        </div>
        <div>
          <Hero />
        </div>
        <div>
          <About />
        </div>
      </div>
    </section>
  )
}

export default App
