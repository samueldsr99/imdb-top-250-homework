"use client";

import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";

import { clsx } from "@/ui/utils";

import * as styles from "./header.css";

const links = [{ id: 1, name: "Home", href: "/" }];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className={styles.root}>
      {links.map(({ id, name, href }) => (
        <Link key={id} href={href} className={clsx(styles.link, isActive(href) && styles.linkActive)}>
          {name}
        </Link>
      ))}
    </header>
  );
}
