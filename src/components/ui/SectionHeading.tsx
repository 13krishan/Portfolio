import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string | ReactNode;
  centered?: boolean;
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  centered = false 
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl"
        >
          {subtitle}
        </motion.div>
      )}
      
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: centered ? '100px' : '60px' }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`h-1 bg-primary-500 mt-4 ${centered ? 'mx-auto' : ''}`}
      />
    </div>
  );
} 