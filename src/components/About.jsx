// src/components/About.jsx
import { useEffect, useState } from "react";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import AboutRight from "./AboutRight";

const About = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // ✅ Features
    const features = [
        {
            icon: <FaCode />,
            title: "Clean Code",
            desc: "Writing maintainable and well-documented code.",
        },
        {
            icon: <FaLaptopCode />,
            title: "Responsive Design",
            desc: "Building mobile-first web applications.",
        },
        {
            icon: <FaRocket />,
            title: "Performance",
            desc: "Optimizing apps for speed and best UX.",
        },
    ];

    return (
        <section
            id="about"
            className="relative py-5 overflow-hidden"
        >
            
            <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-10">

                {/* ================= HEADING ================= */}
                <div
                    className={`text-center  transition-all duration-700 ${
                        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    }`}
                >
                    <p className="text-[#be95be] font-mono tracking-widest text-sm uppercase mb-2">
                        — About Me
                    </p>
                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
                        Get to <span className="text-[#be95be]">know me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#be95be] to-[#8a5f8a] mx-auto mt-4 rounded-full" />
                </div>

                {/* ================= MAIN GRID - 2 COLUMNS ================= */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* ================= LEFT SIDE - About Text ================= */}
                     <div
                        className={`flex items-center justify-center transition-all duration-700 delay-200 ${
                            mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                        }`}
                    >
                        <AboutRight />
                    </div>
                   

                    {/* ================= RIGHT SIDE - SkillsOrbit ================= */}
                    <div
                        className={`space-y-6 transition-all duration-700 delay-100 ${
                            mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                        }`}
                    >
                        {/* Heading */}
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                A passionate{" "}
                                <span className="text-[#be95be]">
                                    MERN Stack Developer
                                </span>{" "}
                                from Pakistan
                            </h3>

                            <p className="text-gray-400 leading-relaxed mb-4">
                                I'm a{" "}
                                <span className="text-white font-semibold">
                                    passionate fresher
                                </span>{" "}
                                MERN Stack Developer with a strong foundation in
                                building full-stack web applications. I've completed{" "}
                                <span className="text-[#be95be] font-semibold">
                                    9 projects
                                </span>{" "}
                                — 8 frontend and 1 full-stack, giving me hands-on
                                experience in real-world development.
                            </p>

                            <p className="text-gray-400 leading-relaxed">
                                I specialize in{" "}
                                <span className="text-white font-semibold">
                                    MongoDB
                                </span>
                                ,{" "}
                                <span className="text-white font-semibold">
                                    Express.js
                                </span>
                                ,{" "}
                                <span className="text-white font-semibold">
                                    React.js
                                </span>
                                , and{" "}
                                <span className="text-white font-semibold">
                                    Node.js
                                </span>
                                . I love turning complex problems into simple,
                                beautiful designs — and I'm always eager to learn
                                and grow.
                            </p>
                        </div>


                        {/* Features - Inline */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2 transition-all duration-300 hover:border-[#be95be]/40 hover:bg-[#be95be]/[0.05]"
                                >
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#be95be] to-[#8a5f8a] text-white text-sm">
                                        {feature.icon}
                                    </div>
                                    <span className="text-xs font-semibold text-white">
                                        {feature.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default About;