import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useControls, folder, button } from 'leva';
import './App.css';
import GeoBox from './components/GeoBox';
import GeoText from './components/GeoText';
import GeoTexture from './components/GeoTexture';

function App() {
  return (
    <div className="w-full h-screen">
      <Canvas shadows>
        <ambientLight intensity={0.1} />
        <directionalLight
          // color="red"
          position={[10, 10, 10]}
          castShadow
        />
        {/* <GeoBox /> */}
        {/* <GeoText /> */}
        <GeoTexture />
        <OrbitControls
        // enableZoom={false}
        // maxPolarAngle={Math.PI / 2}
        // minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}

export default App;
