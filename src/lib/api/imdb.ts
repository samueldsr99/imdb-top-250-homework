import { ImdbMovieResponse } from "@/app/api/imdb-top-250/[slug]/route";
import { ImdbTop250Request, ImdbTop250Response } from "@/app/api/imdb-top-250/route";

const BASE_URL = "http://localhost:3000";

export const getImdbTop250 = async ({ q }: ImdbTop250Request = {}): Promise<ImdbTop250Response> => {
  const url = new URL(`${BASE_URL}/api/imdb-top-250`);
  if (q) {
    url.searchParams.set("q", q);
  }

  const response = await fetch(url.toString());
  const data = await response.json();

  return data;
};

export const getImdbMovieBySlug = async (slug: string): Promise<ImdbMovieResponse> => {
  const response = await fetch(`${BASE_URL}/api/imdb-top-250/${slug}`);

  const data = await response.json();

  return data;
};
