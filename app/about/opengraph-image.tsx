import { ImageResponse } from "next/og";
import { OgCard, OG_SIZE, brandFonts } from "@/lib/og";
import { SITE_NAME } from "@/content/site";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = `About ${SITE_NAME}`;

export default async function Image() {
  return new ImageResponse(
    (
      <OgCard
        bg="#f4f2ec"
        fg="#1a1916"
        eyebrow="About"
        title={SITE_NAME}
        subtitle="A strategic design and civic technology consultancy run by Jeremy Zilar."
      />
    ),
    { ...OG_SIZE, fonts: await brandFonts() }
  );
}
