import { Suspense } from "react";

import MoviesResults from "./components/results";
import SearchInput from "./components/search-input";
import SkeletonsLayout from "./components/skeletons-layout/skeletons-layout";

import * as styles from "./page.css";

export interface HomePageProps {
  searchParams: Partial<{ q: string }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const q = searchParams.q;

  return (
    <div className={styles.root}>
      {!q && <h1 className={styles.title}>Top 250 IMDb Movies</h1>}
      <SearchInput placeholder="Search movies..." defaultValue={q} />

      <div key={q}>
        <Suspense fallback={<SkeletonsLayout />}>
          {/* @ts-expect-error Server Component */}
          <MoviesResults q={q} />
        </Suspense>
      </div>
    </div>
  );
}
