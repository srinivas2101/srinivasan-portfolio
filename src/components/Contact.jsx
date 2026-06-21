import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import emailjs from '@emailjs/browser'
import { FiSend, FiMail, FiMapPin, FiLinkedin, FiGithub, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'

export default function Contact() {
  const formRef = useRef()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [status, setStatus] = useState(null)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!formData.name.trim()) e.name = 'Name is required'
    if (!formData.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Enter a valid email'
    if (!formData.subject.trim()) e.subject = 'Subject is required'
    if (!formData.message.trim()) e.message = 'Message is required'
    else if (formData.message.trim().length < 10) e.message = 'Message too short'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(p => ({ ...p, [name]: value }))
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
      )
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus(null), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus(null), 4000)
    }
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-700 border text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-all ${
      errors[field] ? 'border-red-400' : 'border-gray-200 dark:border-white/10'
    }`

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="text-primary-500 font-mono text-sm font-semibold tracking-wider uppercase">Get In Touch</span>
          <h2 className="section-title mt-2">Contact <span className="gradient-text">Me</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mt-4" />
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-md mx-auto">
            Open to full-time roles and collaborations. Let's build something great together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Info */}
          <motion.div className="lg:col-span-2 space-y-5"
            initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }}>
            {[
              { icon: FiMail, label: 'Email', value: 'nivasans64@gmail.com', href: 'mailto:nivasans64@gmail.com' },
              { icon: FiMapPin, label: 'Location', value: 'Cuddalore, Tamil Nadu, India', href: null },
            ].map(item => (
              <div key={item.label} className="glass-card p-5 rounded-2xl flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-white" size={18} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">{item.label}</div>
                  {item.href
                    ? <a href={item.href} className="text-sm font-semibold text-gray-800 dark:text-white hover:text-primary-500 transition-colors">{item.value}</a>
                    : <span className="text-sm font-semibold text-gray-800 dark:text-white">{item.value}</span>
                  }
                </div>
              </div>
            ))}

            <div className="glass-card p-5 rounded-2xl">
              <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-4">Connect with me</h4>
              <div className="flex gap-3">
                {[
                  { icon: FiGithub, href: 'https://github.com/srinivas2101', label: 'GitHub' },
                  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/srinivasan-s-30514b2a4/', label: 'LinkedIn' },
                  { icon: FiMail, href: 'mailto:nivasans64@gmail.com', label: 'Email' },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="w-11 h-11 rounded-xl glass border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary-500 hover:border-primary-500/50 hover:scale-110 transition-all">
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-accent-500/30 bg-accent-500/5">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-accent-500 animate-pulse" />
                <div>
                  <div className="text-sm font-bold text-accent-500">Open to Work</div>
                  <div className="text-xs text-gray-400">Full Stack Developer roles</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }}>
            <div className="glass-card p-6 md:p-8 rounded-2xl">
              <h3 className="font-display font-bold text-xl text-gray-800 dark:text-white mb-6">Send me a message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input type="text" name="name" placeholder="Your Name"
                      value={formData.name} onChange={handleChange} className={inputClass('name')} />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input type="email" name="email" placeholder="Your Email"
                      value={formData.email} onChange={handleChange} className={inputClass('email')} />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <input type="text" name="subject" placeholder="Subject"
                    value={formData.subject} onChange={handleChange} className={inputClass('subject')} />
                  {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
                </div>
                <div>
                  <textarea name="message" placeholder="Your Message" rows={5}
                    value={formData.message} onChange={handleChange}
                    className={`${inputClass('message')} resize-none`} />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {status === 'success' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-accent-500/10 border border-accent-500/30 text-accent-500">
                    <FiCheckCircle size={18} />
                    <span className="text-sm font-semibold">Message sent! I'll get back to you soon. 🎉</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400">
                    <FiAlertCircle size={18} />
                    <span className="text-sm font-semibold">Failed to send. Please email directly at nivasans64@gmail.com</span>
                  </motion.div>
                )}

                <button type="submit" disabled={status === 'loading'}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                  {status === 'loading' ? (
                    <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                  ) : (
                    <><FiSend size={16} />Send Message</>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
