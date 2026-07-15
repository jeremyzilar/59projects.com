import Image from "next/image";
import clsx from "clsx";

/**
 * Default floor for how narrow an image can render, regardless of its
 * natural aspect ratio, when the caller doesn't specify its own via the
 * `minWidth` prop. Source files whose natural width at the container's
 * height would fall under this (e.g. a full-page screenshot) get
 * center-cropped instead of shrinking to an unreadable sliver;
 * normal-proportioned images are unaffected.
 */
const DEFAULT_MIN_WIDTH_PX = 260;

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
   * image renders at its natural aspect ratio (via CSS `aspect-ratio`)
   * instead of filling the container outright. Pair with a height-only
   * className (e.g. `h-[260px]`); the width follows automatically, down to
   * `minWidth`, below which the image crops (object-cover) rather than
   * keep shrinking.
   */
  width?: number;
  height?: number;
  /** Overrides DEFAULT_MIN_WIDTH_PX, e.g. a narrower floor for mobile screenshots. */
  minWidth?: number;
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
  minWidth = DEFAULT_MIN_WIDTH_PX,
}: ImagePlaceholderProps) {
  if (src && width && height) {
    return (
      <div
        className={clsx("relative inline-block overflow-hidden", className)}
        style={{
          aspectRatio: `${width} / ${height}`,
          minWidth: `${minWidth}px`,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          quality={quality}
          priority={priority}
          className="object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div
      className={clsx("relative overflow-hidden", className)}
      style={{ minWidth: `${minWidth}px` }}
    >
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
