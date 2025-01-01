import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";

export function GalaxyBackground() {
  const ref = useRef<any>();
  // Ensuring that the result is a Float32Array
  const sphere = new Float32Array(random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  // Using the useFrame hook to animate the rotation
  useFrame((state, delta: any) => {
    if (ref.current) {
      console.log(state);
      
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#4338ca"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
