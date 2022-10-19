/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: danjogamingqw (https://sketchfab.com/danjogamingqw)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/xbox-one-s-3fa2c800fbd246d3924704fdf3bdeeec
title: Xbox One S
*/

import React from "react";
import { useGLTF } from "@react-three/drei";


export function Xbox(props) {
  const { nodes, materials } = useGLTF(`${window.location.hostname.substring(0,9) === "localhost" ? '/' : '/ThreeJS/'}xbox.glb`);
  

  return (
    <group
      {...props}
      dispose={null}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.1, -0.34, 0.26]} scale={0.02}>
            <mesh
              geometry={nodes.Object_5.geometry}
              material={materials.material}
            />
          </group>
          <group
            position={[0.12, -0.28, 0.3]}
            rotation={[0.62, -Math.PI / 2, 0]}
            scale={0.02}
          >
            <mesh
              geometry={nodes.Object_7.geometry}
              material={materials.material_1}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(`${window.location.hostname.substring(0,9) === "localhost" ? '/' : '/ThreeJS/'}xbox.glb`);