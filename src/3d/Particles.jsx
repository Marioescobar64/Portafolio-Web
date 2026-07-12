import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

export function Particles({ isDarkMode }) {
  const pointsRef = useRef();

  // 1. Aumentamos a 5000 estrellas para que el fondo se vea más poblado
  const particleCount = 5000;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount * 3; i++) {
    // 2. Redujimos un poco la dispersión (de 20 a 15) para que estén más cerca de la cámara
    positions[i] = (Math.random() - 0.5) * 15; 
  }

  useFrame((state, delta) => {
    pointsRef.current.rotation.y += delta * 0.015;
    pointsRef.current.rotation.x += delta * 0.005;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color={isDarkMode ? "#e2f1ff" : "#f59e0b"} // Estrellas azules vs Destellos naranjas
        size={isDarkMode ? 0.06 : 0.04}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={isDarkMode ? 1 : 0.4}
      />
    </Points>
  );
}