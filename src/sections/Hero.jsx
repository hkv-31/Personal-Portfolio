import React from 'react';
import Polaroid from '../components/Polaroid';
import { profile } from '../data';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center p-5 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-20 right-10 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10"
            >
                <Polaroid rotate="rotate-2" className="mb-10 transform hover:scale-105 transition-transform duration-500">
                    <img src={profile.profileImage} alt={profile.name} className="w-64 h-64 object-cover filter sepia-[.2]" />
                    <p className="font-hand text-center text-3xl mt-4 text-mahogany">{profile.name}</p>
                </Polaroid>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-center max-w-lg z-10"
            >
                <h1 className="font-hand text-5xl md:text-6xl text-mahogany mb-4 relative inline-block">
                    {profile.title}
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-aqua opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                    </svg>
                </h1>
                <p className="font-body text-lg text-gray-700 leading-relaxed mt-4 bg-white/50 p-4 rounded-lg shadow-sm border border-gray-100 transform -rotate-1">
                    {profile.bio}
                </p>

                <div className="mt-8 flex gap-4 justify-center">
                    <a href="#contact" className="px-6 py-2 bg-mahogany text-white font-hand text-xl rounded-full shadow-md hover:bg-plum transition-colors hover:shadow-lg transform hover:-translate-y-1">
                        Say Hello!
                    </a>
                </div>
            </motion.div>
        </section>
    );
};
export default Hero;
