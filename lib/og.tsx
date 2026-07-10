import { readFile } from "node:fs/promises";
import path from "node:path";
import { SITE_URL } from "@/content/site";

/** Standard Open Graph / Twitter card image size. */
export const OG_SIZE = { width: 1200, height: 630 } as const;

const FONTS_DIR = path.join(process.cwd(), "public/fonts/untitled-sans");

let fontData: Promise<[Buffer, Buffer]> | undefined;

/**
 * Bold (titles) and Regular (subtitles), read once per server process and
 * reused across every OG image route. `next/og`'s renderer (Satori) only
 * supports .ttf/.otf/.woff font data, not .woff2, and both weights together
 * stay well under the ~500KB font+code budget for these routes.
 */
function loadBrandFont() {
  fontData ??= Promise.all([
    readFile(path.join(FONTS_DIR, "UntitledSansWeb-Bold.woff")),
    readFile(path.join(FONTS_DIR, "UntitledSansWeb-Regular.woff")),
  ]);
  return fontData;
}

export async function brandFonts() {
  const [bold, regular] = await loadBrandFont();
  return [
    { name: "Untitled Sans", data: bold, style: "normal" as const, weight: 700 as const },
    { name: "Untitled Sans", data: regular, style: "normal" as const, weight: 400 as const },
  ];
}

interface OgCardProps {
  bg: string;
  fg: string;
  /** Small label above the title, e.g. a project number or "About". */
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Defaults to the site's domain. */
  footer?: string;
}

/** Shared visual template for every generated share-preview image on the site. */
export function OgCard({
  bg,
  fg,
  eyebrow,
  title,
  subtitle,
  footer,
}: OgCardProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: bg,
        color: fg,
        padding: "76px",
        fontFamily: "Untitled Sans",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 28,
          fontWeight: 700,
          opacity: 0.55,
          letterSpacing: 3,
        }}
      >
        {(eyebrow ?? "").toUpperCase()}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div
          style={{
            display: "flex",
            fontSize: 78,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          {title}
        </div>
        {subtitle ? (
          <div
            style={{
              display: "flex",
              fontSize: 32,
              fontWeight: 400,
              opacity: 0.75,
              maxWidth: 920,
              lineHeight: 1.35,
            }}
          >
            {subtitle}
          </div>
        ) : null}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 26,
          fontWeight: 700,
          opacity: 0.55,
          letterSpacing: 1,
        }}
      >
        {footer ?? SITE_URL.replace("https://", "")}
      </div>
    </div>
  );
}
