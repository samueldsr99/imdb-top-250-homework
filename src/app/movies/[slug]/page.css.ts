import { style } from "@vanilla-extract/css";

export const root = style({
  position: "relative",
  display: "flex",
});

export const image = style({
  width: 300,
  height: "auto",
});

export const content = style({
  padding: 20,
  flex: 1,
});
