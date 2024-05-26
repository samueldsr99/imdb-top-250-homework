import { style } from "@vanilla-extract/css";

export const root = style({
  position: "sticky",
  top: 0,
  zIndex: 999,

  padding: "36px 36px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  background: "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
});

export const link = style({
  fontSize: 20,
  fontWeight: 400,
  textDecoration: "none",
  color: "white",

  transition: "color 150ms",
  ":hover": {
    color: "darkgray",
  },
});

export const linkActive = style({
  fontWeight: 500,
});
