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

export const notFound = style({
  marginTop: 32,
  paddingLeft: 16,
  paddingRight: 16,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 24,
});

export const notFoundTitle = style({
  fontSize: 48,
  textAlign: "center",
});

export const notFoundLink = style({
  textDecoration: "underline",
  fontSize: 24,
  textAlign: "center",
  color: "white",
});
