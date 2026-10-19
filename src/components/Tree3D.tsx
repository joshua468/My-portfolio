"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import * as THREE from "three"

const BRAND = "#7C6FFF"
const LEAF = "#8B7DFF"
const LEAF_DARK = "#6A5AE0"
const TRUNK = "#5B4CD0"

function Tree() {
  const groupRef = useRef<THREE.Group>(null)
  const canopyRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.1) * 0.06
    }
    if (canopyRef.current) {
      const s = 1 + Math.sin(t * 0.5) * 0.01
      canopyRef.current.scale.set(s, s, s)
    }
  })

  const branches = useMemo(() => {
    return [0, 1, 2, 3].map((i) => ({
      angle: (i / 4) * Math.PI * 2,
      radius: 0.55,
      height: 1.1 + i * 0.18,
    }))
  }, [])

  return (
    <group ref={groupRef}>
      <directionalLight position={[4, 6, 5]} intensity={1.6} color="#BDB3FF" />
      <directionalLight position={[-3, -2, 4]} intensity={0.7} color={BRAND} />
      <pointLight position={[0, 3, 0]} intensity={0.9} color={BRAND} />
      <pointLight position={[1.5, 1, -2]} intensity={0.4} color="#FFFFFF" />

      {/* Ground / base */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.9, 24, 24]} />
        <meshStandardMaterial color="#8B7DFF" transparent opacity={0.35} roughness={0.4} metalness={0.2} envMapIntensity={0.6} />
      </mesh>

      {/* Trunk */}
      <mesh position={[0, 0.9, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.2, 1.9, 12]} />
        <meshStandardMaterial color={TRUNK} roughness={0.35} metalness={0.3} />
      </mesh>

      {/* Canopy blobs */}
      <group ref={canopyRef}>
        <Float speed={0.6} rotationIntensity={0.02} floatIntensity={0.05}>
          {/* Main canopy */}
          <mesh position={[0, 2.1, 0]}>
            <icosahedronGeometry args={[1.15, 2]} />
            <meshStandardMaterial color={LEAF} roughness={0.28} metalness={0.35} emissive={BRAND} emissiveIntensity={0.12} flatShading />
          </mesh>

          {/* Secondary blobs */}
          <mesh position={[0.85, 1.55, 0.25]}>
            <icosahedronGeometry args={[0.7, 2]} />
            <meshStandardMaterial color={LEAF} roughness={0.3} metalness={0.3} flatShading />
          </mesh>
          <mesh position={[-0.8, 1.7, -0.2]}>
            <icosahedronGeometry args={[0.6, 2]} />
            <meshStandardMaterial color={LEAF_DARK} roughness={0.3} metalness={0.3} flatShading />
          </mesh>
          <mesh position={[0.3, 2.85, 0.1]}>
            <icosahedronGeometry args={[0.55, 2]} />
            <meshStandardMaterial color={LEAF_DARK} roughness={0.28} metalness={0.35} emissive={BRAND} emissiveIntensity={0.15} flatShading />
          </mesh>
          <mesh position={[-0.35, 2.6, 0.4]}>
            <icosahedronGeometry args={[0.45, 2]} />
            <meshStandardMaterial color={LEAF} roughness={0.3} metalness={0.3} flatShading />
          </mesh>
        </Float>
      </group>

      {/* Branches */}
      {branches.map((b, i) => (
        <mesh
          key={i}
          position={[Math.cos(b.angle) * b.radius * 0.7, b.height, Math.sin(b.angle) * b.radius * 0.7]}
          rotation={[Math.sin(b.angle) * 0.3, 0, -Math.cos(b.angle) * 0.5]}
        >
          <cylinderGeometry args={[0.06, 0.09, 0.9, 8]} />
          <meshStandardMaterial color={TRUNK} roughness={0.4} metalness={0.25} />
        </mesh>
      ))}

      {/* Trunk glow */}
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.2, 0.3, 1.4, 12]} />
        <meshBasicMaterial color={BRAND} transparent opacity={0.08} />
      </mesh>
    </group>
  )
}

function Bird({ seed }: { seed: number }) {
  const ref = useRef<THREE.Group>(null)
  const angle = seed

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const r = 2.4
    const spd = 0.35 + seed * 0.12
    const x = Math.cos(t * spd + angle) * r
    const z = Math.sin(t * spd + angle) * r
    const y = 2.6 + Math.sin(t * spd * 1.6 + angle * 2) * 0.7
    if (ref.current) {
      ref.current.position.set(x, y, z)
      ref.current.rotation.y = -t * spd - angle
      ref.current.rotation.z = Math.sin(t * spd * 2 + angle) * 0.35
      const flap = Math.abs(Math.sin(t * spd * 6 + angle))
      ref.current.rotation.x = flap * 0.5
    }
  })

  return (
    <group ref={ref} scale={0.5}>
      {/* Bird body + wings (two offset triangles for a flapping "w" shape) */}
      <mesh>
        <coneGeometry args={[0.22, 0.5, 4]} />
        <meshStandardMaterial color={BRAND} roughness={0.4} metalness={0.2} />
      </mesh>
      <mesh position={[-0.28, 0.15, 0]} rotation={[0, -0.3, -0.5]}>
        <coneGeometry args={[0.12, 0.4, 4]} />
        <meshStandardMaterial color="#BDB3FF" roughness={0.4} />
      </mesh>
      <mesh position={[0.28, 0.15, 0]} rotation={[0, 0.3, 0.5]}>
        <coneGeometry args={[0.12, 0.4, 4]} />
        <meshStandardMaterial color="#BDB3FF" roughness={0.4} />
      </mesh>
    </group>
  )
}

export default function Tree3D() {
  return (
    <div className="tree3d absolute pointer-events-none" style={{ left: 6, bottom: -30, width: 340, height: 460, zIndex: 10 }}>
      <Canvas
        camera={{ position: [0, 1.8, 5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.35} />
        <Tree />
        <Bird seed={0.3} />
        <Bird seed={2.1} />
        <Bird seed={4.0} />
      </Canvas>
    </div>
  )
}
