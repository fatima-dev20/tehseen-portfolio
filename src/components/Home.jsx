// src/components/Home.jsx
import { useEffect, useState } from "react";
import { FaRocket, FaDownload } from "react-icons/fa";
import { LuGithub, LuLinkedin } from "react-icons/lu";

const Home = () => {
    // ✅ Typing Animation
    const roles = [
        "MERN Stack Developer",
        "Frontend Developer",
        "React Developer",
    ];
    const [currentRole, setCurrentRole] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const role = roles[currentRole];
        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    setCurrentText(role.substring(0, currentText.length + 1));
                    if (currentText === role) {
                        setTimeout(() => setIsDeleting(true), 1500);
                    }
                } else {
                    setCurrentText(role.substring(0, currentText.length - 1));
                    if (currentText === "") {
                        setIsDeleting(false);
                        setCurrentRole((prev) => (prev + 1) % roles.length);
                    }
                }
            },
            isDeleting ? 50 : 100
        );

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentRole]);

    return (
        <section
            id="home"
            className="relative flex items-center overflow-hidden pt-24 sm:pt-28 md:pt-20"
        >
            <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-16">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/*  LEFT SIDE  */}
                    <div className="lg:col-span-6 w-full text-center lg:text-start">

                        {/* Hello */}
                        <span
                            data-aos="fade-down"
                            data-aos-duration="800"
                            className="text-white font-mono tracking-widest text-sm sm:text-base lg:text-lg inline-block"
                        >
                            👋 Hello, I'm
                        </span>

                        {/* Name */}
                        <h1
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                            className="text-[#be95be] text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-2 mt-2"
                        >
                            Tehseen Fatima
                        </h1>

                        {/* Typing Animation */}
                        <div
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-delay="400"
                            className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-4 min-h-[40px] flex flex-wrap items-center justify-center lg:justify-start gap-1 sm:gap-2"
                        >
                            <span className="text-gray-400">and I'm a</span>
                            <span className="text-[#be95be] break-all">
                                {currentText}
                                <span className="text-[#be95be] animate-pulse">_</span>
                            </span>
                        </div>

                        {/* Description */}
                        <p
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="600"
                            className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                        >
                            A passionate{" "}
                            <span className="text-white font-semibold">
                                MERN Stack Developer
                            </span>{" "}
                            focused on building modern, responsive web
                            applications with clean code and intuitive user
                            experiences.
                        </p>

                        {/* CTA Buttons */}
                        <div
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="800"
                            className="flex flex-col xs:flex-row flex-row gap-3 mb-6 items-center lg:items-start justify-center lg:justify-start"
                        >
                            {/* View Projects */}
                            <button
                                onClick={() =>
                                    document
                                        .getElementById("projects")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="relative lg:px-10 xs:w-auto bg-gradient-to-r from-[#be95be] to-[#8a5f8a] text-white px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-500 transform hover:scale-105 shadow-lg overflow-hidden group whitespace-nowrap"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-in-out" />
                                <FaRocket className="z-10 text-sm sm:text-base" />
                                <span className="z-10">View Projects</span>
                            </button>

                            {/* Download CV */}
                            <a
                                href="/Tehseen_Fatima_MERN_Stack.pdf"
                                download
                                className="relative lg:px-10 xs:w-auto border-2 border-[#be95be] text-[#be95be] px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-500 transform hover:scale-105 hover:bg-[#be95be] hover:text-white shadow-md group overflow-hidden whitespace-nowrap"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-in-out" />
                                <FaDownload className="z-10 text-sm sm:text-base" />
                                <span className="z-10">Download CV</span>
                            </a>
                        </div>

                        {/* Connect With Me */}
                        <div
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="1000"
                        >
                            <div className="flex justify-center lg:justify-start items-center gap-3">
                                {/* GitHub */}
                                <a
                                    href="https://github.com/fatima-dev20"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="GitHub"
                                    className="group flex flex-col items-center gap-2"
                                >
                                    <div className="text-[#be95be] border border-[#be95be]/30 hover:border-transparent flex justify-center items-center group-hover:shadow-[0_0_15px_#be95be] h-11 w-11 sm:h-12 sm:w-12 rounded-2xl transition-all duration-500 transform">
                                        <LuGithub size={20} />
                                    </div>
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/tehseen-fatima-957a07370/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="LinkedIn"
                                    className="group flex flex-col items-center gap-2"
                                >
                                    <div className="text-[#be95be] border border-[#be95be]/30 hover:border-transparent flex justify-center items-center group-hover:shadow-[0_0_15px_#be95be] h-11 w-11 sm:h-12 sm:w-12 rounded-2xl transition-all duration-500 transform">
                                        <LuLinkedin size={20} />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*  RIGHT SIDE  */}
                    <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        data-aos-delay="400"
                        className="relative flex min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[570px] items-center justify-center lg:col-span-6 mt-8 lg:mt-0"
                    >
                        {/* Rotating Dashed Ring */}
                        <div
                            className="absolute h-[260px] w-[260px] xs:h-[280px] xs:w-[280px] sm:h-[360px] sm:w-[360px] md:h-[420px] md:w-[420px] lg:h-[460px] lg:w-[460px] rounded-full border-2 border-dashed border-[#be95be]/70"
                            style={{ animation: "spin 30s linear infinite" }}
                        />

                        {/* Rotating Dotted Ring */}
                        <div
                            className="absolute h-[290px] w-[290px] xs:h-[310px] xs:w-[310px] sm:h-[400px] sm:w-[400px] md:h-[460px] md:w-[460px] lg:h-[500px] lg:w-[500px] rounded-full border border-[#9d72ff]/40"
                            style={{ animation: "spin 40s linear infinite reverse" }}
                        />

                        {/* Static Glow */}
                        <div className="absolute h-[230px] w-[230px] xs:h-[250px] xs:w-[250px] sm:h-[320px] sm:w-[320px] md:h-[380px] md:w-[380px] lg:h-[420px] lg:w-[420px] rounded-full bg-gradient-to-br from-[#be95be]/20 via-transparent to-[#9d72ff]/20 blur-2xl" />

                        {/* MAIN CIRCLE - Image */}
                        <div className="relative z-20 flex items-center justify-center">
                            {/* Animated Gradient Ring */}
                            <div
                                className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#be95be] via-[#9d72ff] to-[#be95be] opacity-60 blur-md"
                                style={{ animation: "spin 8s linear infinite" }}
                            />

                            {/* Circle Container */}
                            <div className="relative h-[220px] w-[220px] xs:h-[240px] xs:w-[240px] sm:h-[300px] sm:w-[300px] md:h-[360px] md:w-[360px] lg:h-[420px] lg:w-[420px] rounded-full overflow-hidden border-4 border-[#be95be]/50 shadow-[0_0_60px_rgba(190,149,190,0.5),0_0_120px_rgba(139,92,246,0.25)]">
                                <img
                                    src="/profile-image.png"
                                    alt="Tehseen Chaudhry"
                                    className="absolute inset-0 h-full w-full object-cover object-center"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 via-transparent to-[#be95be]/10 pointer-events-none" />

                                <div className="absolute inset-3 rounded-full border border-white/10 pointer-events-none" />
                            </div>

                            {/* BADGE - Bottom Right */}
                            <div className="group absolute bottom-0 right-[-5px] xs:right-[-10px] sm:bottom-[10px] sm:right-[-10px] lg:right-[-20px] z-40 flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border border-white/15 bg-[#090e1d]/95 px-2.5 py-2 sm:px-4 sm:py-3 shadow-[0_15px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#9d72ff]/30 hover:shadow-[0_15px_45px_rgba(139,92,246,0.2)]">
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-500 animate-pulse"></span>
                                    <span className="text-[10px] xs:text-xs sm:text-sm text-green-500 font-medium whitespace-nowrap">
                                        Open to Internship
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;