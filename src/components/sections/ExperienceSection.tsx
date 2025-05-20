import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { FiBriefcase, FiBook } from 'react-icons/fi';
import React from 'react';

interface ActivityItem {
  id: number;
  type: string;
  title: string;
  organization: string;
  location?: string;
  description: string;
  date: string;
  icon: React.ReactNode;
}

// Work experience data
const workExperiences: ActivityItem[] = [
  {
    id: 1,
    type: 'work',
    title: 'Relationship Manager',
    organization: 'Startek (Flipkart)',
    location: 'Noida',
    description: 'Managed key client relationships and increased revenue by 13%.',
    date: 'Feb 2024 - Oct 2024',
    icon: <FiBriefcase />
  },
  {
    id: 2,
    type: 'work',
    title: 'Analyst',
    organization: 'Havenark',
    description: 'Conducted data analysis and managed $4M in funding.',
    date: 'Sep 2022 - Feb 2024',
    icon: <FiBriefcase />
  },
  {
    id: 3,
    type: 'work',
    title: 'Business Developer',
    organization: 'Upskillz',
    description: 'Guided students about Upskillz services and opportunities.',
    date: 'Mar 2022 - Sep 2022',
    icon: <FiBriefcase />
  }
];

// Education data
const educations: ActivityItem[] = [
  {
    id: 4,
    type: 'education',
    title: 'MBA - Business Analytics',
    organization: 'Lovely Professional University',
    location: 'Punjab',
    description: '',
    date: 'Aug 2024 - Present',
    icon: <FiBook />
  },
  {
    id: 5,
    type: 'education',
    title: 'B.Tech - CSE',
    organization: 'Lovely Professional University',
    location: 'Punjab',
    description: '',
    date: 'Apr 2019 - Mar 2023',
    icon: <FiBook />
  },
  {
    id: 6,
    type: 'education',
    title: 'Intermediate',
    organization: 'Delhi Public School',
    location: 'Hisar',
    description: '',
    date: 'Apr 2018 - Mar 2019',
    icon: <FiBook />
  }
];

// Tabs order
const tabs: ('work' | 'education')[] = ['work', 'education'];

export default function ExperienceSection() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activeTab = tabs[activeTabIndex];

  const handleToggle = () => {
    setActiveTabIndex((prevIndex) => (prevIndex + 1) % tabs.length);
  };

  const getItemsToRender = (): ActivityItem[] => {
    switch (activeTab) {
      case 'work':
        return workExperiences;
      case 'education':
        return educations;
      default:
        return [];
    }
  };

  const tabTitles: Record<string, string> = {
    work: 'Work Experience',
    education: 'Education'
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Journey Overview"
          subtitle="Explore my work and academic records"
          centered
        />

        {/* Toggle Button */}
        <div className="text-center mb-12">
          <button
            onClick={handleToggle}
            className="px-6 py-2 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition"
          >
            Show {tabTitles[tabs[(activeTabIndex + 1) % tabs.length]]}
          </button>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />

          <div className="space-y-12">
            {getItemsToRender().map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } items-center md:items-start`}
              >
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-primary-500 text-white">
                  {item.icon}
                </div>
                <div
                  className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    {item.organization}
                  </p>
                  {item.location && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {item.location}
                    </p>
                  )}
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
