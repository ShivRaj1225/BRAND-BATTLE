import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, useGLTF, Html } from '@react-three/drei'

// Import the GLB file from the Models folder
import watchModelPath from '../../assets/Models/smart_watch_kw_19.glb'
import headphModelPath  from '../../assets/Models/headphones.glb'

function WatchModel() {
  const { scene } = useGLTF(watchModelPath)
  return <primitive object={scene} scale={2.5} position={[120, -1, 0]} />
}

function Headphone(){
  const { scene } = useGLTF(headphModelPath)
  return <primitive object={scene} scale={2.5} position={[-130, 10, 0]} />
}

function HomeThree() {
  return (
    <div className="w-[100vw] h-[80vh] absolute flex justify-between  "> 
      <Canvas camera={{ position: [0, 1, 5], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Suspense
          fallback={
            <Html>
              <div className="text-white text-xl animate-pulse">Loading...</div>
            </Html>
          }
        >
          <WatchModel />

          <Headphone />
          <Environment preset="city" />
          <OrbitControls enablePan={false} enableZoom={true} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default HomeThree
