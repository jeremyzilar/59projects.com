import { ImageResponse } from "next/og";
import {
  OgPhotoCard,
  OG_SIZE,
  brandFonts,
  getRandomHeroPhotoDataUri,
  loadImageDataUri,
} from "@/lib/og";
import { getServices } from "@/lib/content";
import { SITE_NAME } from "@/content/site";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = `Services ${SITE_NAME}`;

export default async function Image() {
  const services = await getServices();
  const [photoDataUri, fonts] = await Promise.all([
    services.photo
      ? loadImageDataUri(services.photo)
      : getRandomHeroPhotoDataUri(),
    brandFonts(),
  ]);

  return new ImageResponse(
    <OgPhotoCard
      photoDataUri={photoDataUri}
      title={`Services ${SITE_NAME}`}
      subtitle="Research, strategy, design, and the building itself, one connected practice."
    />,
    { ...OG_SIZE, fonts }
  );
}
