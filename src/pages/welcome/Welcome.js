import React, { Suspense } from "react";
import {  OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Container } from "../../Global.styles";
import Room from "../../components/threejs/Room";


const Welcome = () => {
  return (
    <Container>
      <Canvas
        style={{ width: "100%", height: "calc(100vh - 50px)", minHeight:"500px", backgroundColor: "gray" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 20, 5]} intensity={1} />
        <Suspense fullback={null}>
          <Room />
        </Suspense>
        <PerspectiveCamera position={[0.5, 0.5, 0.5]} makeDefault />
        <OrbitControls  enableZoom={false} enablePan={true} makeDefault />
      </Canvas>
    </Container>
  );
};

export default Welcome;
