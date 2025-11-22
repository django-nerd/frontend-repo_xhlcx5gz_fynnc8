import React from 'react'
import CustomCursor from './components/CustomCursor'
import Background from './components/Background'
import Landing from './components/Landing'
import Hero from './components/Hero'
import Sections from './components/Sections'

function App() {
  return (
    <div className="relative min-h-screen text-white">
      <Background />
      <CustomCursor />

      {/* Cinematic landing with 3D glass text */}
      <Landing />

      {/* Hero */}
      <Hero />

      {/* Sections */}
      <Sections />

      {/* Footer */}
      <footer className="mt-24 py-10 text-center text-white/60">
        © {new Date().getFullYear()} Idris — Crafted with smooth motion and glass.
      </footer>
    </div>
  )
}

export default App
