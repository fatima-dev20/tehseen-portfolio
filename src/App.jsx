// src/App.jsx
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
// import TechMarquee from "./components/TechMarquee";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {
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