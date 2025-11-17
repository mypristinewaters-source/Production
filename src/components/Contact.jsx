import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const SERVICE_ID = 'service_9pl44xp'
  const TEMPLATE_ID = 'template_84pskau'
  const PUBLIC_KEY = 'VUTJJu0W3Be4U9qJA'

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.phone || !formData.address) {
      setStatus({ type: 'error', message: 'Please fill in the required fields.' })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email || 'Not provided',
      address: formData.address,
      message: formData.message || 'No additional details were provided.',
      time: new Date().toLocaleString(),
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      setStatus({
        type: 'success',
        message: 'Thanks for reaching out! We will respond within 24 hours.',
      })
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        message: '',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong while sending your message. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-500/90 to-primary-600/90 text-white relative overflow-hidden">
      {/* Wave divider at top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12 sm:h-16 md:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,60 350,0 600,50 C850,100 1050,40 1200,80 L1200,0 L0,0 Z" fill="white" className="opacity-100"></path>
          <path d="M0,20 C200,80 400,20 600,60 C800,100 1000,50 1200,90 L1200,0 L0,0 Z" fill="white" className="opacity-50"></path>
        </svg>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
            Ready to{' '}
            <span className="relative inline-block pr-4 pl-2">
              <span className="bg-gradient-to-r from-secondary-300 via-secondary-200 to-secondary-400 bg-clip-text text-transparent italic">
                Love{'\u00A0'}
              </span>
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path
                  d="M0,7 Q50,2 100,7 T200,7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-secondary-300/60"
                />
              </svg>
            </span>
            <br />
            <span className="text-white/95 drop-shadow-lg">Your Pool Again?</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
          {/* Manual Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <div className="flex justify-center mb-8">
              <img src="/pristinelogo.png" alt="Pristine Waters Pool Service LLC" className="h-24 w-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-center text-gray-900 mb-6">Or Contact Us Directly</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 min-h-[46px] rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors text-gray-900 text-sm"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 min-h-[46px] rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors text-gray-900 text-sm"
                  placeholder="(979) 555-0123"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 min-h-[46px] rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors text-gray-900 text-sm"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-xs font-medium text-gray-700 mb-1">
                  Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-3 py-2 min-h-[46px] rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors text-gray-900 text-sm"
                  placeholder="Street, City, ZIP"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors text-gray-900 resize-none text-sm"
                  placeholder="Tell us about your pool..."
                />
              </div>

              {status.message && (
                <p
                  className={`text-sm text-center font-semibold ${
                    status.type === 'error' ? 'text-red-600' : 'text-emerald-600'
                  }`}
                >
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-3 min-h-[46px] bg-secondary-400 hover:bg-secondary-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-300 text-sm"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              <p className="text-xs text-gray-600 text-center">We typically respond within 24 hours</p>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">Call or Text</div>
                    <a href="tel:+19794171600" className="text-xl font-semibold hover:text-white/80 transition-colors">
                      (979) 417-1600
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">Email Us</div>
                    <a href="mailto:mypristinewaters@gmail.com" className="text-xl font-semibold hover:text-white/80 transition-colors break-all">
                      mypristinewaters@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">Service Area</div>
                    <div className="text-xl font-semibold">
                      Brazoria County, TX
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Urgency Banner */}
            <div className="bg-secondary-400 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center mb-2">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="font-bold text-lg">Limited Availability</span>
              </div>
              <p className="text-white/90">
                We only take on a limited number of new clients each month to ensure quality service. Reserve your weekly spot today!
              </p>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Wave divider at bottom - flipped on x-axis */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none" style={{ transform: 'scaleY(-1)' }}>
        <svg className="relative block w-full h-12 sm:h-16 md:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,60 350,0 600,50 C850,100 1050,40 1200,80 L1200,0 L0,0 Z" fill="#f0fdfa" className="opacity-100"></path>
          <path d="M0,20 C200,80 400,20 600,60 C800,100 1000,50 1200,90 L1200,0 L0,0 Z" fill="#f0fdfa" className="opacity-50"></path>
        </svg>
      </div>
    </section>
  )
}

export default Contact

