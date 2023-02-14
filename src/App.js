import Header from "./components/Header";
import { useState } from "react";
function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  );
}

export default App;
