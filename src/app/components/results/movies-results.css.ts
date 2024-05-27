import { style } from "@vanilla-extract/css";

export const empty = style({
  marginTop: 10 * 4,
  textAlign: "center",
  fontSize: 24,
  color: "gray",
});

export const results = style({
  marginTop: 10 * 4,
  textAlign: "center",
  fontSize: 24,
});

export const grid = style({
  marginTop: 10 * 4,
  display: "grid",
  gap: 10 * 4,
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
});
