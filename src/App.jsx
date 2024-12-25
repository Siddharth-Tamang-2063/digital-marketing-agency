import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Animation from './components/Animation'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Servicesfull from './components/Servicesfull'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  
  return (
    <>
    <div>
    <Nav />
    <Home />
    
    <About />
    <Service />
    
    <Animation />
    <Contact />
    <Footer />
    

    
    </div>

    </>
  )
}

export default App