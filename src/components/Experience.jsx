import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiAward, FiCheckCircle, FiCalendar } from 'react-icons/fi'

const internships = [
  {
    company: 'Viyashra Group of Companies',
    role: 'Web Development Intern',
    duration: 'Jan 2026 – Jun 2026',
    months: '6 Months',
    location: 'Tamil Nadu, India',
    project: 'In2In Immigration Gateway',
    projectType: 'Company Project',
    stack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    gradient: 'from-primary-600 to-purple-600',
    award: 'Professional Excellence Award',
    responsibilities: [
      'Developed Employee Module for In2In Immigration Gateway platform with role-based access features',
      'Designed and optimized MySQL database schemas for immigration workflow data management',
      'Built employee record management system with full CRUD operations',
      'Implemented Role-Based Access Control (RBAC) for secure, permission-based data access',
      'Enhanced UI components for better user experience and accessibility across modules',
      'Fixed bugs and improved performance; collaborated using Agile methodologies',
    ],
  },
  {
    company: 'CodSoft',
    role: 'Web Development Intern (Virtual)',
    duration: 'Jul 2025 – Aug 2025',
    months: '1 Month',
    location: 'Virtual / Remote',
    project: '3 Frontend Tasks',
    projectType: 'Virtual Internship',
    stack: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'from-accent-500 to-teal-600',
    award: 'Web Development Certificate',
    responsibilities: [
      'Built a static personal Portfolio web page with clean, modern design',
      'Developed a fully functional JavaScript Calculator with standard operations',
      'Created a responsive Landing Page with attention to UX and mobile responsiveness',
      'Practiced front-end development best practices and version control using Git',
      'Deployed projects and gained hands-on experience in web deployment workflows',
    ],
  },
  {
    company: 'Three Baboons Technology',
    role: 'Web Development Intern',
    duration: '2023',
    months: '5 Days',
    location: 'Tamil Nadu, India',
    project: 'Frontend Fundamentals',
    projectType: 'Short-term Internship',
    stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    gradient: 'from-orange-500 to-pink-500',
    award: null,
    responsibilities: [
      'Learned HTML, CSS, JavaScript and Bootstrap fundamentals hands-on',
      'Built basic web pages and UI components during the intensive 5-day program',
      'Got first industry exposure to professional web development workflows',
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="text-primary-500 font-mono text-sm font-semibold tracking-wider uppercase">Work History</span>
          <h2 className="section-title mt-2">Internship <span className="gradient-text">Experience</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="space-y-8">
          {internships.map((intern, idx) => (
            <motion.div key={intern.company}
              className="glass-card rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.15 }}>

              {/* Header */}
              <div className={`bg-gradient-to-r ${intern.gradient} p-6 md:p-8`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <FiBriefcase className="text-white/70" size={16} />
                      <span className="text-white/70 text-sm font-mono">{intern.projectType}</span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-1">{intern.role}</h3>
                    <p className="text-white/90 font-semibold text-lg">{intern.company}</p>
                  </div>
                  <div className="flex flex-row md:flex-col gap-2">
                    <span className="px-3 py-1.5 bg-white/20 backdrop-blur rounded-xl text-white text-sm font-semibold flex items-center gap-1">
                      <FiCalendar size={13} /> {intern.duration}
                    </span>
                    <span className="px-3 py-1.5 bg-black/20 rounded-xl text-white/80 text-sm font-mono">
                      {intern.months} • {intern.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left */}
                  <div>
                    <h4 className="font-display font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2 text-sm">
                      <FiCheckCircle className="text-accent-500" /> Project
                    </h4>
                    <div className="glass p-4 rounded-xl border border-gray-200 dark:border-white/10 mb-5">
                      <div className="text-base font-bold gradient-text">{intern.project}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{intern.projectType}</div>
                    </div>

                    <h4 className="font-display font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2 text-sm">
                      <FiCheckCircle className="text-accent-500" /> Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {intern.stack.map(t => (
                        <span key={t} className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-primary-500/10 text-primary-400 border border-primary-500/20">
                          {t}
                        </span>
                      ))}
                    </div>

                    {intern.award && (
                      <div className="p-4 rounded-xl bg-gradient-to-r from-accent-500/10 to-teal-500/10 border border-accent-500/30">
                        <div className="flex items-center gap-2 mb-1">
                          <FiAward className="text-accent-500" size={16} />
                          <span className="font-semibold text-gray-800 dark:text-white text-sm">Achievement</span>
                        </div>
                        <p className="text-accent-500 font-bold text-sm">🏆 {intern.award}</p>
                      </div>
                    )}
                  </div>

                  {/* Right - Responsibilities */}
                  <div>
                    <h4 className="font-display font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2 text-sm">
                      <FiCheckCircle className="text-accent-500" /> Key Responsibilities
                    </h4>
                    <ul className="space-y-2.5">
                      {intern.responsibilities.map((r, i) => (
                        <motion.li key={i}
                          className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400"
                          initial={{ opacity: 0, x: 20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.3 + idx * 0.15 + i * 0.06 }}>
                          <span className="w-5 h-5 rounded-full bg-primary-500/20 text-primary-500 text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                            {i + 1}
                          </span>
                          {r}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
