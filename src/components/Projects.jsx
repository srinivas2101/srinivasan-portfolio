import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiClock } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'Business Intelligence System',
    category: 'Full Stack',
    desc: 'A centralized Business Intelligence platform designed to address fragmented sales and inventory data by providing interactive dashboards for sales performance, inventory status, product performance, and overall business operations. The system includes risk-based inventory monitoring to identify low-stock, critical, and expiring products, along with a FastAPI-based Machine Learning service for demand forecasting. It also supports what-if simulations and price analysis to help users evaluate the potential impact of pricing, discounts, sales, revenue, and profitability decisions.',
    stack: ['React.js', 'Node.js', 'MySQL', 'FastAPI'],
    features: [
      'Centralized Sales & Inventory Dashboard',
      'Risk-Based Inventory Monitoring',
      'Demand Forecasting with Machine Learning',
      'What-If Simulations & Price Analysis',
      'Business Performance & Revenue Insights',
    ],
    github: 'https://github.com/srinivas2101/Business-intelligence',
    demo: 'https://github.com/srinivas2101/Business-intelligence',
    gradient: 'from-primary-500 via-purple-500 to-blue-600',
    emoji: '📊',
    tag: 'Final Year Project',
    status: 'completed',
  },
  {
    id: 2,
    title: 'FormFlow',
    category: 'Full Stack',
    desc: 'A role-based digital form submission and approval management system developed to streamline organizational workflows and reduce manual form processing. The application provides secure authentication, role-based authorization, form creation, submission, tracking, and approval workflows for different users such as employees, managers, and administrators. It uses REST APIs to connect the React.js frontend with the FastAPI backend and MongoDB for storing and managing application data.',
    stack: ['React.js', 'FastAPI', 'MongoDB', 'JWT'],
    features: [
      'JWT Authentication & Authorization',
      'Role-Based Access Control',
      'REST APIs with FastAPI',
      'MongoDB CRUD Operations',
      'Form Submission & Approval Workflow',
    ],
    github: 'https://github.com/srinivas2101/formflow',
    demo: 'https://github.com/srinivas2101/formflow',
    gradient: 'from-accent-500 via-teal-500 to-cyan-600',
    emoji: '📋',
    tag: 'Personal Project',
    status: 'completed',
  },
  {
    id: 3,
    title: 'ChocoBliss',
    category: 'Frontend',
    desc: 'A modern and responsive chocolate e-commerce website developed to provide users with a simple and engaging online shopping experience. The website includes a visually appealing product showcase, category-based browsing, responsive layouts, smooth animations, and an easy-to-use interface. It was built using HTML5, CSS3, and JavaScript with a focus on clean UI design, responsive behavior, and interactive frontend functionality.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Responsive Product Showcase',
      'Category-Based Browsing',
      'Modern UI/UX Design',
      'Smooth Animations',
      'User-Friendly Interface',
    ],
    github: 'https://github.com/srinivas2101/ChocoBliss',
    demo: 'https://github.com/srinivas2101/ChocoBliss',
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    emoji: '🍫',
    tag: 'Frontend',
    status: 'completed',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    category: 'Frontend',
    desc: 'A responsive personal portfolio website developed to showcase my technical skills, projects, experience, and professional profile in an interactive and modern interface. The website is built with React.js and Vite, styled using Tailwind CSS, and enhanced with Framer Motion animations. It includes dark and light mode support, responsive layouts, animated sections, project showcases, and an EmailJS-powered contact form, and is deployed using Vercel.',
    stack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    features: [
      'Dark / Light Mode Toggle',
      'Framer Motion Animations',
      'EmailJS Contact Form',
      'Fully Responsive Design',
      'Vercel Deployment',
    ],
    github: 'https://github.com/srinivas2101',
    demo: 'https://srinivasan-portfolio-lqae.vercel.app/',
    gradient: 'from-pink-500 via-rose-500 to-red-500',
    emoji: '🌐',
    tag: 'Personal Project',
    status: 'completed',
  },
  {
    id: 5,
    title: 'CodSoft Projects',
    category: 'Frontend',
    desc: 'A collection of three frontend development tasks completed during my CodSoft virtual internship, demonstrating practical experience in building responsive and interactive web interfaces. The projects include a static portfolio webpage, a JavaScript-based calculator application, and a responsive landing page. These tasks helped strengthen my fundamentals in HTML, CSS, JavaScript, responsive design, UI development, and Git-based version control.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Static Portfolio Web Page',
      'JavaScript Calculator App',
      'Responsive Landing Page',
      'Clean UI Design',
      'Version Control with Git',
    ],
    github: 'https://github.com/srinivas2101',
    demo: '#',
    gradient: 'from-violet-500 via-purple-500 to-indigo-600',
    emoji: '💻',
    tag: 'Internship Project',
    status: 'completed',
  },
]

const filters = ['All', 'Full Stack', 'Frontend']

export default function Projects() {
  const [active, setActive] = useState('All')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-800/50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="text-primary-500 font-mono text-sm font-semibold tracking-wider uppercase">Portfolio</span>
          <h2 className="section-title mt-2">Featured <span className="gradient-text">Projects</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <motion.div className="flex justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}>
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                active === f ? 'gradient-bg text-white shadow-lg shadow-primary-500/30' : 'glass-card text-gray-600 dark:text-gray-400 hover:text-primary-500'
              }`}>
              {f}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div key={project.id} layout
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group card-hover">
              <div className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-20 h-20 rounded-full bg-white/30 blur-xl" />
                  <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-white/20 blur-xl" />
                </div>
                <span className="text-6xl relative z-10 group-hover:scale-125 transition-transform duration-300">
                  {project.emoji}
                </span>
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 rounded-lg bg-black/30 backdrop-blur text-white text-xs font-mono">
                    {project.tag}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display font-bold text-gray-800 dark:text-white text-lg mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">{project.desc}</p>

                <ul className="space-y-1 mb-4">
                  {project.features.slice(0, 3).map(f => (
                    <li key={f} className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded-md text-xs font-mono bg-primary-500/10 text-primary-400 border border-primary-500/20">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl glass text-gray-600 dark:text-gray-400 hover:text-primary-500 text-sm font-semibold border border-gray-200 dark:border-white/10 transition-all hover:border-primary-500/50">
                    <FiGithub size={15} /> GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl gradient-bg text-white text-sm font-semibold hover:scale-105 transition-transform">
                    <FiExternalLink size={15} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center mt-12"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}>
          <a href="https://github.com/srinivas2101" target="_blank" rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2">
            <FiGithub /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}