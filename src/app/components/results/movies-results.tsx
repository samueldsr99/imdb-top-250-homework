import { getImdbTop250 } from "@/lib/api/imdb";

import MovieCard from "../movie-card";

import * as styles from "./movies-results.css";

export interface MoviesResultsProps {
  q: string;
}

export default async function MoviesResults({ q }: MoviesResultsProps) {
  const imdbTop250 = await getImdbTop250({ q });
  const count = imdbTop250.length;

  return (
    <div>
      {count === 0 ? (
        <p className={styles.empty}>No movies found for: &quot;{q}&quot;</p>
      ) : (
        <>
          {q?.length ? (
            <p className={styles.results}>
              Found {count} results for: &quot;{q}&quot;
            </p>
          ) : null}
          <section id="movies" className={styles.grid}>
            {imdbTop250.map((movie) => (
              <MovieCard key={movie.name} movie={movie} />
            ))}
          </section>
        </>
      )}
    </div>
  );
}
