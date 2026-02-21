import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Stars } from "@react-three/drei";
import * as THREE from "three";

/* ===============================
   CORE ENERGY CUBE
=============================== */

function EnergyCore() {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.015;

    const pulse = 1 + Math.sin(t * 4) * 0.1;
    ref.current.scale.set(pulse, pulse, pulse);
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial
        color="#00ffff"
        emissive="#00ffff"
        emissiveIntensity={2}
        metalness={1}
        roughness={0.2}
      />
    </mesh>
  );
}

/* ===============================
   GLASS OUTER SHELL
=============================== */

function GlassShell() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.003;
  });

  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[2.8, 1]} />
      <MeshTransmissionMaterial
        thickness={1}
        roughness={0}
        transmission={1}
        ior={1.5}
        chromaticAberration={0.05}
        backside
      />
    </mesh>
  );
}

/* ===============================
   ENERGY SHARDS
=============================== */

function Shard({ position, speed }) {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += speed;
    ref.current.rotation.y += speed;
  });

  return (
    <Float speed={3} floatIntensity={2}>
      <mesh ref={ref} position={position}>
        <coneGeometry args={[0.3, 1, 8]} />
        <meshStandardMaterial
          color="#9d4edd"
          emissive="#9d4edd"
          emissiveIntensity={1.5}
          metalness={1}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
}

/* ===============================
   WIREFRAME HOLOGRAM
=============================== */

function WireframeLayer() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.002;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[3.5, 32, 32]} />
      <meshBasicMaterial
        color="#00ffff"
        wireframe
        transparent
        opacity={0.2}
      />
    </mesh>
  );
}

/* ===============================
   MAIN BACKGROUND
=============================== */

export default function Global3DBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 5,
        pointerEvents: "none",
      }}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={3} />
        <pointLight position={[-5, -5, -5]} intensity={2} />

        {/* Core */}
        <EnergyCore />

        {/* Glass distortion shell */}
        <GlassShell />

        {/* Orbiting shards */}
        <Shard position={[4, 0, 0]} speed={0.01} />
        <Shard position={[-4, 1, 1]} speed={0.015} />
        <Shard position={[0, -3, 2]} speed={0.02} />

        {/* Wireframe hologram */}
        <WireframeLayer />

        {/* Subtle depth stars */}
        <Stars radius={80} depth={50} count={3000} factor={3} speed={1} />
      </Canvas>
    </div>
  );
}
