import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi'
import profileImg from '../assets/profile.png'

export default function Hero()  {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden dot-bg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/30 text-sm text-primary-400 font-mono mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-gray-800 dark:text-white">Hi, I'm </span>
              <span className="gradient-text">Srinivasan</span>
            </motion.h1>

            <motion.div
              className="text-2xl md:text-3xl font-display font-semibold mb-6 h-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-gray-500 dark:text-gray-400">I build </span>
              <TypeAnimation
                sequence={[
                  'Full Stack Apps', 2000,
                  'React.js UIs', 2000,
                  'FastAPI Backends', 2000,
                  'Scalable Systems', 2000,
                  'Modern Web Experiences', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="gradient-text"
              />
            </motion.div>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              MCA Graduate @ Sri Manakula Vinayagar Engineering College, Pondicherry — building high-performance web apps with{' '}
              <span className="text-primary-500 font-semibold">React.js</span> and{' '}
              <span className="text-accent-500 font-semibold">FastAPI</span>.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {['React.js', 'FastAPI', 'SQL', 'Python', 'JavaScript'].map(tech => (
                <span key={tech} className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20">
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a href="#contact" className="btn-primary flex items-center gap-2">
                              Contact Me <FiArrowRight />
                            </a>
                            <a href="/Srinivasan-Resume.pdf"  target="_blank"
  rel="noopener noreferrer" className="btn-outline flex items-center gap-2">
                              <FiDownload /> Resume
                            </a>
            </motion.div>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {[
                { icon: FiGithub, href: 'https://github.com/srinivas2101', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/srinivasan-s-30514b2a4/', label: 'LinkedIn' },
                { icon: FiMail, href: 'mailto:nivasans64@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 hover:scale-110 transition-all">
                  <Icon size={20} />
                </a>
              ))}
              <span className="text-sm text-gray-400 font-mono ml-2">@srinivas2101</span>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 via-purple-500 to-accent-500 blur-xl opacity-40 animate-float" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Spinning ring */}
                <div className="absolute inset-0 rounded-full"
                  style={{ background: 'conic-gradient(from 0deg, #6366f1, #8b5cf6, #10b981, #6366f1)', animation: 'spin 8s linear infinite', padding: '3px' }}>
                  <div className="w-full h-full rounded-full bg-white dark:bg-dark-900" />
                </div>

                {/* Profile photo - face centered */}
                <div className="absolute inset-[6px] rounded-full overflow-hidden">
                  <img
                    src={profileImg}
                    alt="Srinivasan S"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: '50% 8%', transform: 'scale(1.35)', transformOrigin: 'top center' }}
                  />
                </div>

                {/* Floating cards */}
                <motion.div className="absolute -bottom-4 -left-8 glass-card px-4 py-3 rounded-xl"
                  animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                  <div className="text-2xl font-display font-bold gradient-text">5+</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Projects</div>
                </motion.div>

                <motion.div className="absolute -top-4 -right-4 glass-card px-4 py-3 rounded-xl"
                  animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}>
                  <div className="text-2xl font-display font-bold gradient-text">MCA</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">SMVEC</div>
                </motion.div>

                <motion.div className="absolute top-1/2 -right-16 glass-card px-4 py-3 rounded-xl hidden lg:block"
                  animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}>
                  <div className="text-2xl font-display font-bold gradient-text">6mo</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Experience</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div className="flex flex-col items-center mt-16 gap-2 text-gray-400"
          animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <span className="text-xs font-mono">scroll down</span>
          <div className="w-5 h-8 rounded-full border-2 border-gray-300 dark:border-gray-600 flex justify-center pt-1">
            <div className="w-1 h-2 rounded-full bg-primary-500 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
