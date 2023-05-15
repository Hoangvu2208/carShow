import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./style.css";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Ground } from "./Ground";
import Car from "./Car";
import { FloatingGrid } from "./FloatingGrid";


function CarShow() {
  return (
    <>
      {/* dieu chinh OrbitControls */}
      <OrbitControls target={[0, 0.5, 0]} maxPolarAngle={1.45} rotateSpeed={0.6} />
      {/* thiet lap Camera  */}
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      {/* khoi tao mau sac  */}
      {/* let color = new  Color(0,0,0) =>  */}
      <color args={[0, 0, 0]} attach={"background"} />

      {/* tao anh sang 
      let spotLight = new spotLight();
      spotLight.intensity = 1.5; // chinh cuong do cua anh sang  
      spotLight.position.set {...} */}
      <Car></Car>
      <spotLight
        position={[0, 10, 0]}
        angle={0.4}
        color={[1, 0.25, 0.7]}
        penumbra={1}
        castShadow
        intensity={15}
        shadow-bias={-0.0001}
        />
        <spotLight
        color={[1, 0.7, 0.35]}
        intensity={5}
        angle={0.6}
        penumbra={0.5}
        position={[4, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
        
        
{/* 
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={5}
        angle={0.6}
        penumbra={0.5}
        position={[4, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={5}
        angle={0.6}
        penumbra={0.5}
        position={[5, -5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 0.1]}
        intensity={3}
        angle={0.6}
        penumbra={0.5}
        position={[-3, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
    
      <spotLight
        color={[0.6, 0.3, 0.2]}
        intensity={3}
        angle={0.6}
        penumbra={0.5}
        position={[0, 0, 5]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[1, 1, 1]}
        intensity={3}
        angle={0.6}
        penumbra={0.5}
        position={[0, 1, -0.5]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.15, 0.25, 0.7]}
        intensity={8}
        angle={0.6}
        penumbra={0.5}
        position={[0, 1, 0]}
        castShadow
        shadow-bias={-0.0001}
      /> */}

      <Ground></Ground>
      <FloatingGrid></FloatingGrid>
    </>
  );
}

function App() {
  return (
    
      <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow></CarShow>
      </Canvas>

      
    </Suspense>
    
 
  );
}

export default App;
