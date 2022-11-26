import React from 'react'
import Header from './Components/Header'
import './App.css'
import Main from './Components/Main'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
    <div className='main' align="center">
    <Header/>
    <Main/>
    <footer>
      <Footer/>
    </footer>
    </div>
    </>
  )
}

export default App