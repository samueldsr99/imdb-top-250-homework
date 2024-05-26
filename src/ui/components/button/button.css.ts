import { styleVariants } from "@vanilla-extract/css";

export const button = styleVariants({
  primary: {
    backgroundColor: "#0070f3",
    color: "#fff",
  },
  secondary: {
    backgroundColor: "#333",
    color: "#fff",
  },
});

const styles = {
  button,
};
export default styles;
