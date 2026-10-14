// src/components/Home.jsx
import { useEffect, useState } from "react";
import { FaRocket, FaDownload } from "react-icons/fa";
import { LuGithub, LuLinkedin } from "react-icons/lu";  // ✅ Sahi
import { BarChart3 } from "lucide-react";

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
            className="relative  flex items-center  overflow-hidden pt-28 md:pt-20 "
        >

            <div className="relative mx-auto max-w-7xl w-full   px-6 lg:px-16">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/*  LEFT SIDE  */}
                    <div className="lg:col-span-6 w-full text-center lg:text-start">

                        {/* Hello */}
                        <span className="text-white font-mono tracking-widest text-base sm:text-lg">
                            👋 Hello, I'm
                        </span>

                        {/* Name */}
                        <h1 className="text-[#be95be] text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-2 mt-2">
                            Tehseen Fatima
                        </h1>

                        {/* Typing Animation */}
                        <div className="text-lg sm:text-xl md:text-2xl font-medium mb-4 h-10 sm:h-12 flex items-center justify-center lg:justify-start gap-2">
                            <span className="text-gray-400">and I'm a</span>
                            <span className="text-[#be95be]">
                                {currentText}
                                <span className="text-[#be95be] animate-pulse">_</span>
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                            A passionate <span className="text-white font-semibold">MERN Stack Developer</span> focused on building modern,
                            responsive web applications with clean code and intuitive user experiences.

                        </p>


                        {/* CTA Buttons */}
                        <div className="flex  flex-row gap-3 sm:gap-4 mb-6 items-center lg:items-start justify-center lg:justify-start">

                            {/* View Projects */}
                            <button
                                onClick={() =>
                                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="relative bg-gradient-to-r from-[#be95be] to-[#8a5f8a] text-white px-5 py-2.5  rounded-xl font-semibold text-base flex items-center gap-2 transition-all duration-500 transform hover:scale-110 shadow-lg overflow-hidden group whitespace-nowrap"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-in-out" />
                                <FaRocket className="z-10" />
                                <span className="z-10">View Projects</span>
                            </button>

                            {/* Download CV */}
                            <a
                                href="/Tehseen_Fatima_MERN_Stack.pdf"
                                download
                                className="relative border-2 border-[#be95be] text-[#be95be] px-5 py-2.5  rounded-xl font-semibold text-base flex items-center gap-2 transition-all duration-500 transform hover:scale-110 hover:bg-[#be95be] hover:text-white shadow-md group overflow-hidden whitespace-nowrap"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-in-out" />
                                <FaDownload className="z-10" />
                                <span className="z-10">Download CV</span>
                            </a>
                        </div>

                        {/* Connect With Me */}
                        <div className="">
                            <div className="flex justify-center lg:justify-start items-center gap-3">

                                {/* GitHub */}
                                <a
                                    href="https://github.com/fatima-dev20"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="GitHub"
                                    className="group flex flex-col items-center gap-2"
                                >
                                    <div className="text-[#be95be] border border-[#be95be]/30 hover:border-transparent flex justify-center items-center  group-hover:shadow-[0_0_15px_#be95be] h-12 w-12 rounded-2xl transition-all duration-500 transform ">
                                        <LuGithub size={22} />
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
                                    <div className="text-[#be95be] border border-[#be95be]/30 hover:border-transparent flex justify-center items-center  group-hover:shadow-[0_0_15px_#be95be] h-12 w-12 rounded-2xl transition-all duration-500 transform">
                                        <LuLinkedin size={22} />
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>

                    {/*  RIGHT SIDE  */}
                    <div className="relative flex min-h-[530px] items-center justify-center lg:col-span-6 lg:min-h-[570px]">

                        {/* Rotating Dashed Ring */}
                        <div
                            className="absolute h-[380px] w-[380px] rounded-full border-2 border-dashed border-[#be95be]/70 sm:h-[440px] sm:w-[440px] lg:h-[460px] lg:w-[460px]"
                            style={{ animation: "spin 30s linear infinite" }}
                        />

                        {/* Rotating Dotted Ring */}
                        <div
                            className="absolute h-[420px] w-[420px] rounded-full border border-[#9d72ff]/40 sm:h-[480px] sm:w-[480px] lg:h-[500px] lg:w-[500px]"
                            style={{ animation: "spin 40s linear infinite reverse" }}
                        />

                        {/* Static Glow */}
                        <div className="absolute h-[340px] w-[340px] rounded-full bg-gradient-to-br from-[#be95be]/20 via-transparent to-[#9d72ff]/20 blur-2xl sm:h-[400px] sm:w-[400px] lg:h-[420px] lg:w-[420px]" />

                        {/* MAIN CIRCLE - Image */}
                        <div className="relative z-20 flex items-center justify-center">

                            {/* Animated Gradient Ring */}
                            <div
                                className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#be95be] via-[#9d72ff] to-[#be95be] opacity-60 blur-md"
                                style={{ animation: "spin 8s linear infinite" }}
                            />

                            {/* Circle Container */}
                            <div className="relative h-[340px] w-[340px] rounded-full overflow-hidden border-4 border-[#be95be]/50 shadow-[0_0_60px_rgba(190,149,190,0.5),0_0_120px_rgba(139,92,246,0.25)] sm:h-[400px] sm:w-[400px] lg:h-[420px] lg:w-[420px]">
                                <img
                                    src="/profile-image.png"
                                    alt="Tehseen Chaudhry"
                                    className="absolute inset-0 h-full w-full object-cover object-center"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 via-transparent to-[#be95be]/10 pointer-events-none" />

                                <div className="absolute inset-3 rounded-full border border-white/10 pointer-events-none" />
                            </div>

                            {/* BADGE - Bottom Right */}
                            <div className="group absolute bottom-[10px] right-[-10px] z-40 flex items-center gap-3 rounded-2xl border border-white/15 bg-[#090e1d]/95 px-4 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#9d72ff]/30 hover:shadow-[0_15px_45px_rgba(139,92,246,0.2)] sm:right-[-20px]">

                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                                    <span className="text-sm text-green-500">
                                        Open to MERN Internship
                                    </span>
                                </div>
                            </div>

                            {/* FRONTEND BADGE - Top Left */}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;