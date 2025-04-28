import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, useGLTF, Html, ContactShadows } from '@react-three/drei'

import watchModelPath from '../../assets/Models/smart_watch_kw_19.glb'
import headphModelPath from '../../assets/Models/headphones.glb'

// Watch Model with Rotation and Shadows
function WatchModel({ position }) {
  const { scene } = useGLTF(watchModelPath)
  const watchRef = useRef()

  useFrame(() => {
    if (watchRef.current) {
      watchRef.current.rotation.y += 0.01
    }
  })

  // Enable shadows for all child meshes
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true
      child.receiveShadow = true
    }
  })

  return <primitive ref={watchRef} object={scene} scale={-5.2} position={position} />
}

// Headphone Model with Rotation and Shadows
function Headphone({ position }) {
  const { scene } = useGLTF(headphModelPath)
  const headphoneRef = useRef()

  useFrame(() => {
    if (headphoneRef.current) {
      headphoneRef.current.rotation.y += 0.01
    }
  })

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true
      child.receiveShadow = true
    }
  })

  return <primitive ref={headphoneRef} object={scene} scale={1.5} position={position} />
}

// Loader Component
function Loader() {
  return (
    <Html center>
      <div className="text-white text-xl animate-pulse">Loading...</div>
    </Html>
  )
}

// Main Component
function HomeThree() {
  return (
    <div className="w-[100vw] h-[70vh] absolute flex justify-between">
      <Canvas
        camera={{ position: [0, 1, 8], fov: 60 }}
        shadows // ✅ Enable shadows
      >
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 10, 5]}
          intensity={1}
          castShadow // ✅ This light casts shadows
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        <Suspense fallback={<Loader />}>
          {/* Models */}
          <WatchModel position={[-133, -1, 0]} />
          <WatchModel position={[0, 0, -2]} />
          <WatchModel position={[2, -1, 1]} />

          <Headphone position={[112, 1, -3]} />
          <Headphone position={[1, -1, 2]} />
          <Headphone position={[3, 0, -1]} />

          <WatchModel position={[1.5, 1.5, -1.5]} />
          <Headphone position={[-2.5, 0.5, 2.3]} />
          <WatchModel position={[2.5, 1, -2.6]} />

          {/* Ground Contact Shadow */}
          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.5}
            scale={20}
            blur={2}
            far={10}
          />

          <Environment preset="city" />
          <OrbitControls enablePan={false} enableZoom={true} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default HomeThree
