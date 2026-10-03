import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    return savedTheme === 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light'
    window.localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#242438] transition-colors duration-300 dark:bg-[#141522] dark:text-[#f2f1fa]">
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((current) => !current)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <footer className="border-t border-[#eeedf5] px-5 py-5 text-center text-[10px] text-[#85899a] dark:border-white/10 dark:text-[#a5a6b8]">
        <p>© {new Date().getFullYear()} Hajra Bibi. Designed with care.</p>
      </footer>
    </div>
  )
}

export default App
