"use client";

import { Link } from "next-view-transitions";

import * as styles from "./error.css";

export default function Error({ reset }: { error: Error & { digest: string }; reset: () => void }) {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Oops.. Something went wrong</h1>
      <Link className={styles.link} href="/">
        Go home
      </Link>
      <span>or</span>
      <button className={styles.resetButton} onClick={reset}>
        Try again
      </button>
    </div>
  );
}
