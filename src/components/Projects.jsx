// src/components/Projects.jsx
import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FolderGit2 } from "lucide-react";

const Projects = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // ✅ Projects Data
    const projects = [
    // 1. Full Stack
    {
        title: "Quran Academy Platform",
        description:
            "Full-stack MERN application for online Quran learning with JWT authentication, OTP verification, role-based access, and Cloudinary image upload.",
        image: "/online-quran-project-img.png",
        tech: ["React", "Node.js", "MongoDB", "Express"],
        github: "https://github.com/fatima-dev20/Al-Hafiz-Online-Quran",
        live: "https://al-hafiz-online-quran.vercel.app",
        category: "Full Stack",
    },

    // 2. Frontend - Cleaning Service
    {
        title: "Akoya Deluxe Cleaning Services",
        description:
            "A polished business website for a premium cleaning brand with service showcases, instant quote requests, and a clean, modern UI.",
        image: "/akoya-project-img.png",
        tech: ["React", "Tailwind CSS", "Redux Toolkit"],
        github: "https://github.com/fatima-dev20/lundary",
        live: "https://lundary-rose.vercel.app",
        category: "Frontend",
    },

    // 3. Frontend - Consulting
    {
        title: "Mobilia Consulting",
        description:
            "A professional consulting website with service pages, smooth animations, and a modern, responsive layout built for lead generation.",
        image: "/mobilia-consulting-project-img.png",
        tech: ["React", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/fatima-dev20/mobilia-consulting",
        live: "https://mobilia-consulting-eta.vercel.app",
        category: "Frontend",
    },

    // 4. Frontend - Sweet Cake
    {
        title: "Sweet Cakes Bakery",
        description:
            "A delicious bakery website with product gallery, smooth animations, and a modern, responsive design for showcasing sweet treats.",
        image: "/sweet-cake-project-image.png",
        tech: ["React", "Tailwind CSS", "Contect API"],
        github: "https://github.com/fatima-dev20/SweetCakes",
        live: "https://sweet-cakes-beige.vercel.app",
        category: "Frontend",
    },

    // 5. Frontend - Shipment Dashboard
    {
        title: "Shipment Dashboard",
        description:
            "A modern shipment tracking dashboard with data visualization, analytics, and a clean, responsive interface.",
        image: "/dashboard-project-image.png",
        tech: ["React", "Tailwind CSS", "Recharts"],
        github: "https://github.com/fatima-dev20/shipment-dashboard",
        live: "https://shipment-dashboard-lyart.vercel.app",
        category: "Frontend",
    },
];
    return (
        <section id="projects" className="relative pt-24  overflow-hidden">

            <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-10">

                {/*  HEADING  */}
                <div
                    className={`text-center mb-16 transition-all duration-700 ${
                        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                >
                    <p className="text-[#be95be] font-mono tracking-widest text-sm uppercase mb-2">
                        — My Work
                    </p>
                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
                        Recent <span className="text-[#be95be]">Projects</span>
                    </h2>
                    <h3 className="text-gray-500 mt-3">Modern web applications built with React,</h3>
                </div>

                {/*  PROJECTS GRID  */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:-translate-y-2 hover:border-[#be95be]/40 hover:bg-[#be95be]/[0.04] ${
                                mounted
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-4"
                            }`}
                            style={{ transitionDelay: `${index * 80}ms` }}
                        >
                            {/* ✅ Image + Category Badge Upar */}
                            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#3d2a3d] to-[#4a2c4a]">
                                {/* Placeholder Icon */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <FolderGit2 size={64} className="text-[#be95be]/20" />
                                </div>

                                {/* Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    onError={(e) => {
                                        e.target.style.display = "none";
                                    }}
                                />

                                {/* ✅ Dark Overlay (Top) */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none" />

                                {/* ✅ Category Badge - Image Ke Upar (Top Left) */}
                                <div className="absolute top-3 left-3 z-20 rounded-full border border-white/30 bg-black/70 px-3 py-1 backdrop-blur-md shadow-lg">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#be95be]">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Bottom Gradient */}
                                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-5">
                                {/* Title */}
                                <h3 className="mb-2 text-lg font-bold text-white group-hover:text-[#be95be] transition-colors duration-300">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-400">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="rounded-md border border-[#be95be]/20 bg-[#be95be]/[0.06] px-2 py-0.5 text-[10px] font-semibold text-[#be95be]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Divider */}
                                <div className="h-px w-full bg-white/10 mb-4" />

                                {/* GitHub + Live Icons (Neeche) */}
                                <div className="flex items-center gap-3">
                                    {/* GitHub */}
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="GitHub"
                                        className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-gray-300 transition-all duration-300 hover:border-[#be95be]/40 hover:bg-[#be95be]/[0.1] hover:text-[#be95be]"
                                    >
                                        <FaGithub size={14} />
                                        <span>Code</span>
                                    </a>

                                    {/* Live Demo */}
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="Live Demo"
                                        className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-gray-300 transition-all duration-300 hover:border-[#be95be]/40 hover:bg-[#be95be]/[0.1] hover:text-[#be95be]"
                                    >
                                        <FaExternalLinkAlt size={12} />
                                        <span>Live</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/*  VIEW ALL BUTTON  */}
                <div
                    className={`mt-14 flex justify-center transition-all duration-700 delay-500 ${
                        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                >
                </div>
            </div>
        </section>
    );
};

export default Projects;