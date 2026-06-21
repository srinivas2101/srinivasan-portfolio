import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiCpu, FiTrendingUp, FiUsers } from 'react-icons/fi'

const strengths = [
  { icon: FiCode, label: 'Clean Code', desc: 'Writing maintainable, scalable code' },
  { icon: FiCpu, label: 'Problem Solving', desc: 'Breaking down complex problems' },
  { icon: FiTrendingUp, label: 'Quick Learner', desc: 'Adapting to new tech fast' },
  { icon: FiUsers, label: 'Team Player', desc: 'Collaborative and communicative' },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="text-primary-500 font-mono text-sm font-semibold tracking-wider uppercase">Who I Am</span>
          <h2 className="section-title mt-2">About <span className="gradient-text">Me</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="space-y-5 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p className="text-lg">
                I'm <span className="text-gray-800 dark:text-white font-semibold">Srinivasan S</span>, a passionate
                Full Stack Developer and MCA Graduate from Cuddalore, Tamil Nadu. I specialize in building
                modern, high-performance web applications that solve real-world problems.
              </p>
              <p>
                My core stack is <span className="text-primary-500 font-semibold">React.js</span> for dynamic frontends
                and <span className="text-accent-500 font-semibold">FastAPI</span> with{' '}
                <span className="text-purple-500 font-semibold">MongoDB</span> for scalable backends.
                I take pride in writing clean, well-structured code following MVC architecture,
                role-based authentication, and RESTful API design principles.
              </p>
              <p>
                Completed Master of Computer Applications (MCA) at{' '}
                <span className="text-primary-500 font-semibold">Sri Manakula Vinayagar Engineering College, Pondicherry</span>{' '}
                with a CGPA of <span className="text-accent-500 font-semibold">8.92</span>. I've completed
                internships at Viyashra Group, CodSoft, and Three Baboons Technology, earning the{' '}
                <span className="text-accent-500 font-semibold">Professional Excellence Award</span> at Viyashra.
              </p>
              <p>
                Beyond coding, I'm a <span className="text-primary-500 font-semibold">District-level Basketball player</span> and
                an <span className="text-primary-500 font-semibold">NCC cadet</span> — experiences that have shaped my
                discipline, teamwork, and leadership skills.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { label: '📍 Location', value: 'Cuddalore, Tamil Nadu' },
                { label: '🎓 Degree', value: 'MCA @ SMVEC' },
                { label: '📊 CGPA', value: '8.92 / 10' },
                { label: '💼 Status', value: 'Open to Work' },
              ].map(item => (
                <div key={item.label} className="glass-card px-4 py-3 rounded-xl">
                  <div className="text-xs text-gray-400 mb-1">{item.label}</div>
                  <div className="text-sm font-semibold text-gray-800 dark:text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.4 }}>
            {strengths.map((s, i) => (
              <motion.div key={s.label} className="glass-card p-6 rounded-2xl card-hover group cursor-default"
                initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}>
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <s.icon className="text-white" size={22} />
                </div>
                <h3 className="font-display font-semibold text-gray-800 dark:text-white mb-1">{s.label}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{s.desc}</p>
              </motion.div>
            ))}

            <motion.div className="col-span-2 glass-card p-6 rounded-2xl border-l-4 border-primary-500"
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.9 }}>
              <h3 className="font-display font-semibold text-gray-800 dark:text-white mb-2">🎯 Career Goal</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Seeking a Full Stack Developer role where I can build impactful products, grow with a
                dynamic team, and contribute to meaningful software solutions using React.js, FastAPI & MongoDB.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
