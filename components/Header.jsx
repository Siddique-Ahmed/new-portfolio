'use client'

import React, { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from 'lucide-react'
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">Portfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
          {['Home', 'About', 'Skills','Projects', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
          </nav>

          {/* Dark Mode Toggle & Hamburger */}
          <div className="flex items-center space-x-4">
            <button 
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              <Sun className="w-5 h-5" />
            </button>

            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 bg-white shadow-lg rounded-lg space-y-1">
            {['Home', 'About', 'Skills','Projects', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
              <button 
                className="mt-4 w-full flex items-center justify-center px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                <Sun className="w-5 h-5 mr-2" />
                Toggle Dark Mode
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header