import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    primary: "#0070f3",
    white: "#fff",
  },
  space: {
    small: "4px",
    medium: "8px",
  },
});
