import React from 'react';
import { motion } from 'framer-motion';
import { techStackData } from '../data/techStackData';

const TechStack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tools I use to turn ideas into production-ready systems
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {techStackData.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`${tech.bgColor} p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 cursor-pointer group`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`p-3 rounded-lg ${tech.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon size={32} />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {tech.name}
                </h3>
                
                {/* Skill Level Indicator */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500`}
                  ></motion.div>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {tech.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. Currently exploring advanced patterns in 
              microservices architecture, serverless computing, and modern DevOps practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;