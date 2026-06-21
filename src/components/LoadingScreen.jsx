import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="w-20 h-20 mx-auto mb-6 rounded-2xl gradient-bg flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <span className="text-white text-2xl font-display font-bold">S</span>
        </motion.div>
        <motion.h2
          className="text-white text-xl font-display font-semibold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Srinivasan S
        </motion.h2>
        <motion.p
          className="text-gray-400 text-sm mt-1 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Full Stack Developer
        </motion.p>
        <motion.div
          className="mt-6 flex gap-1 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary-500"
              animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
