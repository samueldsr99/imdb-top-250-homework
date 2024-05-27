import { style } from "@vanilla-extract/css";

export const root = style({
  position: "relative",
  display: "flex",
});

export const image = style({
  width: 400,
});

export const content = style({
  padding: 20,
  flex: 1,
});

export const description = style({
  maxWidth: 600,
  paddingTop: 20,
  fontSize: 16,
  color: "lightgray",
  margin: 0,
});

export const year = style({
  paddingTop: 20,
  fontSize: 16,
  color: "gray",
  margin: 0,
  textAlign: "right",
});

export const genre = style({
  display: "flex",
  gap: 10,
  paddingTop: 20,
});

export const bullet = style({
  color: "darkgray",
});

export const rating = style({
  display: "flex",
  alignItems: "baseline",
  gap: 4,
  paddingTop: 20,
});
