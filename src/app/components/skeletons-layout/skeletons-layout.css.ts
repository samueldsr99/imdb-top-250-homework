import { keyframes, style } from "@vanilla-extract/css";

export const root = style({
  marginTop: 10 * 4,
  display: "grid",
  gap: 10 * 4,
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
});

const pulseKeyframes = keyframes({
  "0%": {
    opacity: 0.8,
  },
  "50%": {
    opacity: 0.4,
  },
  "100%": {
    opacity: 0.8,
  },
});

export const skeleton = style({
  width: 300,
  height: 450,
  backgroundColor: "#6b7280",
  borderRadius: 24,

  animation: `${pulseKeyframes} 1.5s infinite`,
});
