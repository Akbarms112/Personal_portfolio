import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, 
  FaTwitter, FaInstagram, FaLinkedin, FaDownload, FaPaperPlane 
} from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'akbarms112@gmail.com',
      href: 'mailto:akbarms112@gmail.com'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '8903265089',
      href: 'tel:8903265089'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Dharmapuri, Tamil Nadu, India',
      href: '#'
    }
  ]

  const socialLinks = [
    { icon: FaFacebook, href: 'https://facebook.com/', color: 'hover:text-blue-500' },
    { icon: FaTwitter, href: 'https://twitter.com/', color: 'hover:text-blue-400' },
    { icon: FaInstagram, href: 'https://instagram.com/', color: 'hover:text-pink-500' },
    { icon: FaLinkedin, href: 'https://linkedin.com/', color: 'hover:text-blue-600' },
  ]

  return (
    <section id="contact" className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Let's discuss your project or just say hello!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <IconComponent className="text-primary text-xl" />
                      </div>
                      <div>
                        <p className="text-text-light text-sm">{info.label}</p>
                        <a
                          href={info.href}
                          className="text-white hover:text-primary transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`w-12 h-12 bg-dark-light rounded-lg flex items-center justify-center text-text-light ${social.color} transition-all duration-300`}
                    >
                      <IconComponent className="text-xl" />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Download CV Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="btn-primary flex items-center space-x-2">
                <FaDownload />
                <span>Download CV</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-dark-light rounded-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-text-light focus:outline-none focus:border-primary transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-text-light focus:outline-none focus:border-primary transition-colors duration-300"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="6"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-text-light focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <FaPaperPlane />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact