import {
  CubeCamera,
  Environment,
  Sphere,
  useEnvironment,
} from '@react-three/drei';
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
      <CubeCamera>
        {/*@ts-ignore*/}
        {(texture) => (
          <>
            <Environment map={texture} />
            <Sphere>
              <meshStandardMaterial
                metalness={1}
                roughness={0}
              />
            </Sphere>
          </>
        )}
      </CubeCamera>
      <Sphere
        position={[1.5, 1.5, 1.5]}
        scale={0.5}
      >
        <meshNormalMaterial />
      </Sphere>
    </>
  );
};

export default GeoEnv;
