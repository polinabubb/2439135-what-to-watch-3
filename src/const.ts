export const Setting = {
  Name: 'The Grand Budapest Hotel',
  Genre: 'Dramaaaaa',
  ReleaseDate: '2014',
};

export const timeoutVideo: number = 1000;

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

export const FIRST_MAIN_FILM = {
  id: 1,
  genre: Genres.Drama,
  year: '2014',
  title: 'The Grand Budapest Hotel',
  text: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.',
  director: 'Wes Anderson',
  starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
};

export enum FilmImage {
  BgImage,
  Poster,
  SmallCard,
}
