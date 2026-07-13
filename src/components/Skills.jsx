import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiDatabase, FiTool, FiLayout, FiMonitor } from 'react-icons/fi'
import {
  SiReact, SiJavascript, SiHtml5, SiTailwindcss,
  SiPython, SiFastapi,
  SiMysql,
  SiGit, SiGithub,
} from 'react-icons/si'
import { FaCss3Alt, FaC } from 'react-icons/fa6'

const skillCategories = [
  {
    title: 'Frontend',
    icon: FiLayout,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'HTML5', icon: SiHtml5, level: 95, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, level: 90, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, level: 85, color: '#F7DF1E' },
      { name: 'React.js', icon: SiReact, level: 88, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85, color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend',
    icon: FiCode,
    color: 'from-primary-500 to-purple-600',
    skills: [
      { name: 'Python', icon: SiPython, level: 82, color: '#3776AB' },
      { name: 'FastAPI', icon: SiFastapi, level: 85, color: '#009688' },
      { name: 'REST APIs', icon: FiCode, level: 80, color: '#6366f1' },
    ],
  },
  {
    title: 'Database',
    icon: FiDatabase,
    color: 'from-accent-500 to-teal-600',
    skills: [
      { name: 'MySQL', icon: SiMysql, level: 75, color: '#4479A1' },
    ],
  },
  {
    title: 'Tools',
    icon: FiTool,
    color: 'from-orange-500 to-pink-500',
    skills: [
      { name: 'Git', icon: SiGit, level: 85, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, level: 88, color: '#6e40c9' },
      { name: 'VS Code', icon: FiMonitor, level: 95, color: '#007ACC' },
    ],
  },
]

function SkillBar({ name, icon: Icon, level, color, delay }) {
  const [ref, inView] = useInView({ triggerOnce: true })
  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon size={16} style={{ color }} />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        </div>
        <span className="text-xs font-mono text-primary-500">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-dark-600 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="text-primary-500 font-mono text-sm font-semibold tracking-wider uppercase">Tech Stack</span>
          <h2 className="section-title mt-2">My <span className="gradient-text">Skills</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div key={cat.title} className="glass-card p-6 rounded-2xl card-hover"
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center`}>
                  <cat.icon className="text-white" size={18} />
                </div>
                <h3 className="font-display font-bold text-gray-800 dark:text-white text-lg">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, j) => (
                  <SkillBar key={skill.name} {...skill} delay={i * 0.1 + j * 0.08} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-12 glass-card p-6 rounded-2xl"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-6 font-mono">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: SiHtml5, color: '#E34F26', name: 'HTML5' },
              { icon: FaCss3Alt, color: '#1572B6', name: 'CSS3' },
              { icon: SiJavascript, color: '#F7DF1E', name: 'JS' },
              { icon: SiReact, color: '#61DAFB', name: 'React' },
              { icon: SiFastapi, color: '#009688', name: 'FastAPI' },
              { icon: SiPython, color: '#3776AB', name: 'Python' },
              { icon: SiGit, color: '#F05032', name: 'SQL' },
            ].map(({ icon: Icon, color, name }) => (
              <div key={name} className="flex flex-col items-center gap-1 group cursor-default">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:scale-125 transition-transform">
                  <Icon size={24} style={{ color }} />
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500">{name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
