import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-dark-800/90 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center">
            <span className="text-white font-display font-bold text-lg">S</span>
          </div>
          <span className="font-display font-semibold text-gray-800 dark:text-white hidden sm:block">
            Srinivasan<span className="text-primary-500"></span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-all">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button onClick={() => setDarkMode(!darkMode)}
            className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-all">
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <a href="#contact" className="hidden md:block btn-primary text-sm py-2 px-4">Hire Me</a>
          <button onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 rounded-lg glass-card flex items-center justify-center text-gray-600 dark:text-gray-300">
            {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/95 dark:bg-dark-800/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-white/10 px-4 pb-4">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className="block py-3 text-gray-600 dark:text-gray-300 hover:text-primary-500 font-medium border-b border-gray-100 dark:border-white/5 last:border-0">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="block mt-3 btn-primary text-center text-sm">Hire Me</a>
        </motion.div>
      )}
    </motion.nav>
  )
}
