import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { 
  FiCode, 
  FiLayout,
  FiTool,
  FiUsers
} from 'react-icons/fi';

const skillCategories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: <FiCode className="w-5 h-5" />,
    skills: ['Java', 'Python', 'SQL']
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    icon: <FiLayout className="w-5 h-5" />,
    skills: ['Agile', 'BABOK', 'BPMN']
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: <FiTool className="w-5 h-5" />,
    skills: ['SQL', 'MySQL', 'Git' , 'Power BI', 'Tableau', 'Excel']
  },
  {
    id: 'soft',
    title: 'Soft Skills',
    icon: <FiUsers className="w-5 h-5" />,
    skills: ['Communication Skills', 'Analytical Thinking' , 'Problem Solving' , 'Adaptability']
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Skills & Expertise" 
          subtitle="A showcase of my technical abilities and professional competencies"
          centered 
        />
        
        <div className="mt-16 flex gap-6 overflow-x-auto pb-4">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="flex-1 min-w-[280px] relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-gray-900 dark:text-white">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-col gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className="px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-gray-900 dark:text-white text-sm font-medium 
                      hover:scale-105 transition-all duration-300 cursor-default hover:shadow-md backdrop-blur-sm border border-white/20 text-center"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 