export type Film = {
  id: number;
  genre: string;
  year: string;
  title: string;
  text: string;
  director: string;
  starring: string;
  trailer: string;
};
export type FilmRating = {
  filmId: number;
  score: number;
  level: string;
  count: number;
};
