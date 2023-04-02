import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Text3D } from '@react-three/drei';
import { Mesh } from 'three';

const GeoText = () => {
  const textRef = useRef<Mesh>(null!);

  // useFrame((state, delta, xrFrame) => {
  //   // textRef.current.rotation.x += 0.01;
  //   textRef.current.rotation.y += 0.01;
  // });
  return (
    <Text
      font=""
      ref={textRef}
    >
      <meshBasicMaterial color="orange" />
      GeoText
    </Text>
  );
};

export default GeoText;
