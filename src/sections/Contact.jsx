import React from 'react';
import { profile } from '../data';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {

    const contactItems = [
        { icon: FaPhone, label: "Mobile", value: profile.socials.mobile, href: `tel:${profile.socials.mobile}`, color: "bg-yellow-100" },
        { icon: FaEnvelope, label: "Email", value: profile.socials.email, href: `mailto:${profile.socials.email}`, color: "bg-blue-100" },
        { icon: FaLinkedin, label: "LinkedIn", value: "LinkedIn Profile", href: profile.socials.linkedin, color: "bg-green-100" },
        { icon: FaGithub, label: "GitHub", value: "GitHub Profile", href: profile.socials.github, color: "bg-purple-100" },
    ];

    return (
        <section id="contact" className="py-20 px-5 flex flex-col items-center justify-center min-h-[50vh]">

            <h2 className="font-hand text-5xl text-mahogany mb-16 relative">
                Get In Touch
                <svg className="absolute w-full h-4 -bottom-2 left-0 text-tiffany opacity-70" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
            </h2>

            {/* Contact Info Placeholders - "Sticky Notes" Style */}
            <div className="flex flex-wrap justify-center gap-8 max-w-5xl w-full">
                {contactItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`relative w-64 h-40 ${item.color} shadow-lg p-6 flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 hover:z-10 hover:shadow-xl`}
                        style={{ transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})` }}
                    >
                        {/* Pin or Tape - Removed as per request */}

                        <item.icon className="text-4xl text-gray-700 mb-3" />
                        <h3 className="font-hand text-2xl text-gray-800 mb-1">{item.label}</h3>
                        <p className="font-body text-sm text-gray-600 truncate w-full text-center hover:whitespace-normal break-words px-2">{item.value}</p>
                    </a>
                ))}
            </div>

            <p className="mt-16 font-patrick text-2xl text-gray-500 text-center max-w-2xl bg-white/60 p-4 rounded-xl rotate-1">
                "Whether you have a question or just want to say hi, I'll try my best to get back to you!"
            </p>
        </section>
    );
};
export default Contact;
