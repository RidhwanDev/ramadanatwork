import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title") || "Ramadan at Work";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fdfbf7",
          backgroundImage: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(245, 212, 133, 0.12) 0%, transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px",
            maxWidth: "1000px",
          }}
        >
          <div
            style={{
              fontSize: "80px",
              marginBottom: "20px",
            }}
          >
            ☽
          </div>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              textAlign: "center",
              color: "#1e2328",
              lineHeight: "1.2",
              margin: 0,
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "28px",
              color: "#5a7283",
              textAlign: "center",
              marginTop: "20px",
              margin: 0,
            }}
          >
            A practical guide to support colleagues during Ramadan
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
