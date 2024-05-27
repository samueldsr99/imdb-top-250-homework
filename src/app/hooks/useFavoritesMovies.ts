import useLocalStorage from "./useLocalStorage";

export default function useFavoriteMovies() {
  const [favoriteMovies, setFavoriteMovies] = useLocalStorage<Array<string>>("favorite-movies", []);

  const isFavorite = (slug: string) => favoriteMovies.includes(slug);

  const toggleFavorite = (slug: string) =>
    setFavoriteMovies((prev) => {
      if (prev.includes(slug)) {
        return prev.filter((movie) => movie !== slug);
      }

      return [...prev, slug];
    });

  return { isFavorite, toggleFavorite };
}
