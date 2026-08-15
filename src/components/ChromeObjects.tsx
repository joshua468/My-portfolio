"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { MeshDistortMaterial, Float } from "@react-three/drei"
import * as THREE from "three"

const BRAND = "#7C6FFF"

const PARTICLES_DATA = (() => {
  const pos: { x: number; y: number; z: number; size: number; speed: number; offset: number; opacity: number }[] = []
  const cols = 7
  const rows = 5
  const spacingX = 0.6
  const spacingY = 0.6
  const offsetX = -(cols - 1) * spacingX / 2
  const offsetY = -(rows - 1) * spacingY / 2
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (Math.random() < 0.25) continue
      pos.push({
        x: offsetX + i * spacingX + (Math.random() - 0.5) * 0.08,
        y: offsetY + j * spacingY + (Math.random() - 0.5) * 0.08,
        z: (Math.random() - 0.5) * 0.3,
        size: 0.006 + Math.random() * 0.008,
        speed: 0.03 + Math.random() * 0.07,
        offset: Math.random() * Math.PI * 2,
        opacity: 0.06 + Math.random() * 0.1,
      })
    }
  }
  return pos
})()

function GradientOrb() {
  const groupRef = useRef<THREE.Group>(null)
  const coreRef = useRef<THREE.Mesh>(null)
  const distortRef = useRef<THREE.Mesh>(null)
  const glowOuterRef = useRef<THREE.Mesh>(null)
  const highlightRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.06
      groupRef.current.position.y = Math.sin(t * 0.12) * 0.1
    }
    if (coreRef.current) {
      coreRef.current.rotation.x = Math.sin(t * 0.08) * 0.05
      coreRef.current.rotation.y = t * 0.04
      const s = 1 + Math.sin(t * 0.15) * 0.015
      coreRef.current.scale.set(s, s, s)
    }
    if (distortRef.current) {
      distortRef.current.rotation.x = Math.sin(t * 0.1) * 0.06
      distortRef.current.rotation.y = t * 0.05
    }
    if (glowOuterRef.current) {
      glowOuterRef.current.rotation.x = Math.sin(t * 0.03) * 0.08
      glowOuterRef.current.rotation.y = t * 0.02
      const gs = 1 + Math.sin(t * 0.1) * 0.02
      glowOuterRef.current.scale.set(gs, gs, gs)
    }
    if (highlightRef.current) {
      highlightRef.current.rotation.x = Math.sin(t * 0.07 + 1) * 0.04
      highlightRef.current.rotation.y = t * 0.03 + 0.5
    }
  })

  const particles = PARTICLES_DATA

  const ringData = useMemo(() => {
    return [0, 1, 2].map((i) => ({
      radius: 1.65 + i * 0.25,
      y: (i - 1) * 0.4,
      opacity: 0.08 + i * 0.02,
      speed: 0.3 + i * 0.1,
    }))
  }, [])

  return (
    <group>
      <ambientLight intensity={0.3} />
      <directionalLight position={[4, 3, 5]} intensity={1.8} color={BRAND} />
      <directionalLight position={[-3, -2, 4]} intensity={0.6} color="#6BA3FF" />
      <pointLight position={[0, 0, 3]} intensity={0.8} color={BRAND} />
      <pointLight position={[2, -1, -2]} intensity={0.4} color="#FFFFFF" />

      <group ref={groupRef}>
        {/* outer ambient glow */}
        <mesh ref={glowOuterRef}>
          <sphereGeometry args={[2.2, 32, 32]} />
          <meshBasicMaterial color={BRAND} transparent opacity={0.025} />
        </mesh>

        {/* mid glow */}
        <mesh>
          <sphereGeometry args={[1.95, 32, 32]} />
          <meshBasicMaterial color="#4A8BF7" transparent opacity={0.04} />
        </mesh>

        {/* main glass orb */}
        <Float speed={0.5} rotationIntensity={0.04} floatIntensity={0.15}>
          <mesh ref={distortRef}>
            <icosahedronGeometry args={[1.5, 3]} />
            <MeshDistortMaterial
              color={BRAND}
              transparent
              opacity={0.15}
              roughness={0.05}
              metalness={0.3}
              distort={0.06}
              speed={0.5}
              emissive={BRAND}
              emissiveIntensity={0.15}
              envMapIntensity={0.8}
            />
          </mesh>
        </Float>

        {/* inner core glow */}
        <mesh ref={coreRef}>
          <sphereGeometry args={[1.1, 32, 32]} />
          <meshBasicMaterial color={BRAND} transparent opacity={0.08} />
        </mesh>

        {/* bright inner core */}
        <mesh>
          <sphereGeometry args={[0.6, 24, 24]} />
          <meshBasicMaterial color="#6BA3FF" transparent opacity={0.1} />
        </mesh>

        {/* center hotspot */}
        <mesh>
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshBasicMaterial color="#FFFFFF" transparent opacity={0.15} />
        </mesh>

        {/* glass highlight reflection */}
        <mesh ref={highlightRef} position={[0.6, 0.6, 0.8]} rotation={[0.5, 0.3, 0]}>
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshBasicMaterial color="#FFFFFF" transparent opacity={0.08} />
        </mesh>

        {/* secondary highlight */}
        <mesh position={[-0.8, -0.4, 0.6]} rotation={[0.2, -0.4, 0]}>
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshBasicMaterial color="#FFFFFF" transparent opacity={0.04} />
        </mesh>

        {/* orbital rings */}
        {ringData.map((ring, i) => (
          <mesh
            key={i}
            position={[0, ring.y, 0]}
            rotation={[Math.PI / 2 + (i * 0.25), 0, i * 0.4]}
          >
            <ringGeometry args={[ring.radius - 0.002, ring.radius, 64]} />
            <meshBasicMaterial color={i === 1 ? BRAND : "#4A8BF7"} transparent opacity={ring.opacity} side={THREE.DoubleSide} depthWrite={false} />
          </mesh>
        ))}

        {/* floating particles */}
        {particles.map((p, i) => (
          <mesh key={i} position={[p.x, p.y, p.z]}>
            <sphereGeometry args={[p.size, 6, 6]} />
            <meshBasicMaterial
              color={i % 4 === 0 ? "#FFFFFF" : i % 3 === 0 ? BRAND : "#6BA3FF"}
              transparent
              opacity={p.opacity}
            />
          </mesh>
        ))}
      </group>
    </group>
  )
}

export default function ChromeObjects() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <GradientOrb />
      </Canvas>
    </div>
  )
}
