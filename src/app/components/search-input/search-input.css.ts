import { style } from "@vanilla-extract/css";

export const root = style({
  maxWidth: 400,
  position: "relative",
  transition: "max-width 0.2s",

  ":focus-within": {
    maxWidth: 600,
  },
});

export const input = style({
  padding: "12px 4px 12px 16px",
  fontSize: 16,
  borderRadius: 8,
  border: "1px solid lightgray",
  width: "100%",
  outline: "none",

  background: "transparent",
  color: "#e5e5e5",

  opacity: 0.4,
  transition: "opacity 0.2s",

  ":focus": {
    opacity: 1,
  },
});

export const iconButton = style({
  outline: "none",
  cursor: "pointer",
  position: "absolute",
  top: "50%",
  right: -12,
  transform: "translateY(-50%)",
  color: "gray",

  background: "transparent",
  border: "none",
});

export const icon = style({
  width: 28,
  height: 28,
});
