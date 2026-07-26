import { motion } from "framer-motion";

// IMPORTAMOS TUS IMÁGENES DESDE src/assets/
import controllerImg from "../assets/controller.png";
import estructuraImg from "../assets/estructura.png";
import funcion1Img from "../assets/funcion1.png";
import funcion2Img from "../assets/funcion2.png";
import mapperImg from "../assets/Mapper.png";

export function ProjectGallery({ onBack }) {
  const galeriaProyectos = [
    {
      id: 1,
      titulo: "Backend Donación de Sangre",
      descripcion: "Arquitectura de capas: Controladores, Mapeadores, Estructura general y Funcionalidades del sistema Java/MySQL.",
      capturas: [
        controllerImg,
        estructuraImg,
        funcion1Img,
        funcion2Img,
        mapperImg
      ]
    }
  ];

  return (
    <div style={{ width: "100%", maxWidth: "1100px", padding: "20px" }}>
      {/* Botón para volver */}
      <motion.button
        onClick={onBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        style={{
          padding: "10px 22px",
          borderRadius: "20px",
          border: "none",
          background: "var(--color1)",
          color: "var(--color5)",
          fontWeight: "600",
          cursor: "pointer",
          marginBottom: "30px",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}
      >
        ← Volver a Proyectos
      </motion.button>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          fontSize: "2.8rem",
          marginBottom: "10px",
          color: "var(--color1)",
          textAlign: "center"
        }}
      >
        Galería e Interfaz Visual
      </motion.h2>

      <p style={{ textAlign: "center", color: "var(--color2)", marginBottom: "40px" }}>
        Muestra detallada de captura de pantallas, estructura de bases de datos y arquitectura visual.
      </p>

      {/* Mapeo de proyectos */}
      <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
        {galeriaProyectos.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card"
          >
            <h3 style={{ fontSize: "1.8rem", color: "var(--color1)", marginBottom: "10px" }}>
              {item.titulo}
            </h3>
            <p style={{ color: "var(--color2)", marginBottom: "20px" }}>
              {item.descripcion}
            </p>

            {/* Cuadrícula de capturas */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px"
            }}>
              {item.capturas.map((imgSrc, index) => (
                <div
                  key={index}
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "1px solid var(--border-color)",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                    background: "rgba(0,0,0,0.2)"
                  }}
                >
                  <img
                    src={imgSrc}
                    alt={`${item.titulo} captura ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      display: "block"
                    }}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}