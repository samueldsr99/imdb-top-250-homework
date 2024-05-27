"use client";

import { useEffect, useState } from "react";

import useFavoriteMovies from "@/app/hooks/useFavoritesMovies";
import ButtonLink from "@/ui/components/button-link";
import { HearthIcon, HearthIconFilled } from "@/ui/icons";
import { clsx } from "@/ui/utils";

import * as styles from "./header-section.css";

export interface FavoriteSectionProps {
  slug: string;
}

/**
 * NOTE: Workaround for `prop 'd' did not match` error.
 * Couldn't find a better solution atm
 *
 * @link https://github.com/facebook/react/issues/15187
 */
const useIsLoaded = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return loaded;
};

export default function FavoriteSection({ slug }: FavoriteSectionProps) {
  const { isFavorite, toggleFavorite } = useFavoriteMovies();

  const isLoaded = useIsLoaded();
  if (!isLoaded) return null;

  return (
    <ButtonLink onClick={() => toggleFavorite(slug)}>
      {isFavorite(slug) ? (
        <HearthIconFilled className={clsx(styles.hearthIcon, styles.hearthIconFilled)} />
      ) : (
        <HearthIcon className={styles.hearthIcon} />
      )}
    </ButtonLink>
  );
}
