"use client";

import { motion } from "framer-motion";
import { FiCode, FiServer, FiDatabase, FiLayout, FiBriefcase, FiGlobe, FiUser, FiAward } from "react-icons/fi";

const About = () => {
  const skills = [
    { name: "Python", level: 95 },
    { name: "PyTorch", level: 93 },
    { name: "Pandas", level: 90 },
    { name: "Transformers", level: 85 },
    { name: "OpenCV", level: 70 },
    { name: "RESTful", level: 65 },
    { name: "AWS", level: 75 },
    { name: "SQL", level: 60 },
    { name: "CI/CD", level: 70 },
  ];

  const categories = [
    {
      icon: <FiCode size={24} />,
      title: "Programming & Development",
      skills: ["Python", "Javascript", "TypeScript", "Node.js", "React", "Express", "SQL"],
    },
    {
      icon: <FiServer size={24} />,
      title: "AI & Machine Learning",
      skills: ["Machine Learning", "Scikit-learn", "TensorFlow", "PyTorch", "Natural Language Processing"],
    },
    {
      icon: <FiDatabase size={24} />,
      title: "Cloud & DevOps",
      skills: ["AWS","Azure","GCP", "CI/CD", "Jenkins"],
    },
    {
      icon: <FiDatabase size={24} />,
      title: "Software Architecture & Systems",
      skills: ["System Design","Architecture Planning","Microservices", "Scalability", "Performance Optimization","Agile"],
    },
    {
      icon: <FiLayout size={24} />,
      title: "Collaboration & Leadership",
      skills: ["Team Mentoring", "Code Reviews", "Cross-Functional Collaboration", "Design", "QA"],
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-4">About Me</span>
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">Know Me Better</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8 flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-600 text-white flex items-center justify-center shadow-md mr-4 border-2 border-white dark:border-gray-800">
                <FiUser size={20} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Who I Am
              </h3>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-2xl"></div>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="paragraph text-gray-600 dark:text-gray-400 mb-6 leading-relaxed relative z-10"
              >
                Senior AI Software Developer with 7+ years of experience designing, developing, and maintaining scalable, data-driven applications and intelligent systems. Skilled in frontend technologies such as React, Next.js, and Tailwind CSS, and backend development using Python, Node.js, FastAPI, Express, and relational and NoSQL databases.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="paragraph text-gray-600 dark:text-gray-400 mb-6 leading-relaxed relative z-10"
              >
                Experienced in integrating AI/ML capabilities, third-party APIs, and building secure, high-performance systems with strong authentication and authorization mechanisms. Proven ability to translate complex requirements into reliable, production-ready solutions.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="paragraph text-gray-600 dark:text-gray-400 leading-relaxed relative z-10"
              >
                Proficient in cloud and DevOps practices, including CI/CD pipelines, containerization, and deployment on AWS and modern cloud platforms. Focused on performance optimization, clean architecture, and delivering end-to-end solutions that scale.
              </motion.p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 flex items-center group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <FiBriefcase size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">AI - Software Engineer</h4>
                  <p className="text-gray-600 dark:text-gray-400">Web & AI-Driven Application Solutions</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 flex items-center group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <FiGlobe size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Experience</h4>
                  <p className="text-gray-600 dark:text-gray-400">7 Years in Development</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="mb-8 flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-600 text-white flex items-center justify-center shadow-md mr-4 border-2 border-white dark:border-gray-800">
                <FiAward size={20} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                My Skills
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {categories.map((category, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {category.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {category.title}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
        >
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-600 text-white flex items-center justify-center shadow-md mr-4 border-2 border-white dark:border-gray-800">
              <FiCode size={20} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Skill Proficiency
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="mb-4"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                  <div className="flex items-center">
                    <span className="text-sm font-medium py-0.5 px-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 * index }}
                    className="bg-gradient-to-r from-blue-500 to-blue-400 h-full rounded-full shadow-inner" 
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 