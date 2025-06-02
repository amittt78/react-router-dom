import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import Pro from './components/Pro'
import Github from './components/Github'

function App() {
  

  return (
    <>
      <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/contact"  element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/pro/:id" element={<Pro/>}/>
        <Route path="/github" element={<Github/>}/>
      </Routes>
      <Footer/>
      </Router>
    </>
  )
}

export default App
