import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

export function CelestialBody({ isDarkMode }) {
  const groupRef = useRef();
  const moonTexture = useTexture("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg");

  useFrame(() => {
    groupRef.current.rotation.y += 0.001;
    const scrollY = window.scrollY;
    groupRef.current.position.y = 1.5 + (scrollY * -0.003);
    groupRef.current.rotation.x = scrollY * 0.0005;
  });

  return (
    <group ref={groupRef} position={[2.5, 1.5, -3]}>
      
      {/* LUNA */}
      <mesh visible={isDarkMode}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial map={moonTexture} roughness={1} metalness={0} />
      </mesh>

      {/* SOL */}
      <mesh visible={!isDarkMode}>
        <sphereGeometry args={[1.1, 64, 64]} />
        <meshBasicMaterial 
          color="#fff5e1" 
          toneMapped={false} 
        />
      </mesh>
      
    </group>
  );
}