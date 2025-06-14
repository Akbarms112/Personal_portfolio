import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, 
  FaJava, FaGitAlt, FaDatabase, FaPhp, FaUbuntu, FaWindows 
} from 'react-icons/fa'
import { SiMysql, SiMongodb, SiPostman } from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'HTML5', level: 90, icon: FaHtml5, color: 'text-orange-500' },
        { name: 'CSS3', level: 85, icon: FaCss3Alt, color: 'text-blue-500' },
        { name: 'JavaScript', level: 80, icon: FaJs, color: 'text-yellow-500' },
        { name: 'React', level: 75, icon: FaReact, color: 'text-cyan-500' },
      ]
    },
    {
      title: 'Backend Technologies',
      skills: [
      //  { name: 'Node.js', level: 70, icon: FaNodeJs, color: 'text-green-500' },
        { name: 'PHP', level: 75, icon: FaPhp, color: 'text-purple-500' },
        { name: 'Python', level: 65, icon: FaPython, color: 'text-blue-400' },
        { name: 'Java', level: 70, icon: FaJava, color: 'text-red-500' },
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MySQL', level: 80, icon: SiMysql, color: 'text-blue-600' },
      //  { name: 'MongoDB', level: 65, icon: SiMongodb, color: 'text-green-600' },
        { name: 'Git', level: 75, icon: FaGitAlt, color: 'text-orange-600' },
        { name: 'Postman', level: 70, icon: SiPostman, color: 'text-orange-500' },
      ]
    },
    {
      title: 'Operating Systems',
      skills: [
        { name: 'Windows', level: 85, icon: FaWindows, color: 'text-blue-500' },
        { name: 'Ubuntu', level: 70, icon: FaUbuntu, color: 'text-orange-500' },
      ]
    }
  ]

  const languages = [
    { name: 'English', level: 70 },
    { name: 'Urdu', level: 85 },
    { name: 'Hindi', level: 75 },
    { name: 'Tamil', level: 75 },
  ]

  const personalSkills = [
    'Creativity', 'Team Work', 'Problem Solving', 'Listening', 'Critical Thinking'
  ]

  return (
    <section id="skills" className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Here are the technologies and skills I've been working with
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="bg-dark-light rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-accent mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, index) => {
                    const IconComponent = skill.icon
                    return (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <IconComponent className={`text-xl ${skill.color}`} />
                            <span className="text-white font-medium">{skill.name}</span>
                          </div>
                          <span className="text-text-light text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Languages & Personal Skills */}
          <div className="space-y-8">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-dark-light rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-accent mb-6">Languages</h3>
              <div className="space-y-4">
                {languages.map((language, index) => (
                  <div key={language.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">{language.name}</span>
                      <span className="text-text-light text-sm">{language.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${language.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-accent to-secondary h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Personal Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-dark-light rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-accent mb-6">Personal Skills</h3>
              <div className="flex flex-wrap gap-3">
                {personalSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Strengths & Weaknesses */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-dark-light rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-accent mb-6">Strengths & Areas for Growth</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-green-400 font-medium mb-2">Strengths</h4>
                  <p className="text-text-light text-sm italic">
                    Self Motivator • Flexible • Dedicated • Determination
                  </p>
                </div>
                <div>
                  <h4 className="text-yellow-400 font-medium mb-2">Areas for Growth</h4>
                  <p className="text-text-light text-sm italic">
                    Multitasking • Building Confidence • Managing Sensitivity • Structured Thinking
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills