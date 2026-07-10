import { ImageResponse } from "next/og";
import { brandFonts } from "@/lib/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a1916",
          color: "#f4f2ec",
          fontSize: 17,
          fontWeight: 700,
          fontFamily: "Untitled Sans",
        }}
      >
        59
      </div>
    ),
    { ...size, fonts: await brandFonts() }
  );
}
