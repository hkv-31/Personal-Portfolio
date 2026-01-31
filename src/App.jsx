import React from 'react';
import Navbar from './components/Navbar';
import Sticker from './components/Sticker';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';
import { stickers } from './data';

function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-paper">
      {/* Stickers Layer */}
      {stickers.map((sticker) => (
        <Sticker
          key={sticker.id}
          top={sticker.top}
          left={sticker.left}
          right={sticker.right}
          bottom={sticker.bottom}
          rotate={sticker.rotate}
          className={`fixed z-50 ${sticker.color} ${sticker.size} opacity-80 hidden md:block`}
        >
          <sticker.icon />
        </Sticker>
      ))}

      <Navbar />

      <main className="max-w-7xl mx-auto">
        <Hero />
        <Projects />
        <About />
        <Gallery />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-10 text-center font-hand text-gray-500 text-lg">
        <p>Made with Love, React & Chaos. © {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
export default App;
