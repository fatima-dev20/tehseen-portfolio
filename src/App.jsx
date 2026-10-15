// src/App.jsx
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
// import TechMarquee from "./components/TechMarquee";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    // ✅ Loading Screen
    if (isLoading) {
        return <Loading />;
    }


// ✅ AOS Initialize
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
});
    return (
        <div className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
            <Navbar />

            <main className="relative">
                <Home />
                <About />
                <Skills />
                {/* <TechMarquee /> */}
                <Projects />
                <Experience />
                <Contact />
            </main>

            <Footer />

            <ToastContainer
                position="top-right"
                autoClose={3000}
                theme="dark"
            />
        </div>
    );
}

export default App;