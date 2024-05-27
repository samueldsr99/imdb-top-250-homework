import { ImdbMovieResponse } from "@/app/api/imdb-top-250/[slug]/route";
import { ImdbTop250Request, ImdbTop250Response } from "@/app/api/imdb-top-250/route";

const BASE_URL = process.env.BASE_URL;

export const getImdbTop250 = async ({ q }: ImdbTop250Request = {}): Promise<ImdbTop250Response> => {
  const url = new URL(`${BASE_URL}/api/imdb-top-250`);
  if (q) {
    url.searchParams.set("q", q);
  }

  const response = await fetch(url.toString());
  const data = await response.json();

  return data;
};

export const getImdbMovieBySlug = async (slug: string): Promise<ImdbMovieResponse | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}/api/imdb-top-250/${slug}`);

    if (response.status === 404) {
      return undefined;
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return undefined;
  }
};
