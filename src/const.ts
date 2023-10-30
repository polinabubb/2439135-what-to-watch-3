export const Setting = {
  Name: 'The Grand Budapest Hotel',
  Genre: 'Dramaaaaa',
  ReleaseDate: '2014',
};

export const timeoutVideo = 1000;

export const idFirstFilm = 0;

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const Genres = {
  Drama: 'Drama',
  Comedie: 'Comedie',
  Crime: 'Crime',
  Documentary: 'Documentary',
  Horror: 'Horror',
  KidsFamily: 'Kids & Family',
  Romance: 'Romance',
  SciFi: 'Sci-Fi',
  Thriller: 'Thriller',
};

export enum FilmImage {
  BgImage,
  Poster,
  SmallCard,
}
