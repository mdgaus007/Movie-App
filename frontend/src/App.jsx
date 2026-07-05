import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './css/App.css'
import MovieCard from './components/MovieCard'
import Home from "./Pages/Home"
import { Routes, Route } from "react-router-dom"
import Favorites from './Pages/Favorites'
import NavBar from './components/NavBar'
import { MovieProvider } from './contexts/MovieContext'

function App() {

  return (
    <MovieProvider>
      <NavBar></NavBar>
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
