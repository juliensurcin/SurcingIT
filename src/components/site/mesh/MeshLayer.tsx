import { lazy, Suspense } from "react";
import { ClientOnly } from "@tanstack/react-router";
import {
  useIsCompact,
  usePrefersReducedMotion,
  useWebglSupport,
} from "@/lib/motion";
import { useUiContent } from "@/content/ui";

const NetworkScene = lazy(() => import("./NetworkScene"));

/** Static frame shown when WebGL is unavailable. Same node/link grammar. */
function StaticMesh() {
  const { meshLabel } = useUiContent();
  const nodes: [number, number][] = [
    [20, 30],
    [50, 14],
    [80, 32],
    [14, 66],
    [46, 52],
    [84, 62],
    [32, 88],
    [68, 86],
  ];
  const links: [number, number][] = [
    [0, 1],
    [1, 2],
    [0, 4],
    [1, 4],
    [2, 4],
    [3, 4],
    [4, 5],
    [3, 6],
    [4, 6],
    [4, 7],
    [5, 7],
  ];
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
      role="img"
      aria-label={meshLabel}
    >
      {links.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a]![0]}
          y1={nodes[a]![1]}
          x2={nodes[b]![0]}
          y2={nodes[b]![1]}
          stroke="var(--color-primary)"
          strokeOpacity="0.32"
          strokeWidth="0.3"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={1.3} fill="var(--color-primary)" />
      ))}
    </svg>
  );
}

export function MeshLayer({ className = "" }: { className?: string }) {
  const reduced = usePrefersReducedMotion();
  const compact = useIsCompact();
  const webgl = useWebglSupport();

  return (
    <div className={className} aria-hidden="true">
      {webgl === "yes" ? (
        <ClientOnly fallback={<StaticMesh />}>
          <Suspense fallback={<StaticMesh />}>
            <NetworkScene reduced={reduced} compact={compact} />
          </Suspense>
        </ClientOnly>
      ) : (
        <StaticMesh />
      )}
    </div>
  );
}
