import { ImageResponse } from "next/og";
import { OgCard, OG_SIZE, brandFonts } from "@/lib/og";
import { SITE_NAME, EMAIL } from "@/content/site";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = `Contact ${SITE_NAME}`;

export default async function Image() {
  return new ImageResponse(
    (
      <OgCard
        bg="#f4f2ec"
        fg="#1a1916"
        eyebrow="Contact"
        title={SITE_NAME}
        subtitle={`Book a meeting, call, or email ${EMAIL}.`}
      />
    ),
    { ...OG_SIZE, fonts: await brandFonts() }
  );
}
