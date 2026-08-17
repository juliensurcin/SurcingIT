import { useEffect, useRef } from "react";
import styles from "./IconCloud.module.css";

// Moitié stack dev, moitié cyber/infra — slugs vérifiés un par un contre
// cdn.simpleicons.org (BloodHound et Azure AD n'existent pas dans cette
// librairie, retirés ; AWS et VS Code y ont depuis été retirés aussi —
// marques déréférencées par simple-icons — remplacés par googlecloud/npm).
const DEV_SLUGS = [
  "typescript",
  "javascript",
  "react",
  "nextdotjs",
  "nodedotjs",
  "docker",
  "git",
  "github",
  "figma",
  "postgresql",
  "googlecloud",
  "vercel",
  "css",
  "html5",
  "npm",
];

const CYBER_SLUGS = [
  "linux",
  "kalilinux",
  "redhat",
  "ubuntu",
  "wireshark",
  "owasp",
  "hackthebox",
  "metasploit",
  "burpsuite",
  "cloudflare",
  "vault",
  "terraform",
  "ansible",
  "kubernetes",
  "splunk",
];

const SLUGS = [...DEV_SLUGS, ...CYBER_SLUGS];

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function fibonacciSphere(count: number, radius: number) {
  const points: { x: number; y: number; z: number }[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = goldenAngle * i;
    points.push({
      x: Math.cos(theta) * r * radius,
      y: y * radius,
      z: Math.sin(theta) * r * radius,
    });
  }
  return points;
}

export function IconCloud() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      width = canvas!.clientWidth;
      height = canvas!.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    }

    const radius = () => Math.min(width, height) * 0.4;

    type IconPoint = {
      x: number;
      y: number;
      z: number;
      img: HTMLImageElement;
      loaded: boolean;
    };

    const positions = fibonacciSphere(SLUGS.length, radius());
    const icons: IconPoint[] = SLUGS.map((slug, i) => {
      const img = new window.Image();
      const point: IconPoint = { ...positions[i]!, img, loaded: false };
      img.onload = () => {
        point.loaded = true;
        draw();
      };
      img.src = `https://cdn.simpleicons.org/${slug}`;
      return point;
    });

    let rotY = 0;
    let rotX = 0.25;
    let velX = 0;
    let velY = reducedMotion ? 0 : 0.0025;
    let dragging = false;
    let lastPointer = { x: 0, y: 0 };
    let raf = 0;

    // Fenêtre glissante des dernières positions/timestamps pendant le drag :
    // la vélocité de lancer se calcule sur ~100ms de recul au relâchement,
    // pas sur le seul dernier pointermove (souvent quasi immobile juste
    // avant le lift-off, ce qui tuait le momentum sur un flick rapide).
    const HISTORY_WINDOW_MS = 100;
    let history: { x: number; y: number; t: number }[] = [];
    const MAX_FLING_VELOCITY = 0.03;

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      const r = radius();
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const projected = icons.map((icon) => {
        const x1 = icon.x * cosY - icon.z * sinY;
        const z1 = icon.x * sinY + icon.z * cosY;
        const y1 = icon.y * cosX - z1 * sinX;
        const z2 = icon.y * sinX + z1 * cosX;

        const focal = r * 2.2;
        const scale = focal / (focal + z2);
        return {
          icon,
          sx: width / 2 + x1 * scale,
          sy: height / 2 + y1 * scale,
          scale,
          z: z2,
        };
      });

      projected.sort((a, b) => a.z - b.z);

      for (const p of projected) {
        if (!p.icon.loaded) continue;
        const size = r * 0.16 * p.scale;
        const opacity = Math.max(0.25, Math.min(1, (p.scale - 0.5) / 0.8));
        ctx!.globalAlpha = opacity;
        ctx!.drawImage(
          p.icon.img,
          p.sx - size / 2,
          p.sy - size / 2,
          size,
          size,
        );
      }
      ctx!.globalAlpha = 1;
    }

    function onPointerDown(event: PointerEvent) {
      dragging = true;
      lastPointer = { x: event.clientX, y: event.clientY };
      velX = 0;
      velY = 0;
      history = [{ x: event.clientX, y: event.clientY, t: performance.now() }];
    }

    function onPointerMove(event: PointerEvent) {
      if (!dragging) return;
      const dx = event.clientX - lastPointer.x;
      const dy = event.clientY - lastPointer.y;
      lastPointer = { x: event.clientX, y: event.clientY };
      rotY += dx * 0.006;
      rotX += dy * 0.006;

      const now = performance.now();
      history.push({ x: event.clientX, y: event.clientY, t: now });
      while (history.length > 1 && now - history[0]!.t > HISTORY_WINDOW_MS) {
        history.shift();
      }
      draw();
    }

    function onPointerUp() {
      if (!dragging) return;
      dragging = false;

      const oldest = history[0];
      const newest = history[history.length - 1];
      const dt = newest ? newest.t - (oldest?.t ?? newest.t) : 0;
      if (oldest && newest && dt > 0) {
        const dx = newest.x - oldest.x;
        const dy = newest.y - oldest.y;
        velY = clamp(
          (dx / dt) * (1000 / 60) * 0.0008,
          -MAX_FLING_VELOCITY,
          MAX_FLING_VELOCITY,
        );
        velX = clamp(
          (dy / dt) * (1000 / 60) * 0.0008,
          -MAX_FLING_VELOCITY,
          MAX_FLING_VELOCITY,
        );
      }
      history = [];
    }

    canvas.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("resize", resize);

    function tick() {
      if (!dragging) {
        rotY += velY;
        rotX += velX;
        velX *= 0.94;
        velY += (0.0025 - velY) * 0.02;
      }
      draw();
      raf = requestAnimationFrame(tick);
    }

    resize();
    if (reducedMotion) {
      draw();
    } else {
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      canvas.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className={styles["wrap"]}>
      <canvas ref={canvasRef} className={styles["canvas"]} aria-hidden="true" />
    </div>
  );
}
