import { FaLaptopCode, FaRocket, FaHeart, FaStar, FaCode, FaPaintBrush } from 'react-icons/fa';

export const profile = {
    name: "Hetanshi Vora",
    title: "B.Tech Student & Developer",
    bio: "Food, Code, and Chaos. I thrive in the mess.",
    profileImage: "/images/profile-placeholder.png",
    socials: {
        github: "https://github.com/hkv-31",
        linkedin: "https://in.linkedin.com/in/hetanshi-vora-student",
        email: "hetanshi.vora.0506@gmail.com",
        mobile: "+91 8657473314"
    }
};

export const projects = [
    {
        id: 1,
        title: "NASA HERC 2025 Team Mushak",
        image: "/images/portfolio-2.jpg",
        description: "STEM Engagement Lead",
        demoLink: "https://team-mushak-stem-project.web.app/",
        repoLink: "#",
        tags: ["STEM", "Outreach", "Team Lead", "SpaceTech"],
        color: "bg-love-spell"
    },
    {
        id: 2,
        title: "AI-Powered Marketing Agent",
        image: "/images/profile-placeholder.png",
        description: "AI-driven marketing agent to generate brand-aligned social media content by analyzing real-time trends and brand context",
        demoLink: "/images/trendlyai.mp4",
        repoLink: "https://github.com/hkv-31/AI-Marketing-Agent",
        tags: ["Python", "API", "Flask", "Web Search"],
        color: "bg-plum"
    },
    {
        id: 3,
        title: "Particle Track Reconstruction with ML",
        image: "/images/Gemini_Generated_journal page style.png",
        description: "Reconstructed particle trajectories by clustering 3D detector hit coordinates using K-Means and DBSCAN",
        demoLink: "#",
        repoLink: "https://github.com/hkv-31/Particle-Track-Reconstruction",
        tags: ["Python", "K-Means", "DBSCAN"],
        color: "bg-love-spell"
    },
];

export const skills = [
    { category: "Languages", items: ["Python", "Java", "CQL", "SQL", "HTML", "CSS", "React", "JavaScript"] },
    { category: "Tools & Platforms", items: ["Jupyter Notebook", "MongoDB", "MySQL Workbench", "Redis", "Neo4j", "Orange", "Postman", "Wireshark", "Git"] },
    { category: "Operating Systems", items: ["Linux", "Windows"] },
    { category: "ML Algorithms", items: ["Decision Trees", "Random Forest", "K-Means Clustering", "ARM", "XGBoost", "LightGBM"] },
    { category: "Soft skills", items: ["Analytical Thinking", "Team Collaboration", "Leadership"] }
];

export const galleryImages = [
    { src: "/images/portfolio-2.jpg", caption: "Portfolio Work", rotate: "rotate-2" },
    { src: "/images/profile-placeholder.png", caption: "Profile", rotate: "-rotate-1" },
    { src: "/images/colour palette.jpg", caption: "Design Process", rotate: "-rotate-2" },
    { src: "/images/Gemini_Generated_journal page style.png", caption: "Journaling", rotate: "rotate-3" },
];

export const stickers = [
    { icon: FaLaptopCode, top: "10%", left: "5%", color: "text-mahogany", size: "text-4xl", rotate: "-rotate-12", id: 1 },
    { icon: FaRocket, bottom: "10%", right: "10%", color: "text-plum", size: "text-5xl", rotate: "rotate-6", id: 2 },
    { icon: FaHeart, top: "20%", right: "20%", color: "text-love-spell", size: "text-3xl", rotate: "rotate-12", id: 3 },
    { icon: FaStar, bottom: "30%", left: "15%", color: "text-aqua", size: "text-4xl", rotate: "-rotate-3", id: 4 },
];
