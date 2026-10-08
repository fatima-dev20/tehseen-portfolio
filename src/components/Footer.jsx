// src/components/Footer.jsx
import { FaHeart } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative border-t border-white/10">
            <div className="mx-auto max-w-6xl px-6 lg:px-10 py-6">

                {/* ✅ Flex Row - Copyright + Back to Top */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

                    {/* Copyright */}
                    <p className="text-xs text-gray-500 text-center sm:text-left">
                        © {currentYear} <span className="text-[#be95be] font-bold">Tehseen Chaudhry</span>. All rights reserved. 
                        {/* Crafted with using React.js & Tailwind CSS */}
                    </p>

                    {/* Back to Top */}
                    <button
                        onClick={scrollToTop}
                        aria-label="Back to top"
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#4a2c4a] px-3 py-2 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#be95be]/40 hover:bg-[#be95be]/[0.08] hover:text-[#be95be] group"
                    >
                        Back to Top
                        <ArrowUp
                            size={14}
                            className="transition-transform duration-300 group-hover:-translate-y-1"
                        />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;