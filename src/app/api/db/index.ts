import data from "./data.json";
import { ImdbMovie } from "./types";

class ImdbTop250 {
  findAll(): Array<ImdbMovie> {
    return data;
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
