

export type Film = {
  genre: string;
  year: string;
  title: string;
  text: string;
  director: string;
  starring: string;
};

export type FilmRating = {
  score: Number;
  level: string;
  count: Number;
};

export type FilmRatings = FilmRating[];
export type Films = Film[];
