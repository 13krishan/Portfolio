import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

interface Certificate {
  title: string;
  organization: string;
  date: string;
  link: string;
}

export default function CertificatesSection() {
  const certificates: Certificate[] = [
    {
      title: "Data Analyst",
      organization: " TuteDude",
      date: "Apr' 25",
      link: "https://drive.google.com/file/d/1Vkbl25d8utPyujHYHBQNkwzjPxHH7y5Y/view"
    },{
      title: "Advanced Excel, Generative AI integration, and business problem-solving",
      organization: "Coursera",
      date: "Apr' 25",
      link: "https://drive.google.com/file/d/1a90SJ7YMBuMdcO_F4qdXS96P1x-RBk5Q/view?usp=sharing"
    },
    {
      title: "SQL for Business Analystics",
      organization: "Coursera",
      date: "Apr' 24",
      link: "https://drive.google.com/file/d/1bpAw-U-YTP8TEqyqz45RO8fAP9PfOKLZ/view?usp=sharing"
    },
    {
      title: "CForexFundedTrader",
      organization: "MFF",
      date: "Jl' 2022",
      link: "https://drive.google.com/file/d/1paYjS-Q9Q_3rUiQ-1DEw1xkPUtEv_dgY/view?usp=sharing"
    }
    
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Certificates</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{cert.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{cert.organization}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{cert.date}</p>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    <FiExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 