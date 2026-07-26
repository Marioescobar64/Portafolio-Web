import { motion } from "framer-motion";

export function Projects() {
  // 1. AQUÍ COLOCAS TU ENLACE DE GOOGLE DRIVE:
  const urlGoogleDrive = "https://drive.google.com/drive/folders/1ki03xchbV2_sZwQCkaSyfuWQm0Q6ZVqw?usp=sharing";

  const misProyectos = [
    {
      id: 1,
      titulo: "Agenda Web",
      descripcion: "Diseño echo en JavaScript y completamente funcionable los usuarios puedad añadir eliminar y editar los contactos y las tareas",
      tecnologias: ["JavaScript", "CSS", "DockerFile"],
      linkGithub: "https://github.com/Marioescobar64/Agenda-Web", 
      linkDeploy: "https://marioescobar64.github.io/Agenda-Web/"
    },
    {
      id: 2,
      titulo: "Pagina Web",
      descripcion: "Pagina Web echo con un diseño por mi ademas puedes ver mas sobre mi",
      tecnologias: ["React.js", "Vite", "Framer Motion"],
      linkGithub: "https://github.com/Marioescobar64/Pagina-Web.git",
      linkDeploy: "https://marioescobar64.github.io/Pagina-Web/"
    },
    {
      id: 3,
      titulo: "Backend donacion de sangre",
      descripcion: "En este proyecto se encarga de manejar la logica de la donacion de sangre, ademas de interactuar con la base de datos",
      tecnologias: ["Java", "MySQL", "PostMan", "NetBeans"],
      linkGithub: "https://github.com/Marioescobar64/Proyecto-Final.git"
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

                {proyecto.linkDeploy && (
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
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sección E: Redirección directa a Google Drive */}
      <section style={{ width: "100%", marginTop: "30px" }}>
        <motion.div 
          className="glass-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ textAlign: "center", borderStyle: "dashed" }}
        >
          <h3 style={{ color: "var(--color1)", marginBottom: "15px" }}>Galería e Interfaz Visual</h3>
          <p style={{ color: "var(--color2)", marginBottom: "20px" }}>Explora capturas extendidas de pantallas y la arquitectura visual estricta de mis desarrollos en Google Drive.</p>
          
          {/* 2. BOTÓN ENLACE A GOOGLE DRIVE */}
          <a 
            href={urlGoogleDrive}
            target="_blank" 
            rel="noreferrer"
            style={{
              display: "inline-block",
              padding: "12px 30px", 
              borderRadius: "30px", 
              background: "var(--color3)",
              color: "var(--color5)", 
              border: "none", 
              fontWeight: "700", 
              cursor: "pointer", 
              textDecoration: "none",
              transition: "all 0.3s"
            }}
          >
            Ver Vista de Proyectos →
          </a>
        </motion.div>
      </section>

      <footer style={{ marginTop: "80px", textAlign: "center", fontSize: "0.9rem", color: "var(--color3)" }}>
        <p>© 2026 Mario Alejandro Escobar Silva | Portafolio Técnico Desarrollador - Taller III</p>
      </footer>
    </div>
  );
}