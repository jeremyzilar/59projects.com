import localFont from "next/font/local";

/**
 * Licensed Untitled Sans typeface, self-hosted from
 * `public/fonts/untitled-sans/`. The delivered kit only includes five
 * weights (Light, Regular, Medium, Bold, Black); there's no Semibold (600)
 * or Extrabold (800) file. Any `font-semibold`/`font-extrabold` usage in
 * the app falls back to the nearest heavier weight the browser can find
 * (600 → Bold, 800 → Black) per the standard CSS font-matching algorithm,
 * which is the expected/normal behavior here, not a bug.
 *
 * Italic variants also ship in the kit but aren't wired up since nothing
 * in the site currently uses italics.
 */
export const sans = localFont({
  src: [
    {
      path: "../public/fonts/untitled-sans/UntitledSansWeb-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/untitled-sans/UntitledSansWeb-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/untitled-sans/UntitledSansWeb-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/untitled-sans/UntitledSansWeb-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/untitled-sans/UntitledSansWeb-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-body",
});
