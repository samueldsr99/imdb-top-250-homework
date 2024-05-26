import data from "./data.json";
import { ImdbMovie } from "./types";

class ImdbTop250 {
  findAll(): Array<ImdbMovie> {
    return data;
  }

  findByName(name: string): ImdbMovie | undefined {
    return data.find((movie) => movie.name === name);
  }
}

const db = {
  ImdbTop250: new ImdbTop250(),
};

export type * from "./types";
export default db;
