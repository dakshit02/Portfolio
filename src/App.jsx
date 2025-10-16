import { useState } from 'react'
import './App.css'
import StarBackground from './components/StarBackground'
import About from './components/About/About'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'



function App() {


  return (
    <>
      <div className='flex flex-col  '>
        <section id='navbar'>
          <Navbar />
        </section>
        <section id='about'>
          <About />
        </section>
        <section id='skills'>
          <Skills />
        </section>
        <section id='experience'>
          <Experience />
        </section>
        <section id='projects'>
          <Projects />
        </section>

      </div>

      <StarBackground />
    </>
  )
}

export default App
