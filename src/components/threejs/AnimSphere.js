import React, { useState } from "react";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const AnimSphere = () => {
    const [hovered, setHovered] = useState(false)

  return (
    <>
      <Sphere visible args={[1.5, 100, 200]} onPointerEnter={()=>{setHovered(true)}} onPointerLeave={()=>{setHovered(false)}}>
        <MeshDistortMaterial attach="material" color="#7F007F" distort={hovered ? 1 : 0.5} speed={hovered ? 1 : 2} roughness={2} />
      </Sphere>
    </>
  );
};

export default AnimSphere;