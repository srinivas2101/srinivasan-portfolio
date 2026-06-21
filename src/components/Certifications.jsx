import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward } from 'react-icons/fi'

const certs = [
  {
    title: 'Professional Excellence Award',
    issuer: 'Viyashra Group of Companies',
    year: '2026',
    type: 'Award',
    emoji: '🏆',
    color: 'from-yellow-500 to-orange-500',
    verified: true,
  },
  {
    title: 'Web Development Certificate',
    issuer: 'Viyashra Group of Companies',
    year: '2026',
    type: 'Professional',
    emoji: '🏢',
    color: 'from-primary-500 to-purple-600',
    verified: true,
  },
  {
    title: 'Python Fundamentals',
    issuer: 'Saylor University',
    year: '2026',
    type: 'Technical',
    emoji: '🐍',
    color: 'from-blue-500 to-indigo-600',
    verified: true,
  },
  {
    title: 'Web Development Certificate',
    issuer: 'CodSoft',
    year: '2025',
    type: 'Internship',
    emoji: '💻',
    color: 'from-accent-500 to-teal-600',
    verified: true,
  },
  {
    title: 'Industrial Visit Certificate',
    issuer: 'Kaashiv InfoTech, Chennai',
    year: '2023',
    type: 'Workshop',
    emoji: '🏭',
    color: 'from-orange-500 to-pink-500',
    verified: true,
  },
  {
    title: 'NCC Grade Certificate',
    issuer: 'NCC Unit — School Level',
    year: '2017–2019',
    type: 'Achievement',
    emoji: '🎖️',
    color: 'from-green-600 to-emerald-500',
    verified: true,
  },
  {
    title: 'NCC 10-Day Camp Certificate',
    issuer: 'National Cadet Corps',
    year: '2017–2019',
    type: 'Achievement',
    emoji: '⛺',
    color: 'from-teal-500 to-green-600',
    verified: true,
  },
  {
    title: 'Basketball — District Level',
    issuer: 'District Sports Competition',
    year: '',
    type: 'Sports',
    emoji: '🏀',
    color: 'from-orange-600 to-red-500',
    verified: true,
  },
]

const typeColors = {
  Professional: 'bg-blue-500/10 text-blue-500',
  Award: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
  Technical: 'bg-accent-500/10 text-accent-500',
  Internship: 'bg-purple-500/10 text-purple-500',
  Workshop: 'bg-pink-500/10 text-pink-500',
  Achievement: 'bg-green-500/10 text-green-600 dark:text-green-400',
  Sports: 'bg-orange-500/10 text-orange-500',
}

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="certifications" className="section-padding bg-gray-50 dark:bg-dark-800/50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="text-primary-500 font-mono text-sm font-semibold tracking-wider uppercase">Credentials</span>
          <h2 className="section-title mt-2">Certifications & <span className="gradient-text">Awards</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((cert, i) => (
            <motion.div key={i} className="glass-card rounded-2xl overflow-hidden card-hover group"
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07 }}>
              <div className={`h-2 w-full bg-gradient-to-r ${cert.color}`} />
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl group-hover:scale-125 transition-transform">{cert.emoji}</span>
                  {cert.verified && (
                    <span className="text-xs text-accent-500 font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                      Verified
                    </span>
                  )}
                </div>
                <h3 className="font-display font-bold text-gray-800 dark:text-white text-sm mb-1 leading-snug">{cert.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{cert.issuer}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded-lg font-semibold ${typeColors[cert.type]}`}>{cert.type}</span>
                  {cert.year && <span className="text-xs text-gray-400 font-mono">{cert.year}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-10 glass-card p-6 rounded-2xl bg-gradient-to-r from-primary-500/5 to-accent-500/5 border border-primary-500/20 text-center"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.8 }}>
          <FiAward className="text-primary-500 mx-auto mb-3" size={28} />
          <p className="text-gray-600 dark:text-gray-400">
            Committed to <span className="text-primary-500 font-semibold">continuous learning</span> — actively earning certifications and growing every day.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
