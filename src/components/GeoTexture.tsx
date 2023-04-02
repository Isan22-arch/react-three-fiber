import { Plane, Sphere, useTexture } from '@react-three/drei';
import { useControls } from 'leva';
import React from 'react';
import { DoubleSide } from 'three';

const GeoTexture = () => {
  const moonTexture = useTexture({
    map: 'lroc_color_poles_1k.jpg',
    displacementMap: 'ldem_3_8bit.jpg',
  });

  const { displacementScale } = useControls({
    displacementScale: {
      value: 0,
      min: -2,
      max: 2,
      step: 0.1,
    },
  });
  return (
    <>
      <Sphere
        position={[0, 0, 2]}
        castShadow
      >
        <meshStandardMaterial map={moonTexture.map} />
      </Sphere>
      <Plane
        args={[10, 10, 128, 128]}
        receiveShadow
      >
        <meshStandardMaterial
          side={DoubleSide}
          {...moonTexture}
          displacementScale={displacementScale}
        />
      </Plane>
    </>
  );
};

export default GeoTexture;
