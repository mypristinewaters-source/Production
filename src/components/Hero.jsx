import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 150])

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-white parallax-section">

      {/* Mobile: Image background with overlay */}
      <div className="lg:hidden absolute inset-0">
        <img
          src="/hero-pool.png"
          alt="Stunning crystal-clear pool with palm trees and modern outdoor living space"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary-900/60"></div>
      </div>

      {/* Desktop: Parallax wrapper */}
      <motion.div
        style={{ y }}
        className="hidden lg:block absolute inset-0 w-full h-full will-change-transform"
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      >
        <div className="flex flex-row w-full h-full">
          {/* Image - Desktop only */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute inset-0">
              <img
                src="/hero-pool.png"
                alt="Stunning crystal-clear pool with palm trees and modern outdoor living space"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
            </div>

            {/* Logo in bottom left corner of image block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute bottom-8 left-8"
            >
              <img
                src="/pristinelogo.png"
                alt="Pristine Waters Pool Service LLC"
                className="h-24 w-24 drop-shadow-lg"
              />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-8 right-8 bg-white rounded-lg shadow-2xl p-4 animate-float"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">Family</div>
                <div className="text-sm text-gray-600">Owned & Operated</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Teal content - Desktop only */}
          <div className="w-full lg:w-1/2 bg-primary-500"></div>
        </div>
      </motion.div>

      {/* Text Content - Works for both mobile and desktop */}
      <div className="relative w-full lg:w-1/2 lg:ml-auto bg-transparent lg:bg-primary-500 flex items-center justify-center px-6 py-20 min-h-screen lg:py-0">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-none tracking-tight">
                Reclaim Your{' '}
                <span className="bg-gradient-to-r from-secondary-400 via-secondary-300 to-secondary-500 bg-clip-text text-transparent drop-shadow-lg">
                  Weekends
                </span>
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white/95 leading-relaxed">
                Swim in <span className="font-semibold italic text-secondary-200">Crystal-Clear Water</span> Without the Hassle
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-white/90 mb-8 font-light"
            >
              Tired of cloudy water and wasted Saturdays? Our professional pool care keeps your backyard oasis sparkling, while you spend time on what matters most – family, friends, and fun.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <a href="#contact" className="btn-primary bg-secondary-400 hover:bg-secondary-500">
                Get Your Free Quote Today
              </a>
              <div className="flex gap-2 min-h-[48px]">
                <a
                  href="https://www.facebook.com/profile.php?id=61578747014037"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 transition-all duration-300 rounded-lg px-4 py-3 sm:py-4 backdrop-blur-md border border-white/30 group flex items-center justify-center"
                >
                  <svg className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 transition-all duration-300 rounded-lg px-4 py-3 sm:py-4 backdrop-blur-md border border-white/30 group flex items-center justify-center"
                >
                  <svg className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
      </div>
    </section>
  )
}

export default Hero

