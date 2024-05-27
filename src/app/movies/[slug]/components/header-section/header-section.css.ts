import { style } from "@vanilla-extract/css";

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  gap: 8,
});

export const title = style({
  fontSize: 56,
  fontWeight: "bold",
  margin: 0,
});

export const imdbLink = style({
  fontSize: 20,
  color: "gray",
});

export const hearthIcon = style({
  width: 36,
  height: 36,
});

export const hearthIconFilled = style({
  color: "red",
});
