import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Cloud } from "@react-three/drei";

export function CloudsBackground() {
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    // 1. Efecto Parallax en el eje Y (al hacer scroll)
    const scrollY = window.scrollY;
    // Las nubes se mueven ligeramente más rápido que el sol para dar sensación de profundidad (3D)
    cloudsRef.current.position.y = scrollY * -0.005;
    
    // 2. Viento natural en el eje X usando el reloj interno del sistema
    cloudsRef.current.position.x = Math.sin(clock.elapsedTime * 0.1) * 0.8;
  });

  return (
    <group ref={cloudsRef} position={[0, 0, -5]}>
      {/* Nube 1: Derecha. Gris muy tenue */}
      <Cloud opacity={0.7} speed={0.4} width={12} depth={1.5} segments={30} position={[5, 2, -2]} color="#e2e8f0" />
      
      {/* Nube 2: Izquierda. Gris un poco más oscuro (sombras de tormenta lejana) */}
      <Cloud opacity={0.6} speed={0.3} width={15} depth={2} segments={40} position={[-5, -1, -4]} color="#cbd5e1" />
      
      {/* Nube 3: Arriba/Fondo. Casi blanca */}
      <Cloud opacity={0.5} speed={0.5} width={20} depth={2.5} segments={40} position={[0, 5, -6]} color="#f1f5f9" />
    </group>
  );
}