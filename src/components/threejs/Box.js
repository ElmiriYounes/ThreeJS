import React, { useRef, useState } from "react";
import { Vector3 } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../../assets/images/becode.png";

const Box = (props) => {
  const colorMap = useLoader(TextureLoader, texture);

  const boxRef = useRef();

  useFrame(() => {
    boxRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={boxRef} rotation={[0, 0, 0]} scale={props.scale}>
      <boxGeometry attach="geometry" />
      <meshLambertMaterial map={colorMap} attach="material" args={[3, 3, 3]} />
    </mesh>
  );
};

export default Box;
