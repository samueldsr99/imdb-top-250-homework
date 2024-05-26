import { getImdbTop250 } from "@/lib/api/imdb";

import { container } from "./page.css";

export default async function Home() {
  const imdbTop250 = await getImdbTop250();

  return <main className={container}>{JSON.stringify(imdbTop250, null, 2)}</main>;
}
