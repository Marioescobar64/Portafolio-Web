import { motion } from "framer-motion";

export function Hero() {
  return (
    <section style={{
      height: "70vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "20px"
    }}>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontFamily: "var(--font-heading)",
          color: "var(--color3)",
          textTransform: "uppercase",
          letterSpacing: "3px",
          fontWeight: "600",
          marginBottom: "20px"
        }}
      >
        Portafolio
      </motion.p>
      
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ 
          fontSize: "4.5rem", 
          marginBottom: "20px", 
          color: "var(--color1)",
          lineHeight: "1.1"
        }}
      >
        Desarrollador <br/> <span style={{ color: "var(--color2)" }}>& Diseñador</span> Web
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        style={{ 
          fontSize: "1.25rem", 
          color: "var(--color2)", 
          maxWidth: "600px",
          lineHeight: "1.6"
        }}
      >
        Estudiante técnico apasionado por crear experiencias digitales elegantes, combinando código limpio y diseño intuitivo.
      </motion.p>
    </section>
  );
}