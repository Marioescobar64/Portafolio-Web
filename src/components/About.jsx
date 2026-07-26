import { motion } from "framer-motion";
import MiFoto from "../assets/MiFoto.jpeg";

export function About() {
  const habilidades = [
    { nombre: "React.js", porcentaje: "65%" },
    { nombre: "Node.js / Express", porcentaje: "75%" },
    { nombre: "JavaScript", porcentaje: "80%" },
    { nombre: "SQL & Bases de Datos", porcentaje: "70%" },
    { nombre: "Diseños de pagina web y  Diseños llamativos", porcentaje: "85%" },
    { nombre: "GitHub / Git", porcentaje: "75%" },
  ];

  return (
    <section style={{
      width: "100%",
      maxWidth: "900px",
      padding: "20px"
    }}>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ 
          fontSize: "3rem", 
          marginBottom: "40px", 
          color: "var(--color1)", 
          textAlign: "center" 
        }}
      >
        Sobre Mí
      </motion.h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "40px", width: "100%" }}>
        
        {/* Subsección A: Tarjeta de Presentación y autodescripción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card"
        >
          <h3 style={{ marginTop: 0, color: "var(--color1)", fontSize: "1.8rem", marginBottom: "20px" }}>
            Mario Alejandro Escobar Silva
          </h3>
          <img 
            src={MiFoto} 
            alt="Mi foto personal" 
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%", 
              objectFit: "cover", 
              display: "block",
              margin: "20px auto", 
              border: "3px solid var(--color4)", 
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
            }}
          />
          <p style={{ color: "var(--color2)", lineHeight: "1.8", fontSize: "1.1rem" }}>
            Soy estudiante de sexto perito en informática en el Centro Educativo Técnico Laboral Kinal,
            enfocado en el desarrollo backend junior y diseño web. Mi meta fundamental es integrarme al ámbito tecnológico profesional, 
            aportando capacidades óptimas en lógica de programación y persistencia de datos, 
            manteniendo siempre una formación continua hacia tecnologías de vanguardia.
          </p>

        </motion.div>

        {/* Subsección B: Datos Generales y de Contacto Directo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card"
        >
          <h3 style={{ marginTop: 0, color: "var(--color1)", fontSize: "1.5rem", marginBottom: "20px" }}>
            Información General
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "15px"
          }}>
            <p style={{ fontSize: "1.05rem" }}><strong>Nombre:</strong> Mario Alejandro Escobar Silva</p>
            <p style={{ fontSize: "1.05rem" }}><strong>Edad:</strong> 19 años</p>
            <p style={{ fontSize: "1.05rem" }}><strong>Formación:</strong> 6to Perito en Informática</p>
            <p style={{ fontSize: "1.05rem" }}><strong>Ubicación:</strong> Guatemala</p>
            
            {/* CORRECCIÓN DE ENLACES EXTERNOS (CON HTTPS://) */}
            <p style={{ fontSize: "1.05rem" }}>
              <strong>Correo:</strong>{" "}
              <a 
                href="mailto:escobarmarios9607@gmail.com"
                style={{ textDecoration: "underline" }}
              >
                escobarmarios9607@gmail.com
              </a>
            </p>
            <p style={{ fontSize: "1.05rem" }}>
              <strong>LinkedIn:</strong>{" "}
              <a 
                href="https://www.linkedin.com/in/mario-escobar-silva-b12ab7421" 
                target="_blank" 
                rel="noreferrer" 
                style={{ textDecoration: "underline", color: "var(--color3)" }}
              >
                Mi Perfil
              </a>
            </p>
          </div>
        </motion.div>

        {/* Subsección C: Gráfica / Barras de progreso de Habilidades */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card"
        >
          <h3 style={{ marginTop: 0, color: "var(--color1)", fontSize: "1.8rem", marginBottom: "25px" }}>
            Habilidades Técnicas
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {habilidades.map((hab, index) => (
              <div key={index} style={{ width: "100%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontWeight: "500" }}>
                  <span>{hab.nombre}</span>
                  <span>{hab.porcentaje}</span>
                </div>
                {/* Contenedor de la barra estadística visual */}
                <div style={{ width: "100%", height: "8px", background: "rgba(96, 76, 89, 0.2)", borderRadius: "10px", overflow: "hidden" }}>
                  <div style={{ width: hab.porcentaje, height: "100%", background: "var(--color2)", borderRadius: "10px" }}></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Subsección D: Currículum Virtual (Educación y Experiencia) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card"
        >
          <h3 style={{ marginTop: 0, color: "var(--color1)", fontSize: "1.5rem", marginBottom: "20px" }}>
            Educación y Prácticas Técnicas
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
            <div>
              <h4 style={{ color: "var(--color1)", fontSize: "1.2rem", margin: "0 0 5px 0" }}>Perito en Informática</h4>
              <p style={{ fontSize: "0.95rem", color: "var(--color3)", marginBottom: "8px" }}>Centro Educativo Técnico Laboral Kinal | 2024 - 2026</p>
              <p style={{ color: "var(--color2)" }}>Instrucción académica avanzada en lógica estructurada, bases de datos relacionales, diseño de arquitecturas de servidor y maquetación web adaptativa.</p>
            </div>
            <hr style={{ border: "0", borderTop: "1px solid var(--border-color)" }} />
            <div>
              <h4 style={{ color: "var(--color1)", fontSize: "1.2rem", margin: "0 0 5px 0" }}>Desarrollador Junior Backend & Web (Prácticas)</h4>
              <p style={{ fontSize: "0.95rem", color: "var(--color3)", marginBottom: "8px" }}>Proyectos de Taller y Prácticas Técnicas | 2026</p>
              <p style={{ color: "var(--color2)" }}>Simulación e implementación en entornos reales de control de flujos de datos, consumo de APIs seguras y desarrollo completo de interfaces interactivas bajo la rúbrica del sector profesional.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}