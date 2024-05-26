import { Link } from "next-view-transitions";

import Logo from "../logo";

import * as styles from "./header.css";

export default function Header() {
  return (
    <header className={styles.root}>
      <Link href="/" className={styles.link}>
        <Logo />
      </Link>
    </header>
  );
}
