import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import DataPoint from "./DataPoint";
import countries from "../data/data.js";


/* =========================================
   CONVERT LATITUDE + LONGITUDE
   INTO THREE.JS POSITION
========================================= */

function latLongToVector3(latitude, longitude, radius) {
  const phi =
    (90 - latitude) * (Math.PI / 180);

  const theta =
    (longitude + 180) * (Math.PI / 180);

  const x =
    -(radius *
      Math.sin(phi) *
      Math.cos(theta));

  const y =
    radius * Math.cos(phi);

  const z =
    radius *
    Math.sin(phi) *
    Math.sin(theta);

  return [x, y, z];
}


/* =========================================
   GLOBE MODEL
========================================= */

function GlobeModel() {
  const globeRef = useRef();

  /*
    Slowly rotate the complete globe.
  */

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.0015;
    }
  });


  return (
    <group ref={globeRef}>

      {/* =================================
          MAIN EARTH
      ================================= */}

      <mesh>

        <sphereGeometry
          args={[1.5, 64, 64]}
        />

        <meshStandardMaterial
          color="#071a2e"
          roughness={0.55}
          metalness={0.35}
        />

      </mesh>


      {/* =================================
          EARTH WIREFRAME
      ================================= */}

      <mesh>

        <sphereGeometry
          args={[1.515, 32, 32]}
        />

        <meshBasicMaterial
          color="#00e5ff"
          wireframe
          transparent
          opacity={0.12}
        />

      </mesh>


      {/* =================================
          ATMOSPHERE
      ================================= */}

      <mesh>

        <sphereGeometry
          args={[1.57, 64, 64]}
        />

        <meshBasicMaterial
          color="#008cff"
          transparent
          opacity={0.08}
        />

      </mesh>


      {/* =================================
          COUNTRY DATA POINTS
      ================================= */}

      {countries.map((country) => (

        <DataPoint
          key={country.code}
          country={country}
        />

      ))}


      {/* =================================
          OUTER RING
      ================================= */}

      <mesh
        rotation={[
          Math.PI / 2.3,
          0.2,
          0
        ]}
      >

        <torusGeometry
          args={[
            1.78,
            0.008,
            16,
            100
          ]}
        />

        <meshBasicMaterial
          color="#00e5ff"
          transparent
          opacity={0.35}
        />

      </mesh>


      {/* =================================
          SECOND OUTER RING
      ================================= */}

      <mesh
        rotation={[
          Math.PI / 2,
          0,
          0.5
        ]}
      >

        <torusGeometry
          args={[
            1.9,
            0.006,
            16,
            100
          ]}
        />

        <meshBasicMaterial
          color="#7c4dff"
          transparent
          opacity={0.25}
        />

      </mesh>

    </group>
  );
}

export default GlobeModel;