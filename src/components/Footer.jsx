import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-dark-800 border-t border-gray-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">S</span>
              </div>
              <span className="font-display font-semibold text-gray-800 dark:text-white">
                Srinivasan<span className="text-primary-500">.dev</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Full Stack Developer from Cuddalore, Tamil Nadu — building modern web applications with React.js & FastAPI.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4 text-sm">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map(link => (
                <a key={link.href} href={link.href}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-500 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4 text-sm">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: FiGithub, href: 'https://github.com/srinivas2101', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/srinivasan-s-30514b2a4/', label: 'LinkedIn' },
                { icon: FiMail, href: 'mailto:nivasans64@gmail.com', label: 'Email' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary-500 hover:scale-110 transition-all">
                  <s.icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4 font-mono">nivasans64@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Srinivasan S. All rights reserved.</p>
          <p className="text-sm text-gray-400 flex items-center gap-1.5">
            Crafted with <FiHeart className="text-red-400" size={14} /> using React.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
