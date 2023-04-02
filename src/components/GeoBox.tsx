import React, { useRef } from 'react';
import { Box } from '@react-three/drei';
import { useControls, folder, button } from 'leva';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const GeoBox = () => {
  const [{ scale, positionX, positionY, positionZ, color, wireframe }, reset] =
    useControls('Box', () => ({
      geometry: folder({
        scale: {
          value: 1,
          min: 1,
          max: 3,
          step: 0.1,
        },
        positionX: {
          value: 0,
          min: -3,
          max: 3,
          step: 0.1,
        },
        positionY: {
          value: 0,
          min: -3,
          max: 3,
          step: 0.1,
        },
        positionZ: {
          value: 0,
          min: -3,
          max: 3,
          step: 0.1,
        },
      }),
      material: folder({
        color: '#f00',
        wireframe: false,
      }),
      reset: button(() => {
        reset({
          scale: 1,
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          color: '#f00',
          wireframe: false,
        });
      }),
    }));

  const boxRef = useRef<Mesh>(null!);

  useFrame((state, delta, xrFrame) => {
    boxRef.current.rotation.x += 0.01;
    boxRef.current.rotation.y += 0.01;
  });
  return (
    <Box
      ref={boxRef}
      args={[2, 2, 2]}
      scale={scale}
      position={[positionX, positionY, positionZ]}
    >
      {/* <meshStandardMaterial
        attach="material"
        color={color}
        metalness={0.5}
        roughness={0.5}
        wireframe={wireframe}
      /> */}
      <meshToonMaterial
        attach="material"
        color={color}
        wireframe={wireframe}
      />
    </Box>
  );
};

export default GeoBox;
