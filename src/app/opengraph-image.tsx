import { ImageResponse } from "next/og";

export const alt = "Kishan Kumar Jha — Full Stack Developer";
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
          padding: "72px",
          background: "#04060c",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(79,125,255,0.35), transparent 45%), radial-gradient(rgba(150,172,224,0.18) 1.5px, transparent 1.5px)",
          backgroundSize: "100% 100%, 32px 32px",
          color: "#e9edf6",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#93acff" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#4f7dff" }} />
          Kishan Kumar Jha
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 80, fontWeight: 800, lineHeight: 1.02, letterSpacing: -3, maxWidth: 980 }}>
            I build digital products that move businesses forward.
          </div>
          <div style={{ fontSize: 30, color: "#9099ad" }}>Full Stack Developer · MERN Stack · React · Next.js</div>
        </div>
      </div>
    ),
    size,
  );
}
