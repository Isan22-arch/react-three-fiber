import { Environment, Sphere, useEnvironment } from '@react-three/drei';
import React from 'react';

const GeoEnv = () => {
  const envMap = useEnvironment({
    files: '/hdr/limpopo_golf_course_4k.hdr',
  });

  return (
    <>
      <Environment
        map={envMap}
        background
      />
      <Sphere>
        <meshStandardMaterial />
      </Sphere>
    </>
  );
};

export default GeoEnv;
