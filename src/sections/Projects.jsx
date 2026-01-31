import React from 'react';
import Polaroid from '../components/Polaroid';
import { projects } from '../data';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen py-20 px-5 relative">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center mb-16 relative justify-center md:justify-start">
                    <div className="w-16 h-4 bg-tiffany opacity-50 absolute -left-4 top-4 transform -rotate-12 hidden md:block"></div>
                    <h2 className="font-hand text-5xl text-mahogany z-10 relative pl-4">My Projects</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 p-5">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <Polaroid rotate={index % 2 === 0 ? 'rotate-1' : '-rotate-2'} className="group relative">
                                <div className="relative overflow-hidden w-64 h-64 bg-gray-100">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />

                                    {/* Paper Scrap Overlay */}
                                    <div className="absolute inset-0 bg-white/90 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-5 flex flex-col justify-center items-center shadow-inner">
                                        <p className="font-body text-sm text-gray-600 mb-4 text-center">{project.description}</p>
                                        <div className="flex gap-4">
                                            <a href={project.repoLink} className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 transition-colors" title="Code">
                                                <FaGithub />
                                            </a>
                                            <a href={project.demoLink} className="p-2 bg-plum text-white rounded-full hover:bg-love-spell transition-colors" title="Live Demo">
                                                <FaExternalLinkAlt />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 w-64">
                                    <h3 className="font-hand text-2xl text-mahogany">{project.title}</h3>
                                    <div className="flex gap-2 mt-2 flex-wrap">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-body px-2 py-1 bg-gray-100 rounded-md text-gray-500">#{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                {/* Washi tape on corner */}
                                <div className={`absolute -top-3 -right-3 w-16 h-8 ${project.color} opacity-80 transform rotate-45 mix-blend-multiply`}></div>
                            </Polaroid>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Projects;
