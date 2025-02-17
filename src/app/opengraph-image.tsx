import { ImageResponse } from "next/og"; 

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Adly Bibi";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "black",
          fontSize: 24,
          fontWeight: 900,
          textAlign: "center",
          fontFamily: "Space Mono",
          borderRadius: "10%",
        }}
      >
        <div
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(0, 128, 64), rgb(0, 153, 51), rgb(0, 204, 102))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          AB
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    },
  );
}
