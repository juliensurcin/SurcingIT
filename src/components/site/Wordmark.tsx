import { brand } from "@/content/home";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display font-semibold tracking-[-0.01em] ${className}`}
    >
      {brand.name}
    </span>
  );
}
