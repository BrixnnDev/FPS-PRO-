import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Points, PointMaterial, Wireframe } from '@react-three/drei'
import * as THREE from 'three'

function CoreShape() {
  const group = useRef()
  useFrame((state, delta) => {
    group.current.rotation.y += delta * 0.25
    group.current.rotation.x += delta * 0.08
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.15
  })

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.25, 1]} />
        <meshStandardMaterial
          color="#0b1423"
          metalness={0.9}
          roughness={0.15}
          flatShading
        />
      </mesh>
      <Wireframe
        geometry={new THREE.IcosahedronGeometry(1.28, 2)}
        stroke="#00e5ff"
        backfaceStroke="#0081ff99"
        fillOpacity={0}
      />
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.7, 0.015, 16, 120]} />
        <meshBasicMaterial color="#00e5ff" />
      </mesh>
      <mesh rotation={[Math.PI / 2 + 0.6, 0.4, 0]}>
        <torusGeometry args={[2.05, 0.01, 16, 120]} />
        <meshBasicMaterial color="#0081ff" transparent opacity={0.8} />
      </mesh>
    </group>
  )
}

function Sparkles() {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(360)
    for (let i = 0; i < 120; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 7
      arr[i * 3 + 1] = (Math.random() - 0.5) * 5
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4
    }
    return arr
  }, [])

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.05
  })

  return (
    <group ref={ref}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#0081ff"
          size={0.03}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

function Rig() {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, Math.sin(state.pointer.x) * 1.4, 0.05)
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, Math.cos(state.pointer.y) * 0.8 + 0.2, 0.05)
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0.2, 4.6], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.55} />
      <pointLight position={[4, 4, 4]} intensity={40} color="#00e5ff" />
      <pointLight position={[-4, -2, -4]} intensity={30} color="#0081ff" />
      <Float speed={1.6} rotationIntensity={0.4} floatIntensity={0.8}>
        <CoreShape />
      </Float>
      <Sparkles />
      <Rig />
    </Canvas>
  )
}