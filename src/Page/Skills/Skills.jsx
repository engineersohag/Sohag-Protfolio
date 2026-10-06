import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import SkillCard from '../../Components/Animation/Cards/SkillCard';

// Icons
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaDatabase, 
  FaSlidersH, 
  FaServer, 
  FaPlug, 
  FaShieldAlt, 
  FaRobot, 
  FaBrain, 
  FaCogs, 
  FaSyncAlt, 
  FaAws, 
  FaCloudUploadAlt, 
  FaCloud, 
  FaLaptopCode,
  FaLayerGroup
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiBootstrap, 
  SiTailwindcss, 
  SiPhp, 
  SiLaravel, 
  SiCodeigniter, 
  SiMysql, 
  SiPostgresql, 
  SiOpenai, 
  SiGooglegemini, 
  SiClaude, 
  SiN8N, 
  SiMake, 
  SiDocker, 
  SiCpanel, 
  SiGit, 
  SiGithub 
} from 'react-icons/si';
import { 
  TbApi, 
  TbCursorText, 
  TbCpu, 
  TbPrompt, 
  TbAutomation, 
  TbWebhook 
} from 'react-icons/tb';
import { 
  MdDevices, 
  MdDesignServices, 
  MdDocumentScanner 
} from 'react-icons/md';
import { 
  RiRobot2Line, 
  RiLoopLeftLine 
} from 'react-icons/ri';

const skillCategories = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    shortName: 'Frontend',
    icon: FaLaptopCode,
    description: 'Modern, reactive user interfaces and responsive web architectures.',
    skills: [
      { id: 'fe-1', title: 'HTML5', tag: 'Markup', icon: <FaHtml5 className="text-2xl sm:text-3xl" /> },
      { id: 'fe-2', title: 'CSS3', tag: 'Styling', icon: <FaCss3Alt className="text-2xl sm:text-3xl" /> },
      { id: 'fe-3', title: 'JavaScript', tag: 'ES6+ Language', icon: <SiJavascript className="text-2xl sm:text-3xl" /> },
      { id: 'fe-4', title: 'TypeScript', tag: 'Typed JS', icon: <SiTypescript className="text-2xl sm:text-3xl" /> },
      { id: 'fe-5', title: 'React.js', tag: 'UI Library', icon: <SiReact className="text-2xl sm:text-3xl" /> },
      { id: 'fe-6', title: 'Bootstrap', tag: 'CSS Framework', icon: <SiBootstrap className="text-2xl sm:text-3xl" /> },
      { id: 'fe-7', title: 'Tailwind CSS', tag: 'Utility-First', icon: <SiTailwindcss className="text-2xl sm:text-3xl" /> },
      { id: 'fe-8', title: 'Responsive Design', tag: 'Cross-Device', icon: <MdDevices className="text-2xl sm:text-3xl" /> },
      { id: 'fe-9', title: 'UI/UX Implementation', tag: 'Design-to-Code', icon: <MdDesignServices className="text-2xl sm:text-3xl" /> },
    ]
  },
  {
    id: 'backend',
    name: 'Backend Development',
    shortName: 'Backend',
    icon: FaServer,
    description: 'Scalable server-side architectures, RESTful APIs, and secure authentication.',
    skills: [
      { id: 'be-1', title: 'PHP', tag: 'Core Language', icon: <SiPhp className="text-2xl sm:text-3xl" /> },
      { id: 'be-2', title: 'Laravel', tag: 'PHP Framework', icon: <SiLaravel className="text-2xl sm:text-3xl" /> },
      { id: 'be-3', title: 'CodeIgniter', tag: 'MVC Framework', icon: <SiCodeigniter className="text-2xl sm:text-3xl" /> },
      { id: 'be-4', title: 'RESTful API', tag: 'API Architecture', icon: <TbApi className="text-2xl sm:text-3xl" /> },
      { id: 'be-5', title: 'API Integration', tag: 'Third-Party Systems', icon: <FaPlug className="text-2xl sm:text-3xl" /> },
      { id: 'be-6', title: 'Auth & Authorization', tag: 'Security & RBAC', icon: <FaShieldAlt className="text-2xl sm:text-3xl" /> },
      { id: 'be-7', title: 'Server-side Development', tag: 'Architecture', icon: <FaServer className="text-2xl sm:text-3xl" /> },
    ]
  },
  {
    id: 'database',
    name: 'Database Architecture',
    shortName: 'Database',
    icon: FaDatabase,
    description: 'Relational database schema modeling, indexing, and high-performance querying.',
    skills: [
      { id: 'db-1', title: 'MySQL', tag: 'Relational DB', icon: <SiMysql className="text-2xl sm:text-3xl" /> },
      { id: 'db-2', title: 'PostgreSQL', tag: 'Advanced RDBMS', icon: <SiPostgresql className="text-2xl sm:text-3xl" /> },
      { id: 'db-3', title: 'Database Design', tag: 'Schema & ERD', icon: <FaDatabase className="text-2xl sm:text-3xl" /> },
      { id: 'db-4', title: 'Database Optimization', tag: 'Indexing & Tuning', icon: <FaSlidersH className="text-2xl sm:text-3xl" /> },
    ]
  },
  {
    id: 'ai',
    name: 'AI & AI-Powered Development',
    shortName: 'AI & Tools',
    icon: FaBrain,
    description: 'Leveraging cutting-edge AI models, coding engines, and automated feature integrations.',
    skills: [
      { id: 'ai-1', title: 'ChatGPT', tag: 'AI Tool', icon: <SiOpenai className="text-2xl sm:text-3xl" /> },
      { id: 'ai-2', title: 'Gemini', tag: 'AI Tool', icon: <SiGooglegemini className="text-2xl sm:text-3xl" /> },
      { id: 'ai-3', title: 'Grok', tag: 'AI Tool', icon: <FaXTwitter className="text-2xl sm:text-3xl" /> },
      { id: 'ai-4', title: 'Claude / Anthropic', tag: 'AI Tool', icon: <SiClaude className="text-2xl sm:text-3xl" /> },
      { id: 'ai-5', title: 'Cursor', tag: 'AI Code Editor', icon: <TbCursorText className="text-2xl sm:text-3xl" /> },
      { id: 'ai-6', title: 'Codex', tag: 'AI Coding Engine', icon: <FaRobot className="text-2xl sm:text-3xl" /> },
      { id: 'ai-7', title: 'OpenAI API', tag: 'AI Integration', icon: <SiOpenai className="text-2xl sm:text-3xl" /> },
      { id: 'ai-8', title: 'AI-assisted Development', tag: 'Workflow & Velocity', icon: <FaBrain className="text-2xl sm:text-3xl" /> },
      { id: 'ai-9', title: 'AI Integration', tag: 'Feature Engineering', icon: <TbCpu className="text-2xl sm:text-3xl" /> },
      { id: 'ai-10', title: 'Prompt Engineering', tag: 'Context Design', icon: <TbPrompt className="text-2xl sm:text-3xl" /> },
      { id: 'ai-11', title: 'OCR Integration', tag: 'Data Extraction', icon: <MdDocumentScanner className="text-2xl sm:text-3xl" /> },
    ]
  },
  {
    id: 'automation',
    name: 'Automation & Workflows',
    shortName: 'Automation',
    icon: TbAutomation,
    description: 'Intelligent business process automation, visual pipelines, and webhook event routing.',
    skills: [
      { id: 'auto-1', title: 'n8n', tag: 'Workflow Platform', icon: <SiN8N className="text-2xl sm:text-3xl" /> },
      { id: 'auto-2', title: 'Make.com', tag: 'Visual Automation', icon: <SiMake className="text-2xl sm:text-3xl" /> },
      { id: 'auto-3', title: 'GoHighLevel', tag: 'CRM Automation', icon: <FaCogs className="text-2xl sm:text-3xl" /> },
      { id: 'auto-4', title: 'AI Workflow Automation', tag: 'Intelligent Flows', icon: <RiRobot2Line className="text-2xl sm:text-3xl" /> },
      { id: 'auto-5', title: 'Process Automation', tag: 'Business Workflows', icon: <TbAutomation className="text-2xl sm:text-3xl" /> },
      { id: 'auto-6', title: 'API Automation', tag: 'System Sync', icon: <TbApi className="text-2xl sm:text-3xl" /> },
      { id: 'auto-7', title: 'Webhooks', tag: 'Event Triggers', icon: <TbWebhook className="text-2xl sm:text-3xl" /> },
      { id: 'auto-8', title: 'Automated Workflows', tag: 'Scheduled Tasks', icon: <FaSyncAlt className="text-2xl sm:text-3xl" /> },
    ]
  },
  {
    id: 'devops',
    name: 'DevOps & Deployment',
    shortName: 'DevOps & Cloud',
    icon: FaCloud,
    description: 'Production containerization, cloud hosting, CI/CD pipelines, and server configuration.',
    skills: [
      { id: 'dev-1', title: 'Docker', tag: 'Containerization', icon: <SiDocker className="text-2xl sm:text-3xl" /> },
      { id: 'dev-2', title: 'AWS', tag: 'Cloud Platform', icon: <FaAws className="text-2xl sm:text-3xl" /> },
      { id: 'dev-3', title: 'cPanel', tag: 'Hosting Management', icon: <SiCpanel className="text-2xl sm:text-3xl" /> },
      { id: 'dev-4', title: 'Git', tag: 'Version Control', icon: <SiGit className="text-2xl sm:text-3xl" /> },
      { id: 'dev-5', title: 'GitHub', tag: 'CI/CD & Repos', icon: <SiGithub className="text-2xl sm:text-3xl" /> },
      { id: 'dev-6', title: 'CI/CD', tag: 'Automated Releases', icon: <RiLoopLeftLine className="text-2xl sm:text-3xl" /> },
      { id: 'dev-7', title: 'Production Deployment', tag: 'Live Rollouts', icon: <FaCloudUploadAlt className="text-2xl sm:text-3xl" /> },
      { id: 'dev-8', title: 'Server Configuration', tag: 'Linux & Web Servers', icon: <FaServer className="text-2xl sm:text-3xl" /> },
      { id: 'dev-9', title: 'Cloud Deployment', tag: 'Cloud Infrastructure', icon: <FaCloud className="text-2xl sm:text-3xl" /> },
    ]
  }
];

const totalSkillsCount = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: 'easeOut' }
    }
  };

  const tabs = [
    { id: 'all', label: `All Skills (${totalSkillsCount})`, icon: FaLayerGroup },
    ...skillCategories.map(cat => ({
      id: cat.id,
      label: `${cat.shortName} (${cat.skills.length})`,
      icon: cat.icon
    }))
  ];

  const displayedCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <div className='mx-2 md:mx-0'>
      {/* Header Section */}
      <SectionHeader
        title="My Technical Skills"
        subtitle="Technologies & Tools I Work With"
      />

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                isActive
                  ? 'bg-primary text-base-100 shadow-md shadow-primary/30 scale-105'
                  : 'bg-base-100 text-base-content/70 hover:text-primary hover:bg-primary/10 border border-base-content/10'
              }`}
            >
              <Icon className={isActive ? 'text-base-100' : 'text-primary'} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Categorized Skills Section */}
      <section className='mb-16 space-y-12'>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-12"
          >
            {displayedCategories.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <div key={category.id} className="space-y-4">
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-base-content/10 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <CategoryIcon className="text-lg md:text-xl" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-base-content">
                        {category.name}
                      </h3>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-primary/15 text-primary font-semibold">
                        {category.skills.length}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-base-content/60">
                      {category.description}
                    </p>
                  </div>

                  {/* Skills Grid */}
                  <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.id}
                        variants={itemVariants}
                      >
                        <SkillCard
                          icon={skill.icon}
                          title={skill.title}
                          tag={skill.tag}
                          className="py-3.5 px-2.5 min-h-[110px]"
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Skills;