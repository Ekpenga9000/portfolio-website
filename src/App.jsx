import './App.scss'
import Hero from './components/hero/Hero'
import NavBar from './components/navbar/NavBar'

function App() {
  return (
    <section className='app'>
      <div className='app__nav'>
        <NavBar/>
      </div>
      <div>
        <Hero/>
      </div>
    </section>
  )
}

export default App
