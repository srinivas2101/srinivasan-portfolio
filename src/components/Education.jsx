import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBook } from 'react-icons/fi'

const timeline = [
  {
    year: '2024 – 2026',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Sri Manakula Vinayagar Engineering College, Pondicherry',
    grade: 'CGPA: 8.92',
    desc: 'Specializing in Full Stack Development, Data Structures, Algorithms, DBMS, and Software Engineering. Final Year Project: Business Intelligence Platform.',
    color: 'from-primary-500 to-purple-600',
    emoji: '🎓',
  },
  {
    year: '2021 – 2024',
    degree: 'Bachelor of Computer Science (B.Sc)',
    institution: "St. Joseph's College of Arts & Science, Cuddalore",
    grade: 'Percentage: 68%',
    desc: 'Studied core computing subjects including Programming, Web Development, Networking, and Database Management.',
    color: 'from-purple-500 to-pink-500',
    emoji: '🏛️',
  },
  {
    year: 'Higher Secondary (HSC)',
    degree: 'Higher Secondary Certificate',
    institution: "St. Joseph's Higher Secondary School, Cuddalore",
    grade: 'Percentage: 78%',
    desc: 'Computer Science stream with Mathematics, Physics, Chemistry.',
    color: 'from-blue-500 to-cyan-500',
    emoji: '📘',
  },
  {
    year: 'Secondary (SSLC)',
    degree: 'Secondary School Leaving Certificate',
    institution: "St. Joseph's Higher Secondary School, Cuddalore",
    grade: 'Percentage: 70%',
    desc: 'Completed secondary education with strong academic foundation.',
    color: 'from-accent-500 to-teal-500',
    emoji: '📚',
  },
]

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="education" className="section-padding bg-gray-50 dark:bg-dark-800/50 relative overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-30" />
      <div className="max-w-5xl mx-auto relative" ref={ref}>
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="text-primary-500 font-mono text-sm font-semibold tracking-wider uppercase">My Journey</span>
          <h2 className="section-title mt-2">Educational <span className="gradient-text">Timeline</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="relative">
          <div className="timeline-line hidden md:block" />
          {timeline.map((item, i) => (
            <motion.div key={i}
              className={`relative flex md:items-center mb-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}>
              <div className={`md:w-5/12 ${i % 2 === 0 ? 'md:pl-0 md:pr-8' : 'md:pl-8 md:pr-0'} ml-12 md:ml-0`}>
                <div className="glass-card p-6 rounded-2xl card-hover">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">{item.emoji}</span>
                    <div>
                      <span className={`inline-block px-2 py-0.5 rounded-md text-xs font-mono font-semibold bg-gradient-to-r ${item.color} text-white mb-2`}>
                        {item.year}
                      </span>
                      <h3 className="font-display font-bold text-gray-800 dark:text-white text-base leading-snug">{item.degree}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-primary-500 font-semibold mb-1">{item.institution}</p>
                  <p className="text-sm text-accent-500 font-semibold mb-2">{item.grade}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                </div>
              </div>
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-6 w-10 h-10 rounded-full glass-card border-2 border-primary-500 flex items-center justify-center">
                <FiBook className="text-primary-500" size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
