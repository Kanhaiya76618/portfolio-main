import "@/App.css";
import Navbar from "@/components/Navbar";
import GradientOrbs from "@/components/GradientOrbs";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Contact from "@/components/Contact";

function App() {
    return (
        <div className="App relative" data-testid="app-root">
            {/* Global drifting gradient orb background */}
            <GradientOrbs />

            <Navbar />

            <main>
                <Hero />
                <About />
                <Achievements />
                <Skills />
                <Projects />
                <Research />
                <Contact />
            </main>
        </div>
    );
}

export default App;
