import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Button from '../ui/Button';

export default function HeroSection() {
  const text = "Full Stack Developer";
  const characters = text.split("");

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-purple-500/5 dark:from-primary-900/20 dark:to-purple-900/10 z-0" />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-primary-600 dark:text-primary-400 font-medium mb-4"
            >
              Hi, myself
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2"
            >
              Kishan Singh
            </motion.h1>
            
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-600 dark:text-gray-400 mb-6 flex flex-wrap"
            >
              {characters.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.1,
                    type: "spring",
                    stiffness: 120,
                    damping: 15
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl"
            >
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a href="/kishancv.pdf" download="kishancv.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  Download CV
                </Button>
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex space-x-6 mt-8"
            >
              <a 
                href="https://github.com/13krishan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/krishan13/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:Krishansingh08102001@gmail.com" 
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              >
                <FiMail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Profile Picture or Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary-500/20 dark:bg-primary-400/10 rounded-full blur-3xl" />
              <div className="relative bg-gradient-to-br from-primary-500 to-purple-600 p-1.5 rounded-full">
                <div className="bg-white dark:bg-gray-900 rounded-full p-2">
                  {/* Profile image */}
                  <img 
                    src="/profile.jpg" 
                    alt="Krishan Singh" 
                    className="w-full aspect-square rounded-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Down Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FiArrowDown className="w-6 h-6 text-primary-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 