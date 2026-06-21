import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const stats = [
  { value: 5, suffix: '+', label: 'Projects Completed', emoji: '🚀', desc: '4 personal + 1 internship project' },
  { value: 5, suffix: '+', label: 'Certifications Earned', emoji: '🏆', desc: 'Technical & professional certs' },
  { value: 3, suffix: '', label: 'Internships Done', emoji: '💼', desc: 'Viyashra, CodSoft, Three Baboons' },
  { value: 8, suffix: '+', label: 'Technologies Known', emoji: '⚡', desc: 'Languages, frameworks & tools' },
]

const achievements = [
  { title: 'Professional Excellence Award', issuer: 'Viyashra Group of Companies', year: '2026', emoji: '🏆', color: 'from-yellow-500 to-orange-500' },
  { title: 'Python Certification', issuer: 'Saylor University', year: '2026', emoji: '🐍', color: 'from-blue-500 to-indigo-600' },
  { title: 'Web Development Certificate', issuer: 'Viyashra Group of Companies', year: '2026', emoji: '🌐', color: 'from-primary-500 to-purple-600' },
  { title: 'Web Development Certificate', issuer: 'CodSoft', year: '2025', emoji: '💻', color: 'from-accent-500 to-teal-600' },
  { title: 'Industrial Visit Certificate', issuer: 'Kaashiv InfoTech, Chennai', year: '2023', emoji: '🏭', color: 'from-orange-500 to-pink-500' },
  { title: 'NCC School Level Certificate', issuer: 'NCC Unit — School Level', year: '2017–2019', emoji: '🎖️', color: 'from-green-600 to-emerald-500' },
  { title: 'Basketball — District Level', issuer: 'District Sports Competition', year: '', emoji: '🏀', color: 'from-orange-600 to-red-500' },
  { title: 'MCA — CGPA 8.92', issuer: 'Sri Manakula Vinayagar Engineering College', year: '2024–2026', emoji: '🎓', color: 'from-purple-500 to-pink-500' },
]

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="achievements" className="section-padding bg-gray-50 dark:bg-dark-800/50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="text-primary-500 font-mono text-sm font-semibold tracking-wider uppercase">Milestones</span>
          <h2 className="section-title mt-2">My <span className="gradient-text">Achievements</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Animated Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((s, i) => (
            <motion.div key={s.label} className="glass-card p-6 rounded-2xl text-center card-hover"
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}>
              <div className="text-4xl mb-3">{s.emoji}</div>
              <div className="text-4xl font-display font-bold gradient-text mb-1">
                {s.value}{s.suffix}
              </div>
              <div className="font-semibold text-gray-800 dark:text-white text-sm mb-1">{s.label}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{s.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((a, i) => (
            <motion.div key={i} className="glass-card p-5 rounded-2xl card-hover flex items-center gap-4"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.07 }}>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${a.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                {a.emoji}
              </div>
              <div>
                <h3 className="font-display font-bold text-gray-800 dark:text-white text-sm">{a.title}</h3>
                <p className="text-xs text-primary-500 font-semibold mt-0.5">{a.issuer}</p>
                {a.year && <p className="text-xs text-gray-400 font-mono mt-0.5">{a.year}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
