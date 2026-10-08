// src/components/Navbar.jsx
import { useState } from "react";
import {Home,Code2, FolderGit2, User, PhoneCall, FileText, Sun, Moon, Menu, X, Send,} from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  const navItems = [
    { name: "Home", icon: Home, href: "#home" },
    { name: "About", icon: User, href: "#about" },
    { name: "Skills", icon: Code2, href: "#skills" },
    { name: "Projects", icon: FolderGit2, href: "#projects" },
    { name: "Contact", icon: PhoneCall, href: "#contact" },
  ];

  const toggleTheme = () => setDarkMode((prev) => !prev);
  const closeMobileMenu = () => setMobileMenu(false);

  return (
    <>
      {/* ================= MAIN NAVBAR ================= */}
      <nav
        className={`
          fixed top-4 left-1/2 -translate-x-1/2
          w-[95%] max-w-6xl
          z-50
          rounded-full
          border
          backdrop-blur-md
          shadow-[0_4px_20px_rgba(190,149,190,0.15)]
          transition-all duration-300
          ${
            darkMode
              ? "bg-[#4a2c4a] border-[#3d2a3d] text-white"
              : "bg-white/90 border-gray-200 text-gray-900"
          }
        `}
      >
        <div className="px-4 py-3 flex items-center justify-between">

          {/* LOGO */}
          <a href="#home" onClick={closeMobileMenu} className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-md bg-gradient-to-br from-[#be95be] to-[#8a5f8a]">
              <Code2 size={22} strokeWidth={2.5} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl leading-5 ${darkMode ? "text-white" : "text-gray-900"}`}>
                Tehseen Chaudhry
              </span>
              <span className={`text-xs font-medium ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                MERN Stack Developer
              </span>
            </div>
          </a>

          {/* ✅ DESKTOP NAV (Center) - WITH ICONS */}
          <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={`
                        flex items-center gap-2 px-3 py-2 rounded-full text-sm cursor-pointer
                        transition-all duration-300
                        ${
                          darkMode
                            ? "text-gray-200 hover:bg-[#be95be] hover:text-white"
                            : "text-gray-700 hover:bg-[#be95be] hover:text-white"
                        }
                      `}
                    >
                      <Icon size={16} />
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full border border-[#be95be]/30 text-[#be95be] hover:bg-[#be95be] hover:text-white transition-all duration-300"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#be95be] text-white text-sm font-semibold hover:bg-[#a87aa8] hover:shadow-[0_0_20px_rgba(190,149,190,0.5)] transition-all duration-300 hover:scale-105 group"
            >
              <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              Hire Me
            </a>
          </div>

          {/* MOBILE BUTTONS */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-full border border-[#be95be]/30 text-[#be95be] hover:bg-[#be95be] hover:text-white transition-all duration-300"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenu((prev) => !prev)}
              className="p-2 rounded-lg text-[#be95be] hover:bg-[#be95be] hover:text-white transition-all"
            >
              {mobileMenu ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenu && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-50 lg:hidden">
          <div className="bg-[#4a2c4a]/95 backdrop-blur-xl rounded-2xl p-5 border border-white/20 shadow-xl">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 text-white hover:text-[#be95be] py-3 px-4 text-base font-medium transition-colors duration-300 border-b border-white/10 last:border-0"
                  >
                    <Icon size={19} />
                    {item.name}
                  </a>
                );
              })}

              <a
                href="/resume"
                onClick={closeMobileMenu}
                className="flex items-center gap-3 text-white hover:text-[#be95be] py-3 px-4 text-base font-medium transition-colors duration-300 border-b border-white/10"
              >
                <FileText size={19} />
                Resume
              </a>

              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 border border-white hover:bg-white hover:text-[#4a2c4a] text-white font-semibold px-6 py-3 rounded-full text-center transition-all duration-300 mt-3 group"
              >
                <Send size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                Hire Me
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE OVERLAY */}
      {mobileMenu && (
        <div
          onClick={closeMobileMenu}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        />
      )}
    </>
  );
};

export default Navbar;