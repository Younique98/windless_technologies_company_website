import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// A minimal blueprint corner-bracket mark on the structural-blue field -
// the same crop-mark motif used on cards throughout the site.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0c2038",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            border: "3px solid #8fc1ea",
            borderRadius: 2,
          }}
        />
      </div>
    ),
    size,
  );
}
