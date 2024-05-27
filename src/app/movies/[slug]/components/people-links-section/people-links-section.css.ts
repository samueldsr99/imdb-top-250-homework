import { style } from "@vanilla-extract/css";

export const personLinksContainer = style({
  display: "flex",
  gap: 16,
  paddingTop: 20,
  fontSize: 16,
  color: "white",
  margin: 0,
});

export const personLink = style({
  color: "white",
  textDecoration: "underline",
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
});
