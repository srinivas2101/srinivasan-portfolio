import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiDownload, FiX, FiMaximize2, FiMinimize2, FiExternalLink } from 'react-icons/fi'

export default function ResumeModal({ isOpen, onClose }) {
  const [fullscreen, setFullscreen] = useState(false)

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div
          className={`relative bg-white dark:bg-dark-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ${
            fullscreen ? 'w-full h-full rounded-none' : 'w-full max-w-4xl h-[90vh]'
          }`}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-dark-700 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-white text-xs font-bold">PDF</span>
              </div>
              <div>
                <h3 className="font-display font-semibold text-gray-800 dark:text-white text-sm">Srinivasan S — Resume</h3>
                <p className="text-xs text-gray-400 font-mono">resume.pdf</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a href="//Srinivasan-Resume.pdf" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600 transition-all">
                <FiExternalLink size={14} /><span className="hidden sm:inline">Open</span>
              </a>
              <a href="//Srinivasan-Resume.pdf" download="Srinivasan_Resume.pdf"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold gradient-bg text-white hover:scale-105 transition-transform">
                <FiDownload size={14} /><span className="hidden sm:inline">Download</span>
              </a>
              <button onClick={() => setFullscreen(!fullscreen)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-600 transition-all">
                {fullscreen ? <FiMinimize2 size={15} /> : <FiMaximize2 size={15} />}
              </button>
              <button onClick={onClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-red-100 dark:hover:bg-red-500/20 hover:text-red-500 transition-all">
                <FiX size={16} />
              </button>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="flex-1 overflow-hidden bg-gray-200 dark:bg-dark-900">
            <object data="/resume.pdf" type="application/pdf" className="w-full h-full">
              <embed src="/resume.pdf" type="application/pdf" className="w-full h-full" />
            </object>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-5 py-2.5 border-t border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-dark-700 flex-shrink-0">
            <p className="text-xs text-gray-400 font-mono">Full Stack Developer | MCA Student</p>
            <a href="/Srinivasan-Resume.pdf" download="Srinivasan_Resume.pdf"
              className="flex items-center gap-1.5 text-xs font-semibold text-primary-500 hover:text-primary-400 transition-colors">
              <FiDownload size={12} /> Save PDF
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}