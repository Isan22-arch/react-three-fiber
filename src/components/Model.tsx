import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import React from 'react';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { Object3D } from 'three';
import { useControls } from 'leva';

const Model = () => {
  const fbx = useLoader(FBXLoader, '/chair_01.fbx');
  const fbxRef = useRef<Object3D>();
  const { scale } = useControls({
    scale: {
      value: 1,
      min: 1,
      max: 3,
      step: 0.1,
    },
  });
  return (
    <>
      <primitive
        object={fbx}
        ref={fbxRef}
        scale={scale}
      />
    </>
  );
};

export default Model;
