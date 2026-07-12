import { motion } from "framer-motion";

export function Navbar({ activeTab, setActiveTab, theme, toggleTheme }) {
  
  const handleTabClick = (e, tabId) => {
    e.preventDefault(); 
    setActiveTab(tabId);
  };

  const getLinkStyle = (tabId) => {
    const isActive = activeTab === tabId;
    return {
      color: isActive ? "var(--color1)" : "var(--color2)",
      fontWeight: isActive ? "700" : "500",
      letterSpacing: "1px",
      textDecoration: "none",
      cursor: "pointer",
      padding: "8px 16px",
      borderRadius: "20px",
      background: isActive ? "var(--color4)" : "transparent",
      transition: "all 0.3s ease",
      fontFamily: "var(--font-heading)"
    };
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 20,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        alignItems: "center", // Centra verticalmente los links y el botón
        justifyContent: "center",
        gap: "1rem",
        padding: "0.75rem 1.5rem",
        background: "var(--nav-bg)",
        backdropFilter: "blur(12px)",
        border: "1px solid var(--border-color)",
        borderRadius: "50px",
        boxShadow: "0 4px 20px rgba(69, 49, 67, 0.1)",
        zIndex: 100,
        width: "fit-content"
      }}
    >
      <a href="#inicio" onClick={(e) => handleTabClick(e, "inicio")} style={getLinkStyle("inicio")}>Inicio</a>
      <a href="#sobre-mi" onClick={(e) => handleTabClick(e, "sobre-mi")} style={getLinkStyle("sobre-mi")}>Sobre Mí</a>
      <a href="#proyectos" onClick={(e) => handleTabClick(e, "proyectos")} style={getLinkStyle("proyectos")}>Proyectos</a>
      
      {/* Botón Alternador Profesional */}
      <button 
        onClick={toggleTheme}
        style={{
          background: "var(--color4)",
          border: "none",
          color: "var(--color1)",
          cursor: "pointer",
          padding: "6px 12px",
          borderRadius: "20px",
          fontFamily: "var(--font-heading)",
          fontWeight: "600",
          fontSize: "0.85rem",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          transition: "all 0.3s ease"
        }}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </motion.nav>
  );
}