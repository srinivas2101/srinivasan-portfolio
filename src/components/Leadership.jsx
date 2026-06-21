import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FiUsers, FiMessageSquare, FiTarget, FiClock,
  FiTrendingUp, FiRefreshCw, FiCheckCircle, FiZap
} from 'react-icons/fi'

const skills = [
  { icon: FiUsers, title: 'Leadership', desc: 'Guiding teams toward shared goals with clarity and confidence', color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { icon: FiUsers, title: 'Team Collaboration', desc: 'Working effectively in cross-functional teams with mutual respect', color: 'text-purple-500', bg: 'bg-purple-500/10' },
  { icon: FiMessageSquare, title: 'Communication', desc: 'Clear and concise communication with peers, leads, and clients', color: 'text-accent-500', bg: 'bg-accent-500/10' },
  { icon: FiTarget, title: 'Problem Solving', desc: 'Analytical mindset to break down and resolve complex challenges', color: 'text-primary-500', bg: 'bg-primary-500/10' },
  { icon: FiCheckCircle, title: 'Project Coordination', desc: 'Organizing tasks, tracking progress, and meeting deadlines', color: 'text-rose-500', bg: 'bg-rose-500/10' },
  { icon: FiClock, title: 'Time Management', desc: 'Prioritizing tasks and delivering quality work on schedule', color: 'text-orange-500', bg: 'bg-orange-500/10' },
  { icon: FiRefreshCw, title: 'Adaptability', desc: 'Quickly adapting to new technologies, tools, and environments', color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
  { icon: FiZap, title: 'Decision Making', desc: 'Making informed, confident decisions even under pressure', color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
]

const activities = [
  {
    title: 'Basketball — District Level Player',
    emoji: '🏀',
    desc: 'Represented school/college at District Level Basketball tournaments. Active team player with competitive sports experience.',
    highlight: true,
  },
  {
    title: 'NCC — School Level Cadet',
    emoji: '🎖️',
    desc: 'Completed NCC training at school level and earned an NCC Grade Certificate. Attended a 10-day NCC camp, building discipline and leadership.',
    highlight: true,
  },
  {
    title: 'Technical Events & Competitions',
    emoji: '💻',
    desc: 'Participated in college-level technical competitions, coding events, and symposiums.',
    highlight: false,
  },
  {
    title: 'Workshops & Seminars',
    emoji: '📚',
    desc: 'Attended workshops on Web Development, Python, and emerging technologies. Industrial Visit to Kaashiv InfoTech, Chennai.',
    highlight: false,
  },
  {
    title: 'Technical Presentations',
    emoji: '🎤',
    desc: 'Presented technical topics to peers and faculty, sharpening communication and public speaking skills.',
    highlight: false,
  },
  {
    title: 'Open Source & GitHub Projects',
    emoji: '🚀',
    desc: 'Actively building and sharing projects on GitHub — FormFlow, Business Intelligence, and more.',
    highlight: false,
  },
]

export default function Leadership() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="leadership" className="section-padding">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="text-primary-500 font-mono text-sm font-semibold tracking-wider uppercase">Beyond Code</span>
          <h2 className="section-title mt-2">Leadership & <span className="gradient-text">Soft Skills</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Skill Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {skills.map((s, i) => (
            <motion.div key={s.title} className="glass-card p-5 rounded-2xl card-hover group"
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}>
              <div className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <s.icon className={s.color} size={22} />
              </div>
              <h3 className="font-display font-bold text-gray-800 dark:text-white mb-2 text-sm">{s.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Extra Curricular */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}>
          <h3 className="text-2xl font-display font-bold text-gray-800 dark:text-white text-center mb-8">
            Extra <span className="gradient-text">Curricular Activities</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {activities.map((a, i) => (
              <motion.div key={a.title}
                className={`glass-card p-5 rounded-2xl flex items-start gap-4 card-hover ${a.highlight ? 'border border-primary-500/30 bg-primary-500/5' : ''}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.08 }}>
                <span className="text-3xl flex-shrink-0">{a.emoji}</span>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white text-sm mb-1 flex items-center gap-2">
                    {a.title}
                    {a.highlight && <span className="text-xs px-2 py-0.5 rounded-full bg-primary-500/20 text-primary-400 font-mono">Certificate</span>}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
