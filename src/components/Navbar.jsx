import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const tabs = [
        { name: 'Home', to: 'hero', color: 'bg-love-spell' },
        { name: 'Projects', to: 'projects', color: 'bg-aqua' },
        { name: 'Skills', to: 'skills', color: 'bg-plum' },
        { name: 'Gallery', to: 'gallery', color: 'bg-tiffany' },
        { name: 'Contact', to: 'contact', color: 'bg-mahogany' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                onClick={toggleMenu}
                className="fixed top-5 right-5 z-50 md:hidden bg-white p-2 rounded-full shadow-lg text-mahogany"
            >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Desktop & Mobile Menu */}
            <nav className={`
                fixed z-40 transition-all duration-300 ease-in-out
                ${isOpen ? 'right-0 top-0 h-screen w-full bg-paper/95 flex items-center justify-center' : 'hidden md:flex md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 md:flex-col md:h-auto md:w-auto md:bg-transparent'}
            `}>
                <div className={`${isOpen ? 'flex flex-col gap-6 text-center' : 'flex flex-col gap-4 pr-1'}`}>
                    {tabs.map((tab, index) => (
                        <a
                            key={index}
                            href={`#${tab.to}`}
                            onClick={() => setIsOpen(false)}
                            className={`
                                ${tab.color} text-white font-hand text-xl py-2 px-6 shadow-md transition-all duration-300 relative cursor-pointer block transform hover:scale-105
                                ${isOpen ? 'rounded-lg mx-auto w-48 rotate-0' : 'rounded-l-lg hover:pr-10'}
                            `}
                            style={!isOpen ? { transform: `rotate(${index % 2 === 0 ? '-3deg' : '3deg'}) translateX(${index % 2 === 0 ? '5px' : '0px'})` } : {}}
                        >
                            {tab.name}
                            {/* Washi tape texture overlay */}
                            <div className="absolute top-0 right-0 w-full h-full bg-white opacity-20 bg-clip-padding border-l-4 border-dotted border-white/30"></div>
                        </a>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
