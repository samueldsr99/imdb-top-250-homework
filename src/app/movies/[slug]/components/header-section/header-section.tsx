"use client";

import { useState } from "react";
import Link from "next/link";

import ButtonLink from "@/ui/components/button-link";
import { ExternalLinkIcon, HearthIcon, HearthIconFilled } from "@/ui/icons";
import { clsx } from "@/ui/utils";

import * as styles from "./header-section.css";

export default function HeaderSection({ title, imdbUrl }: { title: string; imdbUrl: string }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className={styles.header}>
      <div>
        <h2 className={styles.title}>{title}</h2>

        <Link target="_blank" href={`https://m.imdb.com/${imdbUrl}`} className={styles.imdbLink}>
          (See in IMDB)
          <ExternalLinkIcon />
        </Link>
      </div>

      <ButtonLink onClick={() => setLiked((prev) => !prev)}>
        {liked ? (
          <HearthIconFilled className={clsx(styles.hearthIcon, styles.hearthIconFilled)} />
        ) : (
          <HearthIcon className={styles.hearthIcon} />
        )}
      </ButtonLink>
    </div>
  );
}
