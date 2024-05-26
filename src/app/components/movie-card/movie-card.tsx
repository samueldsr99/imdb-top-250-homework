import { Fragment } from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";

import { ImdbMovie } from "@/app/api/db";

import * as styles from "./movie-card.css";

export interface MovieCardProps {
  movie: ImdbMovie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const slug = movie.name.toLowerCase().replace(/ /g, "-");

  return (
    <Link className={styles.root} href={`/movies/${slug}`}>
      <Image
        className={styles.image}
        src={movie.image_url}
        alt={movie.name}
        width={200}
        height={300}
        style={{ viewTransitionName: `movie-image-${slug}` }}
      />

      <div className={styles.metadataContainer}>
        <h2 className={styles.title}>{movie.name}</h2>

        <div className={styles.genre}>
          {movie.genre.map((genre, index) => (
            <Fragment key={genre}>
              <p>{genre}</p>
              {index < movie.genre.length - 1 && <p className={styles.bullet}>&bull;</p>}
            </Fragment>
          ))}
        </div>

        <p className={styles.description} dangerouslySetInnerHTML={{ __html: movie.desc }} />

        <p className={styles.year}>{movie.year}</p>
      </div>
    </Link>
  );
}
