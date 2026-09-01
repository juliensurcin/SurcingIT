import { usePrefersReducedMotion } from "@/lib/motion";

type Logo = { src: string; alt: string };

/**
 * A slow orbit: logos sit at fixed points on a circle and drift around it
 * together (outer ring rotates 0→360 over 48s), each counter-rotating in
 * place to stay upright (own keyframes per logo, from -angle to
 * -angle-360, cancelling the ring's rotation plus its own static
 * placement angle). The endpoint-protection twin of
 * managed/SolutionsCluster.tsx's magnetic hover cluster on the
 * email-protection section right above it — same "logos beside the text"
 * role, deliberately different mechanic so the two sibling sections don't
 * repeat the same trick back to back.
 */
export function OrbitCluster({ logos }: { logos: Logo[] }) {
  const reduced = usePrefersReducedMotion();
  const radius = "6.5rem";
  const angles = logos.map((_, i) => (360 / logos.length) * i);

  return (
    <div className="relative mx-auto h-[16rem] w-full max-w-[16rem]">
      {!reduced && (
        <style>
          {`@keyframes orbit-cluster-spin { to { transform: rotate(360deg); } }
${angles
  .map(
    (angle, i) =>
      `@keyframes orbit-counter-${i} { from { transform: rotate(${-angle}deg); } to { transform: rotate(${-angle - 360}deg); } }`,
  )
  .join("\n")}`}
        </style>
      )}
      <div
        className="absolute inset-0"
        style={
          reduced
            ? undefined
            : { animation: "orbit-cluster-spin 48s linear infinite" }
        }
      >
        {logos.map((logo, i) => {
          const angle = angles[i]!;
          return (
            <div
              key={logo.alt}
              className="absolute left-1/2 top-1/2 -ml-8 -mt-8 size-16"
              style={{ transform: `rotate(${angle}deg) translate(${radius})` }}
            >
              <div
                title={logo.alt}
                className="flex size-16 items-center justify-center border border-border bg-background p-3"
                style={
                  reduced
                    ? { transform: `rotate(${-angle}deg)` }
                    : { animation: `orbit-counter-${i} 48s linear infinite` }
                }
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  width={48}
                  height={48}
                  loading="lazy"
                  className="pointer-events-none max-h-full max-w-full select-none object-contain"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
