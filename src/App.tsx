import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Architecture from './components/Architecture';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Spotlight from './components/Spotlight';

function App() {
  return (
    <div className="relative bg-[#09090B] text-white selection:bg-indigo-500/30 selection:text-indigo-200 min-h-screen">
      {/* Ambient Spotlight Cursor Highlight */}
      <Spotlight />

      {/* Main Page Layout */}
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Architecture />
        <Projects />
        <Experience />
        <Achievements />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
