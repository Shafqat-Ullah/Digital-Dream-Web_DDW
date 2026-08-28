import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export const alt = "Digital Dream Web — Website & Digital Solutions Company";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #101b2c 0%, #22344b 55%, #163d75 100%)",
          color: "#fff",
          fontFamily: "Sora, sans-serif",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "18px",
              background: "linear-gradient(135deg, #5C9DFB, #2684FC)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "34px",
              fontWeight: 700,
            }}
          >
            W
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "30px", fontWeight: 700, letterSpacing: "-0.02em" }}>Digital Dream</span>
            <span style={{ fontSize: "16px", color: "#8FBEFD", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" }}>
              Web
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "68px", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em", maxWidth: "900px" }}>
            Professional websites and digital solutions built with purpose.
          </div>
          <div style={{ marginTop: "28px", fontSize: "24px", color: "#C7D6E8", maxWidth: "820px", lineHeight: 1.5 }}>
            {site.description}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "28px", fontSize: "20px", color: "#8FBEFD" }}>
          <span>Web Development</span>
          <span style={{ color: "#3B4D66" }}>•</span>
          <span>E-Commerce</span>
          <span style={{ color: "#3B4D66" }}>•</span>
          <span>Custom Web Apps</span>
          <span style={{ color: "#3B4D66" }}>•</span>
          <span>UI/UX Design</span>
        </div>
      </div>
    ),
    { ...size }
  );
}