"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiCheck, FiExternalLink, FiMapPin } from "react-icons/fi";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software / AI Engineer",
      company: "Britenet",
      period: "07/2022 - 10/2025",
      description: [
        "Led end-to-end software and AI projects from system architecture through production deployment, delivering scalable, secure, and high-performance solutions.",
        "Designed and implemented AI-driven systems including predictive models, NLP pipelines, and analytics platforms integrated into enterprise applications.",
        "Architected and developed RESTful and GraphQL APIs using Python, Node.js, and TypeScript, supporting high-traffic and data-intensive workloads.",
        "Applied MLOps best practices for model training, evaluation, deployment, and monitoring using cloud platforms ( AWS, Azure, GCP).",
        "Mentored engineers on software architecture, cloud integration, CI/CD pipelines, and AI deployment strategies, improving overall team quality and delivery speed.",
      ],
      skills: [""],
      url: null,
    },
    {
      title: "Software / AI Engineer",
      company: "UDataArt",
      period: "07/2020 - 06/2022",
      description: [
        "Developed and deployed machine learning solutions using Scikit-learn, TensorFlow, and PyTorch, including predictive modeling and natural language processing systems.",
        "Built scalable backend services and data pipelines using Python, SQL, PostgreSQL, and NoSQL databases to support AI and analytics workloads.",
        "Designed cloud-based application deployments with Docker and CI/CD pipelines ( GitHub Actions, Jenkins), ensuring reliable releases and system stability.",
        "Optimized data processing, feature engineering, and model evaluation to improve accuracy and performance in real-world environments.",
      ],
      skills: [""],
      url: null,
    },
    {
      title: "Software Engineer",
      company: "Codete",
      period: "07/2018 - 06/2020",
      description: [
        "Built scalable backend services, APIs, and internal tools using Python, JavaScript, and Node.js for international clients.",
        "Designed microservices architectures focused on performance, scalability, and maintainability.",
        "Implemented CI/CD pipelines and automated testing workflows to improve deployment reliability and development efficiency.",
        "Conducted code reviews and mentored junior developers, promoting clean code, best practices, and strong engineering standards.",
        "Worked in Agile/Scrum environments, contributing to architecture planning and iterative delivery.",
      ],
      skills: [""],
      url: null,
    },
    {
      title: "Software Developer",
      company: "EMBIQ",
      period: "07/2017 - 06/2018",
      description: [
        "Developed full-stack web and backend solutions using Python and JavaScript across the full software development lifecycle.",
        "Built RESTful APIs, database schemas, and application logic to support business requirements.",
        "Collaborated closely with senior engineers to deliver scalable and maintainable software solutions.",
        "Gained strong foundations in system design, version control (Git), and collaborative development workflows.",
      ],
      skills: [""],
      url: null,
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-4">Professional Journey</span>
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="paragraph text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            My professional journey as a frontend-oriented fullstack developer, crafting seamless user interfaces and high-performing web applications.
          </p>
        </motion.div>

        <div className="relative mt-16">
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 dark:from-blue-600 dark:via-blue-500 dark:to-blue-400 rounded-full"
          ></motion.div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-32 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"
                } md:w-1/2 ${index % 2 === 0 ? "md:ml-0 md:mr-auto" : "md:mr-0 md:ml-auto"}`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                className="hidden md:flex absolute top-6 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-600 text-white items-center justify-center z-10 shadow-lg border-4 border-white dark:border-gray-800"
                style={{
                  left: index % 2 === 0 ? "auto" : "calc(0% - 28px)",
                  right: index % 2 === 0 ? "calc(0% - 28px)" : "auto",
                }}
              >
                <FiBriefcase size={24} />
              </motion.div>

              <div className="md:hidden w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-600 text-white flex items-center justify-center shadow-lg mb-6 mx-auto border-4 border-white dark:border-gray-800">
                <FiBriefcase size={24} />
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:border-blue-200 dark:hover:border-blue-800">
                <div className={`flex flex-col ${index % 2 === 0 ? "md:items-end" : ""}`}>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center mb-2 text-gray-700 dark:text-gray-300">
                    <span className="font-semibold bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent">
                      {exp.company}
                    </span>
                    <span className="mx-3">•</span>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <FiCalendar className="mr-1" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                </div>

                <ul className={`space-y-3 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  {exp.description.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                      className="text-gray-600 dark:text-gray-300 flex items-start"
                    >
                      <div className={`mt-1.5 mr-2 flex-shrink-0 ${index % 2 === 0 ? "md:order-last md:ml-2 md:mr-0" : ""}`}>
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50">
                          <FiCheck className="text-blue-600 dark:text-blue-400" size={12} />
                        </span>
                      </div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className={`mt-6 flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Link to work if available */}
                {exp.url && (
                  <div className={`mt-5 ${index % 2 === 0 ? "text-right" : ""}`}>
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      View work
                      <FiExternalLink className="ml-1" size={14} />
                    </a>
                  </div>
                )}
              </div>

              {/* Timeline connecting line for mobile */}
              {index < experiences.length - 1 && (
                <div className="md:hidden w-1 h-12 bg-gradient-to-b from-blue-500 to-blue-400 dark:from-blue-600 dark:to-blue-500 mx-auto my-4 rounded-full"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 