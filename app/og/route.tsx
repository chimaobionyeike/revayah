import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const alt = "REVAYAH";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0D3B2E",
          color: "#F7F7F5",
          padding: 72,
          alignItems: "flex-end"
        }}
      >
        <div>
          <div style={{ color: "#C8A96E", fontSize: 30, letterSpacing: 6, marginBottom: 32 }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 82, lineHeight: 0.98, maxWidth: 980 }}>
            Healthcare market access and commercial partnerships in Nigeria.
          </div>
        </div>
      </div>
    ),
    size
  );
}
