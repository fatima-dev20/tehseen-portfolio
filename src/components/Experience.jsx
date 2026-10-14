// src/components/EducationExperience.jsx
import { useEffect, useState } from "react";
import { GraduationCap, Briefcase, Calendar, Sparkles } from "lucide-react";

const Experience = () => {
    const [mounted, setMounted] = useState(false);
    const [activeTab, setActiveTab] = useState("experience");

    useEffect(() => {
        setMounted(true);
    }, []);

    // ✅ Education Data
    const education = [
        {
            degree: "Bachelor of Information Technology",
            institution: "The Islamia University of Bahawalpur",
            period: "2022 - 2026",
        },
        {
            degree: "Intermediate (ICS)",
            institution: "Govt. Associate College For Women Dahranwala  ",
            period: "2020 - 2022",
        },
    ];

    // ✅ Experience Data
    const experiences = [

    {
        title: "MERN Stack Developer Trainee",
        company: "CodeLab Pvt. Ltd.",
        period: "Jun 2026 - Sep 2026",
        type: "Remote",
        description: [
            "Developed responsive web applications using React.js, JavaScript, HTML5, CSS3, and Tailwind CSS with reusable components.",
            "Built RESTful APIs and backend services using Node.js, Express.js, MongoDB, and Mongoose.",
            "Implemented Redux Toolkit, RTK Query, JWT authentication, and Role-Based Access Control (RBAC).",
            "Integrated Nodemailer for transactional emails and managed Git/GitHub workflows.",
        ],
    },
    {
        title: "Frontend Developer",
        company: "CodesLab Pvt. Ltd.",
        period: "Jun 2025 - May 2026",
        type: "Remote",
        description: [
            "Developed responsive web interfaces using React.js, JavaScript, HTML5, and CSS3.",
            "Built reusable React components to improve code structure and maintainability.",
            "Created responsive layouts compatible with desktop, tablet, and mobile devices.",
        ],
    },

        {
            title: "Seeking Internship",
            company: "MERN Stack Development",
            period: "Available Now",
            type: "Remote / On-site",
            current: true,
            description: [
                "Actively looking for MERN Stack internship opportunities",
                "Eager to learn from experienced developers",
                "Quick learner with a growth mindset",
            ],
        },
    ];

    return (
        <section id="journey" className="relative pt-24  overflow-hidden">

            <div className="relative mx-auto max-w-4xl w-full px-6 lg:px-10">

                {/*  HEADING  */}
                <div
                    className={`text-center mb-12 transition-all duration-700 ${
                        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                >
                    <p className="text-[#be95be] font-mono tracking-widest text-sm uppercase mb-2">
                        — My Journey
                    </p>
                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
                        Education &{" "}
                        <span className="text-[#be95be]">Experience</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#be95be] to-[#8a5f8a] mx-auto mt-4 rounded-full" />
                    
                </div>

                {/*  TABS  */}
                <div
                    className={`flex justify-center mb-12 transition-all duration-700 delay-100 ${
                        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                >
                    <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-sm">

                        {/* Experience Tab */}
                        <button
                            onClick={() => setActiveTab("experience")}
                            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                                activeTab === "experience"
                                    ? "bg-gradient-to-r from-[#be95be] to-[#8a5f8a] text-white shadow-lg shadow-[#be95be]/30"
                                    : "text-gray-400 hover:text-[#be95be]"
                            }`}
                        >
                            <Briefcase size={16} />
                            Experience
                        </button>

                        {/* Education Tab */}
                        <button
                            onClick={() => setActiveTab("education")}
                            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                                activeTab === "education"
                                    ? "bg-gradient-to-r from-[#be95be] to-[#8a5f8a] text-white shadow-lg shadow-[#be95be]/30"
                                    : "text-gray-400 hover:text-[#be95be]"
                            }`}
                        >
                            <GraduationCap size={16} />
                            Education
                        </button>
                    </div>
                </div>

                {/*  TIMELINE  */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#be95be]/40 via-[#be95be]/20 to-transparent md:-translate-x-1/2" />

                    {/*  EXPERIENCE TAB  */}
                    {activeTab === "experience" && (
                        <div className="animate-fadeIn">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className={`relative flex items-start mb-10 last:mb-0 ${
                                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                                >
                                    {/* Icon Circle */}
                                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                                        <div
                                            className={`flex h-9 w-9 items-center justify-center rounded-full border-2 ${
                                                exp.current
                                                    ? "border-green-500/60 bg-[#0a0a0a] shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                                                    : "border-[#be95be]/40 bg-[#0a0a0a] shadow-[0_0_20px_rgba(190,149,190,0.3)]"
                                            }`}
                                        >
                                            {exp.current ? (
                                                <Sparkles size={16} className="text-green-400" />
                                            ) : (
                                                <Briefcase size={16} className="text-[#be95be]" />
                                            )}
                                        </div>
                                    </div>

                                    {/* Spacer */}
                                    <div className="w-12 md:w-1/2" />

                                    {/* Card */}
                                    <div
                                        className={`flex-1 md:w-1/2 ${
                                            index % 2 === 0 ? "md:pl-10" : "md:pr-10"
                                        }`}
                                    >
                                        <div
                                            className={`group rounded-2xl border p-5 transition-all duration-500 hover:-translate-y-1 ${
                                                exp.current
                                                    ? "border-green-500/30 bg-green-500/[0.03] hover:border-green-500/50"
                                                    : "border-white/10 bg-white/[0.02] hover:border-[#be95be]/40 hover:bg-[#be95be]/[0.04]"
                                            }`}
                                        >
                                            {/* Badges */}
                                            <div className="flex flex-wrap items-center gap-2 mb-3">
                                                <div className="inline-flex items-center gap-1.5 rounded-full border border-[#be95be]/20 bg-[#be95be]/[0.08] px-3 py-1">
                                                    <Calendar size={11} className="text-[#be95be]" />
                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#be95be]">
                                                        {exp.period}
                                                    </span>
                                                </div>
                                                <div
                                                    className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                                                        exp.current
                                                            ? "border-green-500/40 bg-green-500/10 text-green-400"
                                                            : "border-white/20 bg-white/[0.05] text-gray-400"
                                                    }`}
                                                >
                                                    {exp.type}
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h3
                                                className={`text-lg font-bold mb-1 transition-colors ${
                                                    exp.current
                                                        ? "text-green-400"
                                                        : "text-white group-hover:text-[#be95be]"
                                                }`}
                                            >
                                                {exp.title}
                                            </h3>

                                            {/* Company */}
                                            <p className="text-sm font-medium text-[#be95be]/80 mb-4">
                                                {exp.company}
                                            </p>

                                            {/* Description */}
                                            <ul className="space-y-2">
                                                {exp.description.map((item, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-start gap-2 text-sm text-gray-500"
                                                    >
                                                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#be95be]/60" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/*  EDUCATION TAB  */}
                    {activeTab === "education" && (
                        <div className="animate-fadeIn">
                            {education.map((edu, index) => (
                                <div
                                    key={index}
                                    className={`relative flex items-start mb-10 last:mb-0 ${
                                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                                >
                                    {/* Icon Circle */}
                                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#be95be]/40 bg-[#0a0a0a] shadow-[0_0_20px_rgba(190,149,190,0.3)]">
                                            <GraduationCap size={16} className="text-[#be95be]" />
                                        </div>
                                    </div>

                                    {/* Spacer */}
                                    <div className="w-12 md:w-1/2" />

                                    {/* Card */}
                                    <div
                                        className={`flex-1 md:w-1/2 ${
                                            index % 2 === 0 ? "md:pl-10" : "md:pr-10"
                                        }`}
                                    >
                                        <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#be95be]/40 hover:bg-[#be95be]/[0.04]">
                                            {/* Period */}
                                            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#be95be]/20 bg-[#be95be]/[0.08] px-3 py-1 mb-3">
                                                <Calendar size={11} className="text-[#be95be]" />
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-[#be95be]">
                                                    {edu.period}
                                                </span>
                                            </div>

                                            {/* Degree */}
                                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#be95be] transition-colors">
                                                {edu.degree}
                                            </h3>

                                            {/* Institution */}
                                            <p className="text-sm font-medium text-[#be95be]/80 mb-2">
                                                {edu.institution}
                                            </p>

                                            {/* Grade */}
                                            <p className="text-xs font-semibold text-gray-400 mb-3">
                                                {edu.grade}
                                            </p>

                                            {/* Description */}
                                            <p className="text-sm text-gray-500 leading-relaxed">
                                                {edu.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* ✅ Fade In Animation */}
            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out;
                }
            `}</style>
        </section>
    );
};


export default Experience;