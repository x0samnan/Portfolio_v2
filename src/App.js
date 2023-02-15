import Hero from "./components/Hero";
import Header from "./components/Header";
import { useState } from "react";
import Skills from "./components/Skills";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>

      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Hero />
        <Skills />
      </main>
    </div>
  );
}

export default App;
