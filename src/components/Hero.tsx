import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GalaxyBackground } from "./GalaxyBackground";

export function Hero() {
  return (
    <section  className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" id='home'>
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <OrbitControls enableZoom={false} />
          <GalaxyBackground />
        </Canvas>
      </div>
      
      <div className="z-10 text-center space-y-8">
    
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Ashutosh Ranjan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground"
        >
          Full Stack MERN Developer
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8"
      >
        <a href={'#about'}>
        <ChevronDown className="w-8 h-8" />
        </a>
      </motion.div>
    </section>
  );
}