import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import { getImdbMovieBySlug } from "@/lib/api/imdb";
import StarsRating from "@/ui/components/stars-rating/stars-rating";
import { ExternalLinkIcon } from "@/ui/icons";

import * as styles from "./page.css";

export interface MoviePageProps {
  params: { slug: string };
}

export default async function MoviePage({ params }: MoviePageProps) {
  const slug = decodeURIComponent(params.slug);

  const movie = await getImdbMovieBySlug(slug);

  return (
    <div className={styles.root}>
      <Image
        className={styles.image}
        src={movie.image_url}
        alt={movie.name}
        width={400}
        height={600}
        style={{ viewTransitionName: `movie-image-${slug}` }}
        priority
      />
      <article className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{movie.name}</h2>

          <Link target="_blank" href={`https://m.imdb.com/${movie.imdb_url}`} className={styles.imdbLink}>
            (See in IMDB)
            <ExternalLinkIcon />
          </Link>
        </div>

        <div className={styles.genre}>
          {movie.genre.map((genre, index) => (
            <Fragment key={genre}>
              <p>{genre}</p>
              {index < movie.genre.length - 1 && <p className={styles.bullet}>•</p>}
            </Fragment>
          ))}
        </div>

        <p className={styles.description}>{movie.desc}</p>
        <div className={styles.personLinksContainer}>
          <span>Actors:</span>
          {movie.actors.map((actor) => (
            <Link
              key={actor}
              href={`https://www.google.com/search?q=${encodeURIComponent(actor)}`}
              target="_blank"
              className={styles.personLink}
            >
              <span dangerouslySetInnerHTML={{ __html: actor }} />
              <ExternalLinkIcon />
            </Link>
          ))}
        </div>
        <div className={styles.personLinksContainer}>
          <span>Directors:</span>
          {movie.directors.map((director) => (
            <Link
              key={director}
              href={`https://www.google.com/search?q=${encodeURIComponent(director)}`}
              target="_blank"
              className={styles.personLink}
            >
              <span dangerouslySetInnerHTML={{ __html: director }} />
              <ExternalLinkIcon />
            </Link>
          ))}
        </div>

        <div className={styles.rating}>
          <span>Rating ({movie.rating} / 10):</span>
          <StarsRating rating={movie.rating} maxRating={10} />
        </div>

        <p className={styles.year}>{movie.year}</p>
      </article>
    </div>
  );
}
