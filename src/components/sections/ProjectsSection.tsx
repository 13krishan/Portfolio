import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

// Project data
const projects = [
  {
    id: 1,
    title: 'Apple market sales visualization with python',
    description: 'Developed an interactive data analysis and visualization project focused on Apples market sales trends. The goal was to analyze product performance, regional distribution, and yearly growth using Python libraries. The visualizations provided a clearer understanding of market dynamics and supported strategic sales planning.',
    image: '/Dashboard.jpg',
    technologies: ['Google Colab' , 'Keggle', 'PowerBI'],
    features: [
      'Processed sales data from Kaggle and other open sources',
      'Visualized complex datasets using Matplotlib, Seaborn, and Plotly',
      'Identified key insights in regional and product-wise performance',
      'Presented clear, actionable charts for business reporting'
    ],
    github: 'https://github.com/NamanPrakash99/Weather-Forecast',
    live: 'https://weather-forecast-sage-five.vercel.app/',
    date: 'Sep 2024'
  },
  {
    id: 2,
    title: 'Decision Support System',
    description: 'Designed and implemented a Decision Support System (DSS) aimed at enhancing strategic business decision-making. This system integrated multiple data sources and applied advanced data visualization techniques using Power BI and Excel. Additionally, machine learning models were incorporated to extract predictive insights, allowing stakeholders to make data-driven decisions more effectively.',
    image: '/Dashboard.png',
    technologies: ['Power BI', 'Excel', 'Machine Learning', 'Data Visualization', 'Python', 'SQL'],
    features: [
      'Integrated diverse datasets for unified analysis.',
      'Applied machine learning algorithms to generate predictive models',
      'Created interactive dashboards to monitor KPIs and performance trends',
      'Delivered actionable insights for business growth and risk mitigation'
    ],
    github: 'https://github.com/NamanPrakash99/CCTV-Surveillance',
    live: 'https://smart-surveillance-demo.example.com',
    date: 'Oct 2024'
  }
  
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Projects" 
          subtitle="A selection of my recent development work."
          centered
        />
        
        <div className="mt-12">
          {/* Project Tabs */}
          <div className="flex flex-wrap justify-center mb-8">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`px-4 py-2 mx-2 mb-2 rounded-full transition-colors ${
                  activeProject.id === project.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>
          
          {/* Active Project Display */}
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {/* Project Image */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full aspect-video object-cover object-center"
              />
            </div>
            
            {/* Project Info */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {activeProject.title}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {activeProject.date}
                </span>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {activeProject.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Key Features:
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                  {activeProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                {activeProject.github && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <FiGithub className="mr-2" />
                    <span>View Code</span>
                  </a>
                )}
                
                {activeProject.live && (
                  <a
                    href={activeProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <FiExternalLink className="mr-2" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 