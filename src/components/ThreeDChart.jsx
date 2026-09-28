import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import "./ThreeDChart.css";

function DataBar({ position, height, color }) {
  return (
    <mesh position={[position[0], height / 2, position[2]]}>
      <boxGeometry args={[0.8, height, 0.8]} />

      <meshStandardMaterial
        color={color}
        roughness={0.3}
        metalness={0.2}
      />
    </mesh>
  );
}

function ThreeDChart() {
  return (
    <div className="three-d-chart">

      <Canvas camera={{ position: [6, 5, 8], fov: 50 }}>

        <ambientLight intensity={1} />

        <directionalLight
          position={[5, 8, 5]}
          intensity={2}
        />

        <pointLight
          position={[-5, 5, 5]}
          intensity={1}
        />

        <DataBar
          position={[-3, 0, 0]}
          height={2}
          color="#3b82f6"
        />

        <DataBar
          position={[-1, 0, 0]}
          height={4}
          color="#8b5cf6"
        />

        <DataBar
          position={[1, 0, 0]}
          height={3}
          color="#ec4899"
        />

        <DataBar
          position={[3, 0, 0]}
          height={5}
          color="#10b981"
        />

        <OrbitControls />
      </Canvas>

    </div>
  );
}

export default ThreeDChart;