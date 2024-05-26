import { getImdbTop250 } from "@/lib/api/imdb";

import MovieCard from "./components/movie-card/movie-card";
import SearchInput from "./components/search-input/search-input";

import * as styles from "./page.css";

export interface HomePageProps {
  searchParams: Partial<{ q: string }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const q = searchParams.q;
  const imdbTop250 = await getImdbTop250({ q });

  const count = imdbTop250.length;

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Top 250 IMDb Movies</h1>
      <SearchInput placeholder="Search movies..." defaultValue={q} />

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
