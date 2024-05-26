import { style } from "@vanilla-extract/css";

export const root = style({
  position: "relative",
  overflow: "hidden",
  borderRadius: 24,
  maxWidth: 300,
  height: 450,
  cursor: "pointer",

  opacity: 1,

  transition: "transform 0.2s",
  ":hover": {
    transform: "scale(1.07)",
  },
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",

  transition: "opacity 0.2s",
  selectors: {
    [`${root}:hover &`]: {
      opacity: 0.2,
    },
  },
});

export const metadataContainer = style({
  display: "none",
  position: "absolute",
  inset: 0,

  padding: "32px 22px",

  selectors: {
    [`${root}:hover &`]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
});

export const title = style({
  color: "white",
  fontSize: 24,
  fontWeight: "bold",
  textAlign: "center",
});

export const year = style({
  marginTop: 8,
  color: "#e5e5e5",
  fontSize: 14,
  textAlign: "center",
});

export const description = style({
  marginTop: 36,
  color: "#e5e5e5",
  fontSize: 14,
  textAlign: "center",
});

export const genre = style({
  marginTop: 12,
  color: "#e5e5e5",
  fontSize: 16,
  textAlign: "center",

  display: "flex",
  gap: 2,
});

export const bullet = style({
  color: "darkgray",
  fontSize: 16,
  margin: "0 4px",
});
