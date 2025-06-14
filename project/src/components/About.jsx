import React, { useState } from 'react'
import { color, motion } from 'framer-motion'
import { FaMapMarkerAlt } from 'react-icons/fa'
import pic from '../Images/Pic.png'
//import pic from '/Images/pic.jpg'

const About = () => {
  const [activeTab, setActiveTab] = useState('skills')

  const tabs = [
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
  ]

  const tabContent = {
    skills: [
      { title: 'Web designing and hosting', desc: 'Web App designing' },
      { title: 'Problem Solving', desc: 'Solving problems in Java' },
      { title: 'Photo and Video Editing', desc: 'Editing photos and videos in VN, Photoshop etc.' },
    ],
    projects: [
      {
        year: '2022',
        title: 'WhatsApp Clone Website',
        link: 'https://akbarms112.github.io/web-dev-tasks/web/',
        desc: 'Developed WhatsApp clone website'
      },
      {
        year: '2023',
        title: 'Dynamic Website',
        link: '#',
        desc: 'Developed LocalHost website using HTML, CSS, PHP'
      },
      {
        year: '2023',
        title: 'Personal Resume Website',
        link: 'https://akbarms112.github.io/resume/personal%20page%202/public/index.html',
        desc: 'Developed my personal web page resume'
      },

       {
        year: '2025',
        title: 'Bike_Wash_Website',
        link: 'https://bike-wash2-7vwqv77nv-akbarms112s-projects.vercel.app/',
        desc: 'A responsive web application that allows users to book bike wash services online, choose packages, and manage appointments. Built using HTML, CSS, JavaScript, PHP, and MySQL, with an admin dashboard to handle bookings and customer data.'
      },
      
      
    ],
    education: [
      { year: '2018-2019', desc: 'SSLC from VHS Dharmapuri with 79%' },
      { year: '2020-2021', desc: 'HSC from VHS Dharmapuri with 88.88%' },
      { year: '2021-2025', desc: 'B.Tech(IT) from RPSIT Salem with 7.9 CGPA' },
    ],
  }

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-black to-gray-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-80 h-96 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl transform rotate-6"></div>
              <div className="relative bg-gray-800 rounded-3xl overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                 // src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
              
               src={pic}
              // src="/Images/pic.jpg"
                  alt="Akbar Ali"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6">
                About Me
              </h2>
              <p className="text-lg text-text-light leading-relaxed">
                Hi! I'm Akbar. I am currently pursuing my Final year Bachelor of Technology in Information Technology. 
                I have more interest in coding and computer stuff, so I took maths computer in higher studies. 
                Besides campus studies, I'm also interested in Web Development, which made me a web developer. 
                I am a hardworking and determined person. This leads me to learn more about computer stuff. 
                Now, in addition, I am learning Node.js and MongoDB to become a backend developer.
              </p>
            </div>

            {/* Tabs */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-primary text-white'
                        : 'text-text-light hover:text-white hover:bg-primary/20'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-dark-light rounded-lg p-6"
              >
                {activeTab === 'skills' && (
                  <div className="space-y-4">
                    {tabContent.skills.map((skill, index) => (
                      <div key={index} className="border-l-4 border-primary pl-4">
                        <h4 className="text-primary font-semibold text-lg">{skill.title}</h4>
                        <p className="text-text-light">{skill.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'projects' && (
                  <div className="space-y-4">
                    {tabContent.projects.map((project, index) => (
                      <div key={index} className="border-l-4 border-primary pl-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-primary font-semibold">{project.year}</span>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-400 hover:text-blue-300 transition-colors duration-300"
                            
                          >
                            Click to view
                          </a>
                        </div>
                        <h4 className="text-white font-semibold">{project.title}</h4>
                        <p className="text-text-light">{project.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'education' && (
                  <div className="space-y-4">
                    {tabContent.education.map((edu, index) => (
                      <div key={index} className="border-l-4 border-primary pl-4">
                        <span className="text-primary font-semibold text-lg">{edu.year}</span>
                        <p className="text-text-light">{edu.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center space-x-2 text-accent"
            >
              <FaMapMarkerAlt />
              <div>
                <h4 className="font-semibold">Dharmapuri, Tamil Nadu, India</h4>
                <p className="text-text-light text-sm">2/347 Mariyamman Kovil Back side, Pidamunari</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About