import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
        className,
      )}
    >
      <InfiniteSlider gap={56} duration={35} durationOnHover={90}>
        {logos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            width={36}
            height={36}
            className="pointer-events-none size-8 shrink-0 select-none md:size-9"
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}
