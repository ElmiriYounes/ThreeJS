import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import styled from "styled-components";
import { Banana } from "../../components/threejs/Banana";
import { Container, flex } from "../../Global.styles";

const Btns = styled.div`
  position: absolute;
  left: 0;
  top: 80px;
  ${flex}
  flex-direction:column;
  background-color: rgb(0, 0, 0, 0.5);
  
  button {
      padding: 20px;
    width: 100%;
    background-color: transparent;
    color: white;
    border: none;
    margin-top: 20px;
    cursor: pointer;
  }

  button:hover {
    background-color: rgb(0, 0, 0, 0.8);
  }

  button:first-child {
    margin-top: unset;
  }
`;

const SkinWrap = () => {
  const anim = ["jump", "dance 1", "dance 2"];
  const [current, setCurrent] = useState();

  return (
    <Container>
      <Canvas
        style={{
          width: "100%",
          height: "calc(100vh - 50px)",
          minHeight: "500px",
          backgroundColor: "gray",
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 20, 5]} intensity={1} />
        <Suspense fullback={null}>
          <Banana current={current} />
        </Suspense>
        <PerspectiveCamera position={[5, 5, 5]} makeDefault />
        <OrbitControls enableZoom={false} enablePan={true} />
      </Canvas>
      <Btns>
        {anim.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
            }}
          >
            {item}
          </button>
        ))}
      </Btns>
    </Container>
  );
};

export default SkinWrap;
