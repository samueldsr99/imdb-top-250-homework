import data from "./data.json";
import { ImdbMovie } from "./types";

const delay = <T>(value: T, ms: number): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, ms);
  });
};

class ImdbTop250 {
  findAll(q?: string): Promise<Array<ImdbMovie>> {
    const sortByRating = (a: ImdbMovie, b: ImdbMovie) => a.rating - b.rating;

    const delayTime = 2000;

    if (!q) {
      const sorted = [...data];
      sorted.sort(sortByRating);
      return delay(sorted, delayTime);
    }

    const query = q.toLowerCase();

    const filtered = data.filter((movie) => {
      if (movie.name.toLowerCase().includes(query)) {
        return true;
      }
      if (movie.desc.toLowerCase().includes(query)) {
        return true;
      }
      if (movie.genre.some((genre) => genre.toLowerCase().includes(query))) {
        return true;
      }
      if (movie.actors.some((actor) => actor.toLowerCase().includes(query))) {
        return true;
      }
      if (movie.directors.some((director) => director.toLowerCase().includes(query))) {
        return true;
      }
    });
    filtered.sort(sortByRating);

    return delay(filtered, delayTime);
  }

  findBySlug(slug: string): ImdbMovie | undefined {
    const getSlug = (name: string) => name.toLowerCase().replace(/ /g, "-");

    return data.find((movie) => {
      return getSlug(movie.name) === slug;
    });
  }
}

const db = {
  ImdbTop250: new ImdbTop250(),
};

export type * from "./types";
export default db;
