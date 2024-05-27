import { Fragment } from "react";
import Link from "next/link";

import { getImdbMovieBySlug } from "@/lib/api/imdb";
import ImageWithFallback from "@/ui/components/image-with-fallback/image-with-fallback";
import StarsRating from "@/ui/components/stars-rating";

import HeaderSection from "./components/header-section";
import PeopleLinksSection from "./components/people-links-section";

import * as styles from "./page.css";

export interface MoviePageProps {
  params: { slug: string };
}

export const GenreSection = ({ genre }: { genre: string[] }) => (
  <div className={styles.genre}>
    {genre.map((genre, index) => (
      <Fragment key={genre}>
        <p>{genre}</p>
        {index < genre.length - 1 && <p className={styles.bullet}>•</p>}
      </Fragment>
    ))}
  </div>
);

const NotFoundLayout = () => (
  <div className={styles.notFound}>
    <h1 className={styles.notFoundTitle}>Movie not found</h1>
    <Link className={styles.notFoundLink} href="/">
      Go home
    </Link>
  </div>
);

export default async function MoviePage({ params }: MoviePageProps) {
  const slug = decodeURIComponent(params.slug);

  const movie = await getImdbMovieBySlug(slug);

  if (!movie) {
    return <NotFoundLayout />;
  }

  return (
    <div className={styles.root}>
      <ImageWithFallback
        className={styles.image}
        src={movie.image_url}
        fallbackSrc="/images/noise.jpeg"
        alt={movie.name}
        width={400}
        height={600}
        style={{ viewTransitionName: `movie-image-${slug}` }}
        priority
      />
      <article className={styles.content}>
        <HeaderSection title={movie.name} slug={slug} imdbUrl={movie.imdb_url} />
        <GenreSection genre={movie.genre} />
        <p className={styles.description}>{movie.desc}</p>
        <PeopleLinksSection title="Actors" people={movie.actors} />
        <PeopleLinksSection title="Directors" people={movie.directors} />
        <div className={styles.rating}>
          <span>Rating ({movie.rating} / 10):</span>
          <StarsRating rating={movie.rating} maxRating={10} />
        </div>
        <p className={styles.year}>{movie.year}</p>
      </article>
    </div>
  );
}
