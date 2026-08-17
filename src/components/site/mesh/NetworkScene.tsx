/**
 * Hero showpiece: a supervised-network cloud in the brand accent.
 * Tuned deliberately quiet: thin links, low alpha, small nodes, so it
 * reads as texture behind the typography, not as the centrepiece.
 */
import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const ACCENT = new THREE.Color("#2363eb");

function useLinkGeometry(points: THREE.Vector3[], pairs: [number, number][]) {
  return useMemo(() => {
    const positions: number[] = [];
    pairs.forEach(([a, b]) => {
      const pa = points[a];
      const pb = points[b];
      if (!pa || !pb) return;
      positions.push(pa.x, pa.y, pa.z, pb.x, pb.y, pb.z);
    });
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return geom;
  }, [points, pairs]);
}

function Nodes({ points, size, pulse }: { points: THREE.Vector3[]; size: number; pulse: boolean }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    points.forEach((p, i) => {
      dummy.position.copy(p);
      dummy.scale.setScalar(1);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
  }, [points, dummy]);

  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    if (!mesh || !pulse) return;
    const t = clock.getElapsedTime();
    const active = Math.floor(t / 2.4) % points.length;
    const phase = (t / 2.4) % 1;
    points.forEach((p, i) => {
      const s = i === active ? 1 + Math.sin(phase * Math.PI) * 1.15 : 1;
      dummy.position.copy(p);
      dummy.scale.setScalar(s);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, points.length]}>
      <sphereGeometry args={[size, 10, 10]} />
      <meshBasicMaterial color={ACCENT} transparent opacity={0.9} />
    </instancedMesh>
  );
}

function Links({
  points,
  pairs,
  opacity,
}: {
  points: THREE.Vector3[];
  pairs: [number, number][];
  opacity: number;
}) {
  const geom = useLinkGeometry(points, pairs);
  return (
    <lineSegments geometry={geom}>
      <lineBasicMaterial color={ACCENT} transparent opacity={opacity} />
    </lineSegments>
  );
}

function Parallax({ enabled, children }: { enabled: boolean; children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });
  const { size } = useThree();

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: PointerEvent) => {
      target.current.x = (e.clientX / size.width - 0.5) * 0.32;
      target.current.y = -(e.clientY / size.height - 0.5) * 0.22;
    };
    const onTilt = (e: DeviceOrientationEvent) => {
      target.current.x = ((e.gamma ?? 0) / 45) * 0.24;
      target.current.y = ((e.beta ?? 0) / 90) * 0.16;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("deviceorientation", onTilt);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("deviceorientation", onTilt);
    };
  }, [enabled, size.width, size.height]);

  useFrame((_, delta) => {
    const g = group.current;
    if (!g || !enabled) return;
    g.rotation.y += (target.current.x - g.rotation.y) * Math.min(1, delta * 2);
    g.rotation.x += (target.current.y - g.rotation.x) * Math.min(1, delta * 2);
  });

  return <group ref={group}>{children}</group>;
}

function heroLayout(count: number) {
  const points: THREE.Vector3[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    points.push(new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r).multiplyScalar(2.1));
  }
  const pairs: [number, number][] = [];
  points.forEach((p, i) => {
    points.forEach((q, j) => {
      if (j <= i) return;
      if (p.distanceTo(q) < 1.35) pairs.push([i, j]);
    });
  });
  return { points, pairs };
}

function HeroScene({ reduced, compact }: { reduced: boolean; compact: boolean }) {
  const { points, pairs } = useMemo(() => heroLayout(compact ? 16 : 26), [compact]);
  const spin = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (reduced || !spin.current) return;
    spin.current.rotation.y += delta * 0.055;
  });

  return (
    <Parallax enabled={!reduced}>
      <group ref={spin} rotation={[0.25, 0.4, 0]}>
        <Links points={points} pairs={pairs} opacity={compact ? 0.35 : 0.3} />
        <Nodes points={points} size={compact ? 0.05 : 0.04} pulse={!reduced} />
      </group>
    </Parallax>
  );
}

export default function NetworkScene({ reduced, compact }: { reduced: boolean; compact: boolean }) {
  return (
    <Canvas
      dpr={compact ? 1 : [1, 1.75]}
      frameloop={reduced ? "demand" : "always"}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ pointerEvents: "none" }}
    >
      <HeroScene reduced={reduced} compact={compact} />
    </Canvas>
  );
}
