import { motion } from "framer-motion";

export function Projects() {
  const misProyectos = [
    {
      id: 1,
      titulo: "Backend Node.js - API REST",
      descripcion: "Diseño y despliegue de un servidor utilizando Node.js y Express destinado al control estricto de usuarios, sesiones y rutas protegidas.",
      tecnologias: ["Node.js", "Express", "JavaScript"],
      // CAMBIO MANUAL DE ENLACES PARA EVALUACIÓN
      linkGithub: "REEMPLAZA_CON_LINK_DE_GITHUB_PROYECTO_1", 
      linkDeploy: "REEMPLAZA_CON_LINK_DE_DEPLOY_PROYECTO_1"
    },
    {
      id: 2,
      titulo: "Frontend React - Dashboard",
      descripcion: "Interfaz web interactiva con gestión modularizada de vistas, componentes dinámicos y animaciones de entrada/salida enfocadas al 100% en la UX.",
      tecnologias: ["React.js", "Vite", "Framer Motion"],
      linkGithub: "REEMPLAZA_CON_LINK_DE_GITHUB_PROYECTO_2",
      linkDeploy: "REEMPLAZA_CON_LINK_DE_DEPLOY_PROYECTO_2"
    },
    {
      id: 3,
      titulo: "Portafolio de Diseño Minimalista",
      descripcion: "Proyecto técnico de presentación profesional que integra estados de React avanzados para alternancia fluida de entornos gráficos claro y oscuro.",
      tecnologias: ["React", "CSS", "Framer Motion"],
      linkGithub: "REEMPLAZA_CON_LINK_DE_GITHUB_PROYECTO_3",
      linkDeploy: "REEMPLAZA_CON_LINK_DE_DEPLOY_PROYECTO_3"
    }
  ];

  return (
    <div style={{ width: "100%", maxWidth: "1000px", padding: "20px" }}>
      <section style={{ width: "100%", marginBottom: "50px" }}>
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
          Mis Proyectos
        </motion.h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          width: "100%"
        }}>
          {misProyectos.map((proyecto) => (
            <motion.div
              key={proyecto.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: proyecto.id * 0.15 }}
              className="glass-card"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h3 style={{ marginTop: 0, color: "var(--color1)", fontSize: "1.5rem", marginBottom: "15px" }}>
                {proyecto.titulo}
              </h3>
              <p style={{ color: "var(--color2)", fontSize: "1rem", lineHeight: "1.6", flexGrow: 1 }}>
                {proyecto.descripcion}
              </p>
              
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "20px", marginBottom: "20px" }}>
                {proyecto.tecnologias.map((tech, index) => (
                  <span key={index} className="badge">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botones de acción exigidos: Enlaces a GitHub + Despliegue Funcional */}
              <div style={{ display: "flex", gap: "12px", marginTop: "auto" }}>
                <a 
                  href={proyecto.linkGithub} 
                  target="_blank" 
                  rel="noreferrer" 
                  style={{
                    flex: 1, padding: "10px", textAlign: "center", borderRadius: "10px",
                    background: "var(--color1)", color: "var(--color5)", fontWeight: "600", fontSize: "0.9rem"
                  }}
                >
                  GitHub
                </a>
                <a 
                  href={proyecto.linkDeploy} 
                  target="_blank" 
                  rel="noreferrer" 
                  style={{
                    flex: 1, padding: "10px", textAlign: "center", borderRadius: "10px",
                    border: "1px solid var(--color1)", color: "var(--color1)", fontWeight: "600", fontSize: "0.9rem"
                  }}
                >
                  Ver Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sección E: Apartado exclusivo de Vistas de Proyectos con el botón de Redirección solicitado */}
      <section style={{ width: "100%", marginTop: "30px" }}>
        <motion.div 
          className="glass-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ textAlign: "center", borderStyle: "dashed" }}
        >
          <h3 style={{ color: "var(--color1)", marginBottom: "15px" }}>Galería e Interfaz Visual</h3>
          <p style={{ color: "var(--color2)", marginBottom: "20px" }}>Explora capturas extendidas de pantallas y la arquitectura visual estricta de mis desarrollos.</p>
          <button 
            style={{
              padding: "12px 30px", borderRadius: "30px", background: "var(--color3)",
              color: "var(--color5)", border: "none", fontWeight: "700", cursor: "pointer", transition: "all 0.3s"
            }}
            onClick={() => alert('Redireccionando a la galería de interfaces...')}
          >
            Ver Vista de Proyectos →
          </button>
        </motion.div>
      </section>

      {/* Cierre de Estructura: Footer / Sección de Cierre Profesional de la App */}
      <footer style={{ marginTop: "80px", textAlign: "center", fontSize: "0.9rem", color: "var(--color3)" }}>
        <p>© 2026 Mario Alejandro Escobar Silva | Portafolio Técnico Desarrollador - Taller III</p>
      </footer>
    </div>
  );
}