import { getImdbTop250 } from "@/lib/api/imdb";

import MovieCard from "./components/movie-card/movie-card";

import * as styles from "./page.css";

export default async function Home() {
  const imdbTop250 = await getImdbTop250();

  return (
    <>
      <h1 className={styles.title}>Top 250 Movies</h1>

      <section id="movies" className={styles.grid}>
        {imdbTop250.map((movie) => (
          <MovieCard key={movie.name} movie={movie} />
        ))}
      </section>
    </>
  );
}
