import Image from "next/image";

import { getImdbMovieBySlug } from "@/lib/api/imdb";

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
        src={movie.image_url}
        alt={movie.name}
        width={200}
        height={300}
        className={styles.image}
        style={{ viewTransitionName: `movie-image-${slug}` }}
      />
      <article className={styles.content}>
        <h2>{movie.name}</h2>
        <p>{movie.year}</p>
        <p>{movie.rating}</p>
        <p>{movie.votes}</p>
        <p>{movie.desc}</p>
      </article>
    </div>
  );
}
