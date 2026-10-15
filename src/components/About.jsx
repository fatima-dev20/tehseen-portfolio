// src/components/About.jsx
import { useEffect, useState } from "react";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
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
            className="relative pt-16 sm:pt-20 lg:pt-24 overflow-hidden"
        >
            <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-10">

                {/* HEADING */}
                <div
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="text-center transition-all duration-700"
                >
                    <p className="text-[#be95be] font-mono tracking-widest text-xs sm:text-sm uppercase mb-2">
                        — About Me
                    </p>
                    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                        Get to <span className="text-[#be95be]">know me</span>
                    </h2>
                    <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#be95be] to-[#8a5f8a] mx-auto mt-3 sm:mt-4 rounded-full" />
                </div>

                {/* MAIN GRID - 2 COLUMNS */}
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ">

                    {/* LEFT SIDE - AboutRight (Orbit) */}
                    <div
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                        className="flex items-center justify-center w-full overflow-hidden order-2 lg:order-1"
                    >
                        <AboutRight />
                    </div>

                    {/* RIGHT SIDE - Text */}
                    <div
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                        className="space-y-5 sm:space-y-6 order-1 lg:order-2"
                    >
                        {/* Introduction */}
                        <div>
                            <h3
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="400"
                                className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-5 leading-snug"
                            >
                                Building for the web with{" "}
                                <span className="text-[#be95be]">MERN Stack</span>
                            </h3>

                            <p
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="500"
                                className="text-gray-400 text-sm sm:text-base leading-7 mb-3 sm:mb-4"
                            >
                                I'm a junior web developer from Pakistan who enjoys
                                building responsive and user-friendly web applications.
                                I like taking an idea, working through the challenges,
                                and turning it into something functional and easy to use.
                            </p>

                            <p
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="600"
                                className="text-gray-400 text-sm sm:text-base leading-7"
                            >
                                I work with{" "}
                                <span className="text-white font-medium">
                                    MongoDB, Express.js, React, and Node.js
                                </span>
                                , along with Tailwind CSS, Git, and GitHub. I'm looking
                                for an opportunity to gain industry experience, learn
                                from experienced developers, and improve my skills by
                                contributing to real-world projects.
                            </p>
                        </div>

                        {/* Highlights */}
                        <div
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay="700"
                            className="flex flex-wrap gap-2 sm:gap-3 pt-2"
                        >
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    data-aos="zoom-in"
                                    data-aos-duration="600"
                                    data-aos-delay={800 + index * 100}
                                    className="group flex items-center gap-2 sm:gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-2.5 sm:px-3 py-2 sm:py-2.5 transition-all duration-300 hover:border-[#be95be]/40 hover:bg-[#be95be]/[0.05]"
                                >
                                    <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#be95be] to-[#8a5f8a] text-white text-xs sm:text-sm">
                                        {feature.icon}
                                    </div>

                                    <span className="text-xs sm:text-sm font-medium text-gray-200">
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