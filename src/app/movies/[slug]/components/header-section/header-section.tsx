import Link from "next/link";

import { ExternalLinkIcon } from "@/ui/icons";

import FavoriteSection from "./favorite-section";

import * as styles from "./header-section.css";

export default function HeaderSection({ title, imdbUrl }: { title: string; imdbUrl: string }) {
  return (
    <div className={styles.header}>
      <div>
        <h2 className={styles.title}>{title}</h2>

        <Link target="_blank" href={`https://m.imdb.com/${imdbUrl}`} className={styles.imdbLink}>
          (See in IMDB)
          <ExternalLinkIcon />
        </Link>
      </div>

      <FavoriteSection slug={title} />
    </div>
  );
}
