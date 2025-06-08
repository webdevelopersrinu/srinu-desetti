import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'webdeveloper.srinu9@gmail.com',
      href: 'mailto:webdeveloper.srinu9@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+91 95024 43217',
      href: 'https://wa.me/91950243217',
      color: 'text-green-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/srinu-desetti',
      href: 'https://www.linkedin.com/in/srinu-desetti/',
      color: 'text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/webdevelopersrinu',
      href: 'https://github.com/webdevelopersrinu',
      color: 'text-gray-700 dark:text-gray-300'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to turn your ideas into reality? Let's discuss your next project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Send Me a Message
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Have a project in mind? Fill out the form below and I'll get back to you within 24 hours.
              </p>
            </motion.div>

            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or how I can help you..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Get In Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Prefer to reach out directly? Choose your preferred method below.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 mb-12">
              {contactMethods.map((method) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 group"
                >
                  <div className={`p-3 rounded-lg ${method.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}>
                    <method.icon className={method.color} size={24} />
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {method.label}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      {method.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Availability */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Current Availability
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm currently available for new projects and collaborations. 
                Response time is typically within 24 hours.
              </p>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-green-600 dark:text-green-400 font-medium">
                  Available for work
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;