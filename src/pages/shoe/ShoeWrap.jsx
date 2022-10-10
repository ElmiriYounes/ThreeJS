import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import Shoe from "../../components/threejs/Shoe";
import { Container, flex } from "../../Global.styles";
import styled from "styled-components";

const Color = styled.div`
  border-radius: 50%;
  background-color: ${(props) => props.color};
  height: 40px;
  width: 40px;
  margin-top: 10px;
  opacity: ${(props) => (props.active ? "1" : "0.5")};
  border:${props => props.active ? '1px solid black' : null};
  cursor: pointer;

  @media screen and (max-width: 480px) {
    height: 20px;
    width: 20px;
  }

  &:first-child {
    margin-top: unset;
  }
`;

const ColorPalet = styled.div`
  position: absolute;
  background-color: white;
  ${flex}
  flex-direction: column;
  padding: 20px;
  top: 80px;
  left: 0;
`;

const ShoeWrap = () => {
  const colors = ["red", "blue", "black", "yellow", "green", "gray"];
  const [color, setColor] = useState(colors[0]);
  const [currentColor, setCurrentColor] = useState(0);

  useEffect(() => {
    setColor(colors[currentColor]);
  }, [currentColor]);

  return (
    <Container>
      <Canvas
        style={{ width: "100%", height: "calc(100vh - 50px)", minHeight:"500px", backgroundColor: "gray" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 20, 5]} intensity={1} />
        <Suspense fullback={null}>
          <Shoe color={color} />
        </Suspense>
        <PerspectiveCamera position={[5, 5, 5]} makeDefault />
        <OrbitControls enableZoom={false} enablePan={true} />
      </Canvas>
      <ColorPalet>
        {colors.map((color, index) => (
          <Color
            key={index}
            color={color}
            active={currentColor === index ? true : false}
            onClick={() => {
              setCurrentColor(index);
            }}
          />
        ))}
      </ColorPalet>
    </Container>
  );
};

export default ShoeWrap;
