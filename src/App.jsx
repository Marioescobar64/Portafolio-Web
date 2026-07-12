import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("inicio");
  const [theme, setTheme] = useState("light");

  // Hook que escucha los cambios de tema y altera la propiedad global del HTML
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="app-container">
      {/* Enviamos el tema y la función para cambiarlo directamente a la Navbar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      <main className="tab-content">
        <AnimatePresence mode="wait">
          {activeTab === "inicio" && (
            <motion.div
              key="inicio"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              style={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Hero />
            </motion.div>
          )}

          {activeTab === "sobre-mi" && (
            <motion.div
              key="sobre-mi"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              style={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <About />
            </motion.div>
          )}

          {activeTab === "proyectos" && (
            <motion.div
              key="proyectos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              style={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Projects />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;