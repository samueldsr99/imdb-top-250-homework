import data from "./data.json";
import { ImdbMovie } from "./types";

class ImdbTop250 {
  findAll(q?: string): Array<ImdbMovie> {
    if (!q) {
      return data;
    }

    const query = q.toLowerCase();

    return data.filter((movie) => {
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
