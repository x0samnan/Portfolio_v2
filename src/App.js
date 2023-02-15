import Hero from "./components/Hero";
import Header from "./components/Header";
import { useState } from "react";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>

      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
