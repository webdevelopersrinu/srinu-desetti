import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.h3 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold mb-4"
            >
              Srinu Desetti
            </motion.h3>
            <p className="text-gray-400 max-w-sm">
              Full-stack developer passionate about creating scalable web solutions 
              and turning innovative ideas into reality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Experience', href: '#experience' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.label}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>Full-Stack Applications</li>
              <li>Technical Consulting</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center text-gray-400 mb-4 md:mb-0"
            >
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mx-2"
              >
                <Heart size={16} className="text-red-500 fill-current" />
              </motion.div>
              <span>and</span>
              <Code size={16} className="mx-2 text-blue-400" />
              <span>by Srinu Desetti</span>
            </motion.div>

            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;