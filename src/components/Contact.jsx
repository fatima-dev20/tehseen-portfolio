// src/components/Contact.jsx
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { Send, MapPin, Phone } from "lucide-react";
import { toast } from "react-toastify";

const Contact = () => {
    const [mounted, setMounted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // ✅ Submit - WhatsApp par bhejein (No Backend)
    const handleSubmit = (e) => {
        e.preventDefault();

        const whatsappMessage = `*New Contact Form*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
        const whatsappUrl = `https://wa.me/923194649177?text=${whatsappMessage}`;

        window.open(whatsappUrl, "_blank");
        toast.success("Opening WhatsApp...");

        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="relative pt-16 sm:pt-20 lg:pt-24 pb-10 overflow-hidden">
            <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-10">

                {/* ================= HEADING ================= */}
                <div
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="text-center mb-10 sm:mb-16"
                >
                    <p className="text-[#be95be] font-mono tracking-widest text-xs sm:text-sm uppercase mb-2">
                        — Get In Touch
                    </p>
                    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                        Contact <span className="text-[#be95be]">Me</span>
                    </h2>
                    <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#be95be] to-[#8a5f8a] mx-auto mt-3 sm:mt-4 rounded-full" />
                </div>

                {/* ================= MAIN GRID ================= */}
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-10">

                    {/* ================= LEFT SIDE - Info ================= */}
                    <div
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        className="space-y-5 sm:space-y-6"
                    >
                        {/* Heading */}
                        <div
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay="100"
                        >
                            <h3 className="text-xl sm:text-2xl font-bold text-[#be95be] mb-3">
                                Contact Information
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                                I'm actively looking for a{" "}
                                <span className="text-[#be95be] font-semibold">
                                    MERN Stack internship
                                </span>{" "}
                                where I can learn, grow, and contribute to real-world projects.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-3 sm:space-y-4">
                            {/* Email */}
                            <a
                                href="mailto:fatimachaudhry0777@gmail.com"
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="200"
                                className="group flex items-center gap-3 sm:gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-3 sm:p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#be95be]/40 hover:bg-[#be95be]/[0.05]"
                            >
                                <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#4a2c4a] text-[#be95be] shadow-lg transition-transform duration-300 group-hover:scale-110">
                                    <LuMail size={18} className="sm:w-5 sm:h-5" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                                        Email
                                    </p>
                                    <p className="text-xs sm:text-sm font-medium text-white group-hover:text-[#be95be] transition-colors truncate">
                                        fatimachaudhry0777@gmail.com
                                    </p>
                                </div>
                            </a>

                            {/* Phone */}
                            <a
                                href="tel:+923194649177"
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="300"
                                className="group flex items-center gap-3 sm:gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-3 sm:p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#be95be]/40 hover:bg-[#be95be]/[0.05]"
                            >
                                <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#4a2c4a] text-[#be95be] shadow-lg transition-transform duration-300 group-hover:scale-110">
                                    <Phone size={18} className="sm:w-5 sm:h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                                        Phone
                                    </p>
                                    <p className="text-xs sm:text-sm font-medium text-white group-hover:text-[#be95be] transition-colors">
                                        +92 319 4649177
                                    </p>
                                </div>
                            </a>

                            {/* Location */}
                            <div
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="400"
                                className="group flex items-center gap-3 sm:gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-3 sm:p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#be95be]/40 hover:bg-[#be95be]/[0.05]"
                            >
                                <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#4a2c4a] text-[#be95be] shadow-lg transition-transform duration-300 group-hover:scale-110">
                                    <MapPin size={18} className="sm:w-5 sm:h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                                        Location
                                    </p>
                                    <p className="text-xs sm:text-sm font-medium text-white group-hover:text-[#be95be] transition-colors">
                                        Lahore, Pakistan
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay="500"
                            className="pt-2 rounded-2xl border border-white/10 bg-white/[0.02] p-3 sm:p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#be95be]/40 hover:bg-[#be95be]/[0.05]"
                        >
                            <p className="text-sm sm:text-base font-semibold tracking-wider text-gray-100 mb-3">
                                Connect With Me
                            </p>
                            <div className="flex items-center gap-2 sm:gap-3">
                                <a
                                    href="https://github.com/fatima-dev20"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="GitHub"
                                    className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#be95be]/40 hover:bg-[#be95be]/[0.08] hover:text-[#be95be]"
                                >
                                    <LuGithub size={18} className="sm:w-5 sm:h-5" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/tehseen-fatima-957a07370/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="LinkedIn"
                                    className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#be95be]/40 hover:bg-[#be95be]/[0.08] hover:text-[#be95be]"
                                >
                                    <LuLinkedin size={18} className="sm:w-5 sm:h-5" />
                                </a>

                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=tehseenchaudhry0777@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Email"
                                    className="relative z-10 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#be95be]/40 hover:bg-[#be95be]/[0.08] hover:text-[#be95be]"
                                >
                                    <LuMail size={18} className="sm:w-5 sm:h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ================= RIGHT SIDE - Form ================= */}
                    <div
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4 sm:space-y-5 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 lg:p-8"
                        >
                            {/* Form Heading */}
                            <div
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="300"
                                className="mb-2"
                            >
                                <h3 className="text-lg sm:text-xl font-bold text-[#be95be]">
                                    Send a Message
                                </h3>
                            </div>

                            {/* Name */}
                            <div
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="400"
                            >
                                <label className="mb-2 block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300 focus:border-[#be95be]/50 focus:bg-[#be95be]/[0.02] focus:ring-2 focus:ring-[#be95be]/10"
                                />
                            </div>

                            {/* Email */}
                            <div
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="500"
                            >
                                <label className="mb-2 block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                    className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300 focus:border-[#be95be]/50 focus:bg-[#be95be]/[0.02] focus:ring-2 focus:ring-[#be95be]/10"
                                />
                            </div>

                            {/* Message */}
                            <div
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="600"
                            >
                                <label className="mb-2 block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                                    Your Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about the internship opportunity..."
                                    rows="5"
                                    required
                                    className="w-full resize-none rounded-xl border border-white/10 bg-[#0a0a0a] px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300 focus:border-[#be95be]/50 focus:bg-[#be95be]/[0.02] focus:ring-2 focus:ring-[#be95be]/10"
                                />
                            </div>

                            {/* Submit Button */}
                            <div
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="700"
                            >
                                <button
                                    type="submit"
                                    className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-3 sm:py-3.5 text-sm font-semibold bg-[#4a2c4a] text-[#be95be] shadow-lg shadow-[#be95be]/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-[#be95be]/40"
                                >
                                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                                    <Send
                                        size={16}
                                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;