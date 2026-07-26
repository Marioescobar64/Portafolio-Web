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

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="app-container" style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      
      {/* VIDEO DINÁMICO QUE CAMBIA SEGÚN EL TEMA */}
      <video
        key={theme} // Importante para re-renderizar el video al cambiar de modo
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -2
        }}
      >
        <source 
          src={theme === "light" ? "src/assets/video/videofondo.mp4" : "src/assets/video/videoFondoOscuro.mp4"} 
          type="video/mp4" 
        />
        Tu navegador no soporta el formato de video.
      </video>

      {/* CAPA DE CAPTURA / OVERLAY PARA ASEGURAR LEGIBILIDAD */}
      <div 
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: theme === "dark" ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.2)",
          zIndex: -1,
          pointerEvents: "none"
        }}
      />

      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      <main className="tab-content" style={{ position: "relative", zIndex: 1 }}>
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