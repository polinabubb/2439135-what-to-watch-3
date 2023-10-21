

export type Film = {
  id: number;
  genre: string;
  year: string;
  title: string;
  text: string;
  director: string;
  starring: string;
};

export type FilmRating = {
  score: number;
  level: string;
  count: number;
};

export type FilmRatings = FilmRating[];
export type Films = Film[];
