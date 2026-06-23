"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei"
import * as THREE from "three"

function Orb({
  color,
  position,
  scale,
  speed,
  distort,
}: {
  color: string
  position: [number, number, number]
  scale: number
  speed: number
  distort: number
}) {
  const ref = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.15) * 0.15
      ref.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.15
    }
    if (glowRef.current) {
      glowRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1
      glowRef.current.rotation.y = Math.cos(clock.getElapsedTime() * 0.08) * 0.1
    }
  })

  return (
    <Float speed={speed} rotationIntensity={0.15} floatIntensity={0.6}>
      <mesh ref={glowRef} position={position} scale={scale * 1.8}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.04} />
      </mesh>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 2]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.25}
          roughness={0.1}
          metalness={0.9}
          distort={distort}
          speed={1}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  )
}

function WireframeSphere({ position, scale }: { position: [number, number, number]; scale: number }) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.05) * 0.2
      ref.current.rotation.y = clock.getElapsedTime() * 0.03
    }
  })

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <sphereGeometry args={[1.5, 16, 16]} />
      <meshBasicMaterial color="#7C6FFF" wireframe transparent opacity={0.04} />
    </mesh>
  )
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#7C6FFF" />
        <pointLight position={[-5, -3, 2]} intensity={0.5} color="#3B82F6" />
        <Orb color="#7C6FFF" position={[-2.8, 1.5, -2]} scale={0.7} speed={0.8} distort={0.15} />
        <Orb color="#3B82F6" position={[2.8, -1.8, -1.5]} scale={0.5} speed={0.6} distort={0.25} />
        <Orb color="#a855f7" position={[0, 3, -3]} scale={0.4} speed={0.5} distort={0.2} />
        <WireframeSphere position={[4, -1, -5]} scale={0.6} />
        <WireframeSphere position={[-3.5, -2.5, -6]} scale={0.4} />
      </Canvas>
    </div>
  )
}
