import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const symbols = ['{', '}', '<', '/', '>', ';'];

export default function Particles() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;

    group.current.children.forEach((child, i) => {
      child.position.x += Math.sin(clock.elapsedTime + i) * 0.0005;
      child.position.y += Math.cos(clock.elapsedTime + i) * 0.0005;
    });
  });

  return (
    <group ref={group}>
      {Array.from({ length: 80 }).map((_, i) => (
        <Text
          key={i}
          fontSize={0.25}
          position={[
            THREE.MathUtils.randFloatSpread(6),
            THREE.MathUtils.randFloatSpread(4),
            THREE.MathUtils.randFloatSpread(2),
          ]}
          color="#61dafb"
        >
          {symbols[Math.floor(Math.random() * symbols.length)]}
        </Text>
      ))}

      <Text
        fontSize={1}
        position={[0, 0, 0]}
        color="white"
      >
        Julio
      </Text>
    </group>
  );
}
