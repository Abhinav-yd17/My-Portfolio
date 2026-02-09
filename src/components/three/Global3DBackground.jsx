import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const stoneColors = [
  "#00ffff",
  "#ff0000",
  "#ffff00",
  "#ff8800",
  "#0000ff",
  "#00ff88",
];

function BlackHoleCore() {
  const ref = useRef();

  useFrame((state) => {
    ref.current.rotation.y += 0.01;
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.2;
    ref.current.scale.set(pulse, pulse, pulse);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.8, 64, 64]} />
      <MeshDistortMaterial
        color="#000000"
        emissive="#4f46e5"
        emissiveIntensity={1}
        distort={0.7}
        speed={4}
        roughness={0}
      />
    </mesh>
  );
}

function GravityRing({ radius, speed }) {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.z += speed;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.05, 32, 200]} />
      <meshStandardMaterial
        color="#9d4edd"
        emissive="#9d4edd"
        emissiveIntensity={1}
        metalness={1}
        roughness={0.2}
      />
    </mesh>
  );
}

function InfinityStone({ color, angle }) {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.position.x = Math.cos(t + angle) * 4;
    ref.current.position.y = Math.sin(t + angle) * 2;
    ref.current.rotation.y += 0.02;
  });

  return (
    <Float speed={3} floatIntensity={2}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[0.6, 2]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2}
          metalness={1}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function Global3DBackground() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 5, pointerEvents: "none" }}>
      <Canvas camera={{ position: [0, 0, 9], fov: 60 }}>
        <ambientLight intensity={1.2} />
        <pointLight position={[5, 5, 5]} intensity={3} />
        <pointLight position={[-5, -5, -5]} intensity={2} />

        {/* Black hole energy core */}
        <BlackHoleCore />

        {/* Rotating gravity rings */}
        <GravityRing radius={2.8} speed={0.01} />
        <GravityRing radius={3.5} speed={-0.008} />

        {/* Infinity stones orbiting */}
        {stoneColors.map((color, i) => (
          <InfinityStone key={i} color={color} angle={i * 1.2} />
        ))}

        {/* Warp-speed starfield */}
        <Stars radius={120} depth={80} count={8000} factor={5} speed={3} />
      </Canvas>
    </div>
  );
}
