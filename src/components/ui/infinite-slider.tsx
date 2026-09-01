import { cn } from "@/lib/utils";
import { useMotionValue, animate, motion } from "framer-motion";
import { useState, useEffect } from "react";
import useMeasure from "react-use-measure";

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const [containerRef, { width: containerWidth, height: containerHeight }] =
    useMeasure();
  const [copyRef, { width: copyWidth, height: copyHeight }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  const size = direction === "horizontal" ? copyWidth : copyHeight;
  const viewport =
    direction === "horizontal" ? containerWidth : containerHeight;

  // How many times to repeat `children` in the track. Two copies only
  // loops seamlessly when a single copy is already at least as wide as
  // the visible container — with a short content set (e.g. a handful of
  // partner logos) in a wide section, a single copy is much narrower than
  // the container, so translating through the loop runs out of rendered
  // content before reaching the reset point: the track's second copy
  // scrolls fully past the container's right edge with nothing behind it,
  // exposing the section's background. Rendering enough copies to cover
  // the container twice over (with a floor of 2) keeps the track full at
  // every point in the loop regardless of how narrow the content is.
  const copies =
    size > 0 && viewport > 0
      ? Math.max(2, Math.ceil((viewport * 2) / (size + gap)))
      : 2;

  useEffect(() => {
    let controls: ReturnType<typeof animate>;
    // One copy's own stride: its content width plus the trailing gap that
    // separates it from the next copy. Translating by exactly this
    // distance shifts the whole repeating track by one period, so
    // whatever the next copy looked like at rest is now what the first
    // copy looked like — seamless regardless of how many copies render.
    const contentSize = size + gap;
    const from = reverse ? -contentSize : 0;
    const to = reverse ? 0 : -contentSize;

    if (isTransitioning) {
      controls = animate(translation, [translation.get(), to], {
        ease: "linear",
        duration:
          currentDuration * Math.abs((translation.get() - to) / contentSize),
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: "linear",
        duration: currentDuration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return () => controls?.stop();
  }, [
    key,
    translation,
    currentDuration,
    size,
    gap,
    isTransitioning,
    direction,
    reverse,
  ]);

  const hoverProps = durationOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentDuration(durationOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentDuration(duration);
        },
      }
    : {};

  const copyStyle: React.CSSProperties = {
    gap: `${gap}px`,
    flexDirection: direction === "horizontal" ? "row" : "column",
  };

  return (
    <div ref={containerRef} className={cn("overflow-hidden", className)}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === "horizontal"
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        {...hoverProps}
      >
        <div ref={copyRef} className="flex" style={copyStyle}>
          {children}
        </div>
        {Array.from({ length: Math.max(0, copies - 1) }, (_, i) => (
          <div key={i} className="flex" style={copyStyle}>
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
