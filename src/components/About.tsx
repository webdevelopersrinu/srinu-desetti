import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Code,
  Users,
  Award,
  Monitor,
  Server,
  Infinity,
} from "lucide-react";

const About = () => {
  const stats = [
    { label: "Projects Completed", value: "50+", icon: Code },
    { label: "Happy Clients", value: "30+", icon: Users },
    { label: "Years Experience", value: "3+", icon: GraduationCap },
    { label: "Awards Won", value: "5+", icon: Award },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From chemistry labs to code editors - my journey in building digital
            solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Chemistry to Code: A Unique Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                My background in chemistry taught me the importance of
                precision, methodology, and systematic problem-solving. These
                principles now guide my approach to software development, where
                I apply the same rigor to building scalable web applications.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I specialize in full-stack development with a focus on React
                ecosystems, Node.js backends, and modern deployment strategies.
                My experience spans from building e-commerce platforms to
                developing micro frontend architectures.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                What Drives Me
              </h4>
              <ul className="space-y-3">
                {[
                  "Building scalable solutions that grow with business needs",
                  "Mentoring developers and sharing knowledge",
                  "Solving complex problems with elegant, simple solutions",
                  "Staying updated with emerging technologies and best practices",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start text-gray-600 dark:text-gray-300"
                  >
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Currently Available
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Open to frontend/backend roles and freelance opportunities.
                  Let's build something amazing together!
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats */}
          {/* <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full mb-4">
                  <stat.icon size={24} />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div> */}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend Development",
                skills: [
                  "JavaScript",
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "Next.js",
                  "Redux",
                ],
                color: "from-blue-500 to-cyan-500",
                Icon: Monitor,
              },
              {
                title: "Backend Development",
                skills: [
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "PostgreSQL",
                  "REST APIs",
                  "Python",
                ],
                color: "from-green-500 to-emerald-500",
                Icon: Server,
              },
              {
                title: "DevOps & Tools",
                skills: ["Docker", "Git", "K8s", "Linux"],
                color: "from-purple-500 to-pink-500",
                Icon: Infinity,
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg mb-4 flex items-center justify-center`}
                >
                  <category.Icon size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h4>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block mr-2 mb-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
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
