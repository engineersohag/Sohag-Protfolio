import React, { useEffect, useState } from 'react';
import Loading from '../../Components/Loading/Loading';
import SingleProject from './SingleProject';
import ProjectDetailsModal from './ProjectDetailsModal';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Projects = ({ showAllProjects = false }) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProject, setSelectedProject] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data)
                setLoading(false)
            })
    }, [setLoading, setProjects])

    if (loading) return <Loading />

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };
    const displayedProjects = showAllProjects ? projects : projects.slice(0, 6);

    return (
        <div className='mx-2 md:mx-0'>
            {/* Header Section */}
            <SectionHeader 
                title={showAllProjects ? "All Projects" : "Featured Projects"}
                subtitle={showAllProjects ? "Explore My Work" : "Showcasing My Best Work"}
            />

            {showAllProjects && (
                <div className="mb-8 text-center">
                    <Link to="/" className="btn btn-outline btn-primary">
                        Back to Portfolio
                    </Link>
                </div>
            )}

            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {
                    displayedProjects.map(project =>
                        <SingleProject
                            key={project.id}
                            project={project}
                            onDetailsClick={(proj) => {
                                setSelectedProject(proj);
                                setModalOpen(true);
                            }}
                        ></SingleProject>
                    )
                }
            </motion.div>
            {!showAllProjects && (
                <div className="mt-10 text-center">
                    <Link to="/projects" className="btn btn-primary">
                        View All Projects
                    </Link>
                </div>
            )}
            {modalOpen && (
                <ProjectDetailsModal
                    project={selectedProject}
                    onClose={() => setModalOpen(false)}
                />
            )}
        </div>
    );
};

export default Projects;