import { style } from "@vanilla-extract/css";

export const title = style({
  fontSize: 44,
  fontWeight: "bold",
  marginBottom: 10 * 4,
  textAlign: "center",
});

export const grid = style({
  padding: 4 * 4,
  display: "grid",
  gap: 10 * 4,
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
});
