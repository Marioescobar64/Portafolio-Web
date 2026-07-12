import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Physics, useSphere, usePointToPointConstraint } from '@react-three/cannon';

function CordAndHandle({ toggleTheme }) {
  // 1. Ancla invisible en el techo
  const [anchor] = useSphere(() => ({ mass: 0, position: [0, 2, 0] }));
  
  // 2. Tirador (El mango que jalamos)
  const [handle, handleApi] = useSphere(() => ({
    mass: 1,
    position: [0, 0, 0],
    args: [0.2],
    onCollide: (e) => {
      // Si el tirador baja lo suficiente, cambiamos el tema
      if (e.body.position.y < -1) toggleTheme();
    }
  }));

  // 3. Conexión física entre el techo y el tirador
  usePointToPointConstraint(anchor, handle, { pivotA: [0, 0, 0], pivotB: [0, 0, 0] });

  // 4. Lógica de arrastre con el mouse
  const onPointerDown = () => handleApi.mass.set(0); // "Congela" el objeto al agarrarlo
  const onPointerUp = () => handleApi.mass.set(1);   // "Suelta" el objeto para que caiga

  useFrame((state) => {
    // Si el usuario está arrastrando, seguimos la posición del mouse en 3D
    if (state.pointer.x) {
      handleApi.position.set(state.pointer.x * 5, state.pointer.y * 5, 0);
    }
  });

  return (
    <>
      {/* Visualización del Tirador */}
      <mesh ref={handle} onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" />
      </mesh>
    </>
  );
}

export function PullString3D({ toggleTheme }) {
  return (
    <div style={{ position: 'fixed', top: 0, right: '50px', width: '200px', height: '400px', zIndex: 100 }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Physics gravity={[0, -9.8, 0]}>
          <CordAndHandle toggleTheme={toggleTheme} />
        </Physics>
      </Canvas>
    </div>
  );
}