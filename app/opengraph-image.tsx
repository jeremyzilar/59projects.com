import { ImageResponse } from "next/og";
import { OgCard, OG_SIZE, brandFonts } from "@/lib/og";
import { SITE_NAME, SITE_DESCRIPTION, LOCATION } from "@/content/site";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = SITE_NAME;

export default async function Image() {
  return new ImageResponse(
    (
      <OgCard
        bg="#f4f2ec"
        fg="#1a1916"
        eyebrow={LOCATION}
        title={SITE_NAME}
        subtitle={SITE_DESCRIPTION}
      />
    ),
    { ...OG_SIZE, fonts: await brandFonts() }
  );
}
