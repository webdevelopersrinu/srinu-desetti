import React from "react";
import { motion } from "framer-motion";
import { Download, MessageCircle, ArrowRight } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
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
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left lg:flex lg:items-center lg:justify-between"
        >
          {/* Content */}
          <div className="lg:w-1/2">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium mb-4">
                👋 Available for new opportunities
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Srinu Desetti
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
            >
              I build powerful, scalable web solutions that transform ideas into
              production-ready systems. Full-stack developer passionate about
              creating exceptional user experiences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              >
                <MessageCircle className="mr-2" size={20} />
                Let's Connect
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center justify-center lg:justify-start"
            >
              <p className="text-gray-600 dark:text-gray-400 mr-4">
                Scroll to explore
              </p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="rotate-90 text-blue-600" size={20} />
              </motion.div>
            </motion.div>
          </div>

          {/* Avatar/Image */}
          <motion.div
            variants={itemVariants}
            className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-lg"
              >
                <div>
                  <img
                    src="https://webdevelopersrinu.github.io/portfolio/images/my%20image.jpg"
                    alt="portfolio-img"
                  />
                </div>
              </motion.div>
              <div className="relative w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                <img
                  src="https://webdevelopersrinu.github.io/portfolio/images/my%20image.jpg"
                  alt="portfolio-img"
                  className="w-72 h-72 rounded-full object-cover shadow-lg"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
