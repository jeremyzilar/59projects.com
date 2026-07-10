import Image from "next/image";
import clsx from "clsx";

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  fg: string;
  className?: string;
  /**
   * Tell the browser how wide this image actually renders at each
   * breakpoint so Next requests an appropriately sized file instead of
   * defaulting to full viewport width. See call sites for real examples
   * (fixed-px crops vs. full-bleed vs. multi-column grids).
   */
  sizes?: string;
  /** Mark the image as part of the largest-contentful-paint above the fold. */
  priority?: boolean;
  quality?: number;
  /**
   * Intrinsic pixel size of the source file. When both are provided, the
   * image renders at its natural aspect ratio instead of being cropped to
   * fill the container with `fill` + object-cover. Pair with a height-only
   * className (e.g. `h-[260px]`); the width follows automatically and the
   * container hugs it, so the full image is always visible, uncropped.
   */
  width?: number;
  height?: number;
}

export function ImagePlaceholder({
  src,
  alt,
  fg,
  className,
  sizes = "100vw",
  priority = false,
  quality = 85,
  width,
  height,
}: ImagePlaceholderProps) {
  if (src && width && height) {
    return (
      <div
        className={clsx(
          "relative inline-block w-fit overflow-hidden",
          className
        )}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          quality={quality}
          priority={priority}
          className="h-full w-auto"
        />
      </div>
    );
  }

  return (
    <div className={clsx("relative min-w-[160px] overflow-hidden", className)}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          quality={quality}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center border border-dashed text-[11px] font-semibold tracking-[0.06em] uppercase"
          style={{ borderColor: `${fg}33`, color: `${fg}99` }}
        >
          Image coming soon
        </div>
      )}
    </div>
  );
}
