import React from "react";

import * as styles from "./button-link.css";

export type ButtonLinkProps = React.ComponentProps<"button">;

export default function ButtonLink(props: ButtonLinkProps) {
  return <button className={styles.root} {...props} />;
}
