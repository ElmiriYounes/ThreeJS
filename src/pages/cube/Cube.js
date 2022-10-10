import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import styled from "styled-components";
import Box from "../../components/threejs/Box";
import { Container, flex } from "../../Global.styles";

const Params = styled.div`
  background-color: rgb(0, 0, 0, 0.5);
  position: absolute;
  top:80px;
  color:white;
  left: 0;
  z-index: 10;
  padding: 20px;
  ${flex}
  flex-direction: column;


  & > div {
    width: 33%;
    ${flex}
    flex-direction: column;
    padding: 20px 0;
  }

  & > div:last-child {
    margin-right: unset;
  }

  input {
    width: 100px;
  }
`;

const Cube = () => {
  const [width, setWidth] = useState(2);
  const [height, setHeight] = useState(2);
  const [deep, setDeep] = useState(2);

  const handleChange = (input) => {
    console.log(input.value / 25);
    if (input.id === "width") {
      setWidth((w) => input.value / 25);
    } else if (input.id === "height") {
      setHeight((h) => input.value / 25);
    } else {
      setDeep((d) => input.value / 25);
    }
  };

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
          <Box scale={[width, height, deep]} />
        </Suspense>
        <PerspectiveCamera position={[5, 5, 5]} makeDefault />
        <OrbitControls enableZoom={false} enablePan={true} />
      </Canvas>
      <Params>
        <div>
          <input
            type="range"
            id="width"
            name="width"
            min="1"
            max="100"
            defaultValue={50}
            onChange={(e) => {
              handleChange(e.target);
            }}
          />
          <label for="width">Width</label>
        </div>
        <div>
          <input
            type="range"
            id="height"
            name="height"
            min="1"
            max="100"
            defaultValue={50}
            onChange={(e) => {
              handleChange(e.target);
            }}
          />
          <label for="height">Height</label>
        </div>
        <div>
          <input
            type="range"
            id="deep"
            name="deep"
            min="1"
            max="100"
            defaultValue={50}
            onChange={(e) => {
              handleChange(e.target);
            }}
          />
          <label for="deep">Deep</label>
        </div>
      </Params>
    </Container>
  );
};

export default Cube;
