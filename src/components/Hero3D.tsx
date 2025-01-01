import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {  OrbitControls, useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";

function Computer() {
  const computer = useRef<THREE.Group>(null);
  const { scene } = useGLTF("./src/assets/laptop.glb"); // Ensure this path is correct

  // Mouse interaction for subtle rotation
  useFrame((state) => {
    if (computer.current) {
      computer.current.rotation.y = THREE.MathUtils.lerp(
        computer.current.rotation.y,
        (state.mouse.x * Math.PI) / 10,
        0.1
      );
      computer.current.rotation.x = THREE.MathUtils.lerp(
        computer.current.rotation.x,
        (state.mouse.y * Math.PI) / 10,
        0.1
      );
    }
  });

  return (
    <primitive
      ref={computer}
      object={scene}
      scale={12} // Adjust the scale here
      position={[0, -1.5, 0]} // Position the model
      rotation={[-0.1, 0, 0]} // Initial rotation
    />
  );
}

function LoadingSpinner() {
  return (
    <Html center>
      <div className="text-primary animate-spin">Loading...</div>
    </Html>
  );
}


export function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      {" "}
      {/* Adjusted camera */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <ambientLight intensity={0.8} /> {/* Base lighting */}
      <directionalLight position={[5, 10, 7]} intensity={1} />{" "}
      {/* Directional lighting */}
      <pointLight position={[-10, -10, -10]} intensity={1} />
      {/* Optional Galaxy Background */}
      {/* <Galaxy /> */}
      <Suspense fallback={<LoadingSpinner />}>
        <Computer />
      </Suspense>
    </Canvas>
  );
}
