import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaCode, FaEdit, FaCrop, FaGamepad, FaMusic, FaRoute, FaBookOpen,
  FaExternalLinkAlt 
} from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: FaCode,
      title: 'Web Design',
      description: 'I am a passionate web designer currently learning Backend Development to become a full-stack developer.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: FaEdit,
      title: 'Photo & Video Editing',
      description: 'I am skilled in photo and video editing with 2 years of experience in Photoshop and various editing tools.',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: FaCrop,
      title: 'UI/UX Design',
      description: 'I am a passionate UI/UX designer focused on creating intuitive and beautiful user experiences.',
      color: 'from-pink-500 to-red-600'
    }
  ]

  const hobbies = [
    { icon: FaBookOpen, name: 'Reading', color: 'text-blue-400' },
    { icon: FaGamepad, name: 'Gaming', color: 'text-green-400' },
    { icon: FaMusic, name: 'Music', color: 'text-purple-400' },
    { icon: FaRoute, name: 'Traveling', color: 'text-orange-400' },
  ]

  const projects = [
    {
      year: '2022',
      title: 'WhatsApp Clone Website',
      link: 'https://akbarms112.github.io/web-dev-tasks/web/',
      description: 'Developed WhatsApp clone website using modern web technologies'
    },
    {
      year: '2023',
      title: 'Dynamic Website',
      link: '#',
      description: 'Developed LocalHost website using HTML, CSS, PHP'
    },
    {
      year: '2023',
      title: 'Personal Resume Website',
      link: 'https://akbarms112.github.io/resume/personal%20page%202/public/index.html',
      description: 'Developed my personal web page resume'
    },
    {
      year: '2025',
      title: 'Bike washing Website',
      link: 'https://bike-wash2-7vwqv77nv-akbarms112s-projects.vercel.app/',
      description: 'Developed my personal web page resume'
    }

  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-gray-900 to-black">
      <div className="container-custom">
        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            My Services
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            What I can do for you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-dark-light rounded-lg p-8 h-full card-hover relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${service.color} mb-6`}>
                      <IconComponent className="text-2xl text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-text-light leading-relaxed mb-6">{service.description}</p>
                    <button className="text-primary hover:text-secondary transition-colors duration-300 font-medium">
                      Learn more →
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-accent mb-8 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-light rounded-lg p-6 card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-primary font-semibold text-lg">{project.year}</span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
                <h4 className="text-white font-semibold mb-2">{project.title}</h4>
                <p className="text-text-light text-sm">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hobbies Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-accent mb-8">Hobbies & Interests</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {hobbies.map((hobby, index) => {
              const IconComponent = hobby.icon
              return (
                <motion.div
                  key={hobby.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="w-20 h-20 bg-dark-light rounded-full flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <IconComponent className={`text-2xl ${hobby.color} group-hover:text-white transition-colors duration-300`} />
                  </div>
                  <p className="text-white font-medium">{hobby.name}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services