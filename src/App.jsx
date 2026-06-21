import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Leadership from './components/Leadership'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={darkMode ? 'dark' : ''}>
      <AnimatePresence>
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
          <ScrollProgress />
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main>
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Experience />
            <Achievements />
            <Leadership />
            <Certifications />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </div>
      )}
    </div>
  )
}

export default App
