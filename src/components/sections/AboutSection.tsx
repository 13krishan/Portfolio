import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know more about my background and what drives me."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Photo Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary-500/20 rounded-lg blur-lg z-0" />
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                {/* Profile photo */}
                <img 
                  src="/profile.jpg" 
                  alt="Krishan Singh" 
                  className="w-full aspect-[4/5] object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Business Analyst 
            </h3>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Hello! I'm Kishan Singh, a Business Analyst student at Lovely Professional University, with a passion for creating elegant solutions to complex problems.
              </p>
              
              <p>
              I am a detail-oriented and analytical Business Analyst with a strong foundation in data-driven decision-making, backed by hands-on experience in client relationship management, data visualization, and strategic analysis.</p>
              <p>
               With a background in Computer Science and an MBA in Business Analytics, I bridge the gap between technical understanding and business objectives.
               </p>
               <p>
                 My work involves transforming raw data into actionable insights using tools like Power BI, Excel, SQL, and Python. 
                 </p>
                 <p>I have successfully contributed to revenue growth, funding analysis, and the development of decision support systems. 
                  </p>
                  <p>I am passionate about using technology and data to solve real-world business problems and thrive in collaborative, fast-paced environments where I can make an impact through innovation and continuous learning.
</p>
              <p>
                I'm constantly learning and exploring new technologies to stay at the forefront of web development trends. I'm particularly interested in creating accessible, responsive, and performant web applications.
              </p>
            </div>
            
            <div className="mt-8">
              <a href="/kishancv.pdf" download="kishancv.pdf" target="_blank" rel="noopener noreferrer">
                <Button>
                  Download CV
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 