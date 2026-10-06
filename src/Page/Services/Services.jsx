import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaBolt, FaServer, FaTools } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';
import { TbAutomation } from 'react-icons/tb';
import { SiDocker } from 'react-icons/si';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';

const Services = () => {

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 35, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const services = [
        {
            id: 1,
            icon: FaCode,
            title: "Full-Stack Web Development",
            description: "Building complete, modern web applications from robust backend architecture to responsive frontends.",
            features: [
                "End-to-end development with PHP, Laravel, and React.js ecosystems.",
                "Clean-code engineering following SOLID principles and modular design.",
                "High-performance Single Page Applications (SPA) with TypeScript & MySQL/PostgreSQL."
            ]
        },
        {
            id: 2,
            icon: FaBrain,
            title: "AI-Powered Web Development",
            description: "Integrating intelligent AI capabilities and OpenAI APIs to automate workflows and elevate user experiences.",
            features: [
                "OpenAI API integration for smart features, automated workflows, and assistants.",
                "AI-driven semantic processing, structured document handling, and OCR extraction.",
                "Custom prompt-driven automations embedded directly into web applications."
            ]
        },
        {
            id: 3,
            icon: FaBolt,
            title: "AI-Assisted Rapid Development",
            description: "Multiplying development velocity using modern AI coding tools while maintaining strict code quality and security.",
            features: [
                "Accelerated delivery utilizing Cursor, Claude, ChatGPT, Gemini, and Codex.",
                "Experienced engineering judgment ensuring rock-solid architecture and maintainability.",
                "Handling multi-developer workloads with rapid turnaround and high quality."
            ]
        },
        {
            id: 4,
            icon: TbAutomation,
            title: "Business Process Automation",
            description: "Designing automated business workflows that eliminate repetitive manual tasks and maximize operational efficiency.",
            features: [
                "Intelligent workflows built across n8n, Make.com, and GoHighLevel.",
                "Multi-system API automation, event-driven Webhooks, and data synchronization.",
                "Automated document processing with OCR and OpenAI endpoint integrations."
            ]
        },
        {
            id: 5,
            icon: MdDesignServices,
            title: "UI/UX to Production Development",
            description: "Converting Figma concepts and UI designs into responsive, production-ready interfaces connected to backend APIs.",
            features: [
                "Pixel-perfect translation of Figma designs to React.js and Tailwind CSS.",
                "Seamless integration with RESTful backend endpoints and state management.",
                "Accessible, mobile-first design with smooth micro-interactions and transitions."
            ]
        },
        {
            id: 6,
            icon: FaServer,
            title: "API & Backend Development",
            description: "Developing secure RESTful APIs, authentication systems, business logic, and scalable server-side systems.",
            features: [
                "Stateless RESTful APIs with JWT, token authentication, and security layers.",
                "Granular Role-Based Access Control (RBAC) and complex business logic.",
                "Scalable Laravel and PHP architectures with optimized database schemas."
            ]
        },
        {
            id: 7,
            icon: SiDocker,
            title: "Docker, AWS & Cloud Deployment",
            description: "Taking codebases from local development all the way to containerized, live production cloud environments.",
            features: [
                "Containerized deployment workflows using Docker and Docker Compose.",
                "Production setup and cloud hosting on AWS and cPanel environments.",
                "Automated CI/CD deployment pipelines configured via Git and GitHub."
            ]
        },
        {
            id: 8,
            icon: FaTools,
            title: "Website Deployment & Maintenance",
            description: "Deploying, configuring, troubleshooting, optimizing, and maintaining production websites and web applications.",
            features: [
                "Live production rollout, domain setup, SSL certificates, and server configuration.",
                "Database maintenance, speed optimization, and security hardening.",
                "Proactive troubleshooting, bug fixes, updates, and ongoing system health."
            ]
        }
    ];

    return (
        <div className='mx-2 md:mx-0'>
            {/* Header Section */}
            <SectionHeader
                title="My Services"
                subtitle="End-to-End Solutions I Provide"
            />

            {/* Services Grid */}
            <motion.div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-7'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {services.map((service) => {
                    const Icon = service.icon;
                    return (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.02,
                                y: -8,
                                transition: { duration: 0.3 }
                            }}
                            className='group relative overflow-hidden rounded-2xl md:rounded-3xl 
                            bg-base-100 flex flex-col justify-between
                            shadow-xl hover:shadow-2xl hover:shadow-primary/20
                            border border-base-content/10 hover:border-primary/40
                            transition-all duration-500 ease-out'
                        >
                            {/* Decorative Background Elements */}
                            <div className='absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-primary/10 rounded-full blur-3xl 
                                group-hover:bg-primary/20 transition-all duration-500 -translate-y-1/2 translate-x-1/2'></div>
                            <div className='absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-secondary/10 rounded-full blur-2xl 
                                group-hover:bg-secondary/20 transition-all duration-500 translate-y-1/2 -translate-x-1/2'></div>

                            {/* Card Content */}
                            <div className='relative z-10 p-6 md:p-7 flex flex-col h-full'>
                                {/* Icon Badge */}
                                <div className='inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 
                                    bg-primary rounded-2xl
                                    shadow-lg shadow-primary/30 mb-5
                                    group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500'>
                                    <Icon className='text-3xl md:text-4xl text-base-100' />
                                </div>

                                {/* Title */}
                                <h2 className='text-lg md:text-xl font-bold text-primary mb-2.5 leading-snug'>
                                    {service.title}
                                </h2>

                                {/* Short Description */}
                                <p className='text-xs md:text-sm text-base-content/70 mb-4 leading-relaxed'>
                                    {service.description}
                                </p>

                                {/* Divider */}
                                <div className='w-14 h-1 bg-primary rounded-full mb-4 
                                    group-hover:w-full transition-all duration-500'></div>

                                {/* Features List */}
                                <ul className='space-y-2 md:space-y-2.5 mt-auto'>
                                    {service.features.map((feature, index) => (
                                        <li key={index} className='flex items-start gap-2 text-xs md:text-sm text-base-content leading-relaxed'>
                                            <svg className='w-4 h-4 text-primary flex-shrink-0 mt-0.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                                            </svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Hover Shine Effect */}
                            <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'>
                                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-base-content/5 to-transparent 
                                    translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000'></div>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default Services;