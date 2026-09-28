import { useState } from "react";
import { Html } from "@react-three/drei";
import GlobeTooltip from "./GlobeTooltip";


/* =========================================
   CONVERT LATITUDE + LONGITUDE
   TO THREE.JS POSITION
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
   DATA POINT COMPONENT
========================================= */

function DataPoint({ country }) {

  const [hovered, setHovered] = useState(false);


  /* Find the country's position */

  const position = latLongToVector3(
    country.latitude,
    country.longitude,
    1.54
  );


  return (
    <group position={position}>

      {/* =================================
          GLOWING POINT
      ================================= */}

      <mesh
        onPointerOver={(event) => {
          event.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => {
          setHovered(false);
        }}
      >
        <sphereGeometry
          args={[0.035, 16, 16]}
        />

        <meshStandardMaterial
          color="#00e5ff"
          emissive="#00e5ff"
          emissiveIntensity={4}
        />
      </mesh>


      {/* =================================
          RING AROUND POINT
      ================================= */}

      <mesh
        rotation={[
          Math.PI / 2,
          0,
          0
        ]}
      >
        <ringGeometry
          args={[
            0.055,
            0.075,
            32
          ]}
        />

        <meshBasicMaterial
          color="#00e5ff"
          transparent
          opacity={0.7}
        />
      </mesh>


      {/* =================================
          COUNTRY TOOLTIP
      ================================= */}

      {hovered && (
        <Html
          distanceFactor={4}
          zIndexRange={[100, 0]}
        >
          <GlobeTooltip
            country={country}
          />
        </Html>
      )}

    </group>
  );
}


export default DataPoint;