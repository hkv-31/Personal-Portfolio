import React from 'react';
import { skills } from '../data';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="skills" className="min-h-screen py-20 px-5 flex flex-col items-center relative">
            <div className="max-w-4xl w-full bg-white p-8 md:p-14 shadow-xl relative rotate-1 border border-gray-100 min-h-[600px]">
                {/* Notebook binding effect */}
                <div className="absolute left-6 top-0 bottom-0 w-px border-r border-red-200 opacity-50"></div>

                <h2 className="font-hand text-4xl text-mahogany mb-8 ml-8 underline decoration-wavy decoration-aqua">Skillset</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ml-8">
                    {skills.map((category, idx) => (
                        <div key={idx} className="mb-6">
                            <h3 className="font-hand text-2xl text-plum mb-3 bg-yellow-100 inline-block px-2 transform -rotate-1">{category.category}</h3>
                            <ul className="list-none space-y-2">
                                {category.items.map((skill, sIdx) => (
                                    <li key={sIdx} className="flex items-center font-patrick text-xl group cursor-pointer">
                                        <div className="w-5 h-5 border-2 border-gray-400 rounded-sm mr-3 flex items-center justify-center bg-white group-hover:border-mahogany transition-colors">
                                            {/* Simulated checkmark on hover/click could go here */}
                                            <div className="w-3 h-3 bg-mahogany transform scale-0 group-hover:scale-100 transition-transform duration-200 rounded-sm"></div>
                                        </div>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Sticky Note */}
                <div className="absolute -bottom-5 -right-5 w-48 h-48 bg-yellow-200 shadow-md transform -rotate-3 p-4 font-patrick text-lg flex items-center justify-center text-center text-gray-700">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-red-400 opacity-50 rotate-2"></div>
                    "Always learning something new!"
                </div>
            </div>
        </section>
    );
};
export default About;
