import { ImdbTop250Response } from "@/app/api/imdb-top-250/route";

const BASE_URL = "http://localhost:3000";

export const getImdbTop250 = async (): Promise<ImdbTop250Response> => {
  const response = await fetch(`${BASE_URL}/api/imdb-top-250`);
  const data = await response.json();

  return data;
};
