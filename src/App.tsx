import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignUp } from './pages/SignUp'

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
