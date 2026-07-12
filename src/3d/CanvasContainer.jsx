import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Particles } from "./Particles";
import { CelestialBody } from "./CelestialBody";
import { CloudsBackground } from "./CloudsBackground";

export function CanvasContainer({ isDarkMode }) {
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 1, pointerEvents: "none",
      transition: "background 0.8s ease" 
    }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        
        {/* Atmósfera realista (Sky Shader) */}
        {!isDarkMode && (
          <Sky 
            distance={450000} 
            sunPosition={[100, 20, 100]} 
            turbidity={0.5} 
            rayleigh={3} 
            mieCoefficient={0.005} 
            mieDirectionalG={0.8}
          />
        )}
        
        <ambientLight intensity={isDarkMode ? 0.05 : 1.2} /> 
        <directionalLight 
          position={[100, 20, 100]} 
          intensity={isDarkMode ? 2.5 : 1.5} 
          color="#ffffff" 
        /> 
        
        {isDarkMode ? <Particles /> : <CloudsBackground />}
        <CelestialBody isDarkMode={isDarkMode} />
      </Canvas>
    </div>
  );
}