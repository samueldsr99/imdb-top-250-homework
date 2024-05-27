import { style } from "@vanilla-extract/css";

export const root = style({
  marginTop: 32,
  paddingLeft: 16,
  paddingRight: 16,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 24,
});

export const title = style({
  fontSize: 48,
  textAlign: "center",
});

export const link = style({
  textDecoration: "underline",
  fontSize: 24,
  textAlign: "center",
  color: "white",
});

export const resetButton = style({
  marginTop: 16,
  padding: "12px 24px",
  borderRadius: 8,
  fontSize: 20,
  backgroundColor: "transparent",
  color: "white",
  border: "none",
  cursor: "pointer",
  display: "block",
  margin: "0 auto",

  transition: "background-color 0.2s",

  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  ":active": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
});
