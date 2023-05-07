import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <hr></hr>
      <Home />
      <Footer />
    </div>
  )
}

export default App
