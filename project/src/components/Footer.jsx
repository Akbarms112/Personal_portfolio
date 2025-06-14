import React from 'react'
import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-dark-light py-8">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-text-light">
            Copyright © 2024 Akbar Ali. Made with{' '}
            <FaHeart className="inline text-primary mx-1" />
            by personal web resume
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer