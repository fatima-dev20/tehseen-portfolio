// src/components/TechMarquee.jsx
import { useState } from "react";
import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaBootstrap,
    FaServer,
} from "react-icons/fa";
import {
    SiJavascript,
    SiExpress,
    SiMongodb,
    SiTailwindcss,
    SiRedux,
    SiNetlify,
    SiPostman,
    SiVercel,
    SiGithub,
} from "react-icons/si";

const TechMarquee = () => {
    // ✅ Backend Skills
    const backendSkills = [
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
        { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
        { name: "REST APIs", icon: <SiPostman />, color: "text-orange-400" },
    ];

    // ✅ Frontend Skills
    const frontendSkills = [
        { name: "React", icon: <FaReact />, color: "text-cyan-400" },
        { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
        { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
        { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-500" },
    ];

    // ✅ Tools Skills
    const toolsSkills = [
        { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
        { name: "GitHub", icon: <SiGithub />, color: "text-white" },
        { name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
        { name: "Netlify", icon: <SiNetlify />, color: "text-teal-400" },
        { name: "Render", icon: <FaServer />, color: "text-purple-400" },
        { name: "Vercel", icon: <SiVercel />, color: "text-white" },
    ];

    // ✅ Marquee Row Component
    const MarqueeRow = ({ label, skills, direction = "left" }) => (
        <div className="relative">
            <div className="border  border-white/10 rounded-xl flex items-stretch overflow-hidden bg-white/[0.02]">
                {/* Category Label */}
                <div className="group  relative flex items-center justify-center shrink-0 w-24 md:w-32 border-r border-white/10 bg-white/[0.02] transition-colors duration-300 hover:bg-white/[0.05] cursor-default overflow-hidden">
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#be95be] transition-all duration-500 group-hover:w-full"></span>
                    <span className="text-[#be95be] text-xs md:text-sm font-semibold uppercase tracking-wider transition-colors duration-300 group-hover:text-[#d4b8d4]">
                        {label}
                    </span>
                </div>

                {/* Marquee Row */}
                <div className="relative overflow-x-hidden  flex-1 py-4">
                    {/* Left Fade */}
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-8 md:w-14 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
                    {/* Right Fade */}
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-8 md:w-14 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

                    {/* Track */}
                    <div
                        className={`flex items-center gap-10 w-max  ${
                            direction === "left"
                                ? "animate-marquee-left"
                                : "animate-marquee-right"
                        }`}
                    >
                        {/* First Set */}
                        <div className="flex items-center gap-10 shrink-0">
                            {skills.map((skill, index) => (
                                <div key={index} className="relative group ">
                                    {/* Icon Box */}
                                    <div
                                        className={`flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 text-2xl ${skill.color} transition-all duration-300 group-hover:scale-110 group-hover:border-[#be95be]/40 group-hover:bg-[#be95be]/[0.05]`}
                                    >
                                        {skill.icon}
                                    </div>

                                    {/* ✅ Tooltip - Icon Ke Saath (Up) */}
                                    <div className="absolute left-1/2 -translate-x-1/2 -top-5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50">
                                        <div className="rounded-full border border-[#be95be]/40 bg-[#4a2c4a]/95 px-3 mt-1 py-1  backdrop-blur-sm shadow-lg">
                                            <span className="text-[10px] font-semibold uppercase tracking-wider text-white">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Duplicate Set */}
                        <div className="flex items-center  gap-10 shrink-0" aria-hidden="true">
                            {skills.map((skill, index) => (
                                <div key={index} className="relative group ">
                                    {/* Icon Box */}
                                    <div
                                        className={`flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 text-2xl ${skill.color} transition-all duration-300 group-hover:scale-110 group-hover:border-[#be95be]/40 group-hover:bg-[#be95be]/[0.05]`}
                                    >
                                        {skill.icon}
                                    </div>

                                    {/* ✅ Tooltip - Icon Ke Saath (Up) */}
                                    <div className="absolute left-1/2 -translate-x-1/2 -top-5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50">
                                        <div className="rounded-full border border-[#be95be]/40 bg-[#4a2c4a]/95 px-3 mt-1 py-1 backdrop-blur-sm shadow-lg">
                                            <span className="text-[10px] font-semibold uppercase tracking-wider text-white">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section id="skills" className="relative pt-24 overflow-hidden">
            <div className="relative mx-auto max-w-6xl w-full px-6 lg:px-10">
                {/* Heading */}
                <div className="text-center mb-14">
                    <p className="text-[#be95be] font-mono tracking-widest text-sm uppercase mb-2">
                        — Tech Stack
                    </p>
                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
                        Technologies I{" "}
                        <span className="text-[#be95be]">work with</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#be95be] to-[#8a5f8a] mx-auto mt-4 rounded-full" />
                </div>

                {/* Marquee Rows */}
                <div className="space-y-4 ">
                    <MarqueeRow label="Backend" skills={backendSkills} direction="left" />
                    <MarqueeRow label="Frontend" skills={frontendSkills} direction="right" />
                    <MarqueeRow label="Tools" skills={toolsSkills} direction="left" />
                </div>
            </div>

            {/* ✅ Marquee Animation */}
            <style>{`
                @keyframes marquee-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                @keyframes marquee-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }

                .animate-marquee-left {
                    animation: marquee-left 25s linear infinite;
                }

                .animate-marquee-right {
                    animation: marquee-right 25s linear infinite;
                }

                .animate-marquee-left:hover,
                .animate-marquee-right:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default TechMarquee;