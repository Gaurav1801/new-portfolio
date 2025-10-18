import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import FloatingContactButton from "./components/FloatingContactButton";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
    return (
        <div className="bg-gradient-to-br from-[#6A5ACD] via-[#483D8B] to-[#8A2BE2] text-white min-h-screen">
            <Navbar />
            <Main />
            <FloatingContactButton />
            <About />
            <Skills />
            <Project />
            <Contact/>
            <Footer />
        </div>
    );
}

export default App;