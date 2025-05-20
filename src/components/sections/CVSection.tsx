// import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';

export default function CVSection() {
  return (
    <section id="cv" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Curriculum Vitae"
          subtitle="Download my detailed CV to learn more about my qualifications and experience"
          centered
        />
        
        <div className="mt-12 flex justify-center">
          <motion.a
            href="/kishancv.pdf"
            download="kishancv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiDownload className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
            Download CV
          </motion.a>
        </div>

        <div className="mt-8 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-2xl w-full"
          >
            <div className="aspect-[1/1.414] relative">
              <iframe
                src="/kishancv.pdf"
                className="w-full h-full absolute inset-0 rounded-md"
                style={{ border: 'none' }}
                title="CV Preview"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 