import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Frameworks from "./components/Frameworks";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ScrollToTop from "./components/Scroll-to-top";
import Contact from "./components/Contact.jsx";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-900 antialiased">
      <div
        class="fixed inset-0 -z-10 min-h-screen bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
        style={{ backgroundColor: "#FFFAEE" }}
      ></div>
      <Navbar />
      <Hero />
      <About />
      <Frameworks />
      <Experience />
      <Projects />
      <Contact />
      <ScrollToTop/>
    </div>
  );
};

export default App;
