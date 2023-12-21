import {} from '../const';
import { FilmType, FilmCardType, PromoFilmType } from '../types/films';
import { Comment } from '../types/reviews';
import { State } from '../types/state';
import { datatype, date, image, internet, lorem, music, name } from 'faker';
import { ThunkDispatch } from 'redux-thunk';
import { createAPI } from '../services/api';
import { Action } from 'redux';
import { AuthorizationStatus, Genre, NameSpace } from '../const.ts';

export type AppThunkDispatch = ThunkDispatch<
  State,
  ReturnType<typeof createAPI>,
  Action
>;
export const extractActionsTypes = (actions: Action<string>[]) =>
  actions.map(({ type }) => type);

const getRandom = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const makeFakeFilms = () =>
  new Array(getRandom(9, 12)).fill(null).map(
    () =>
      ({
        id: datatype.uuid(),
        name: name.firstName(),
        previewImage: image.imageUrl(),
        previewVideoLink: image.imageUrl(),
        genre: makeFakeGenre(),
      } as FilmCardType)
  );

export const makeFakeSimilarFilms = () =>
  new Array(getRandom(9, 12)).fill(null).map(
    () =>
      ({
        id: datatype.uuid(),
        name: name.firstName(),
        previewImage: image.imageUrl(),
        previewVideoLink: image.imageUrl(),
        genre: makeFakeGenre(),
      } as FilmCardType)
  );

export const makeFakeUserFilms = () =>
  new Array(getRandom(9, 12)).fill(null).map(
    () =>
      ({
        id: datatype.uuid(),
        name: name.firstName(),
        previewImage: image.imageUrl(),
        previewVideoLink: image.imageUrl(),
        genre: makeFakeGenre(),
      } as FilmType)
  );

export const makeFakePromoFilm = () =>
  ({
    id: datatype.uuid(),
    name: name.firstName(),
    posterImage: image.imageUrl(),
    backgroundImage: image.imageUrl(),
    videoLink: image.imageUrl(),
    genre: makeFakeGenre(),
    released: date.recent().getFullYear(),
    isFavorite: datatype.boolean(),
  } as FilmType);

export const makeFakeFilm = () =>
  ({
    id: datatype.uuid(),
    name: name.firstName(),
    posterImage: image.imageUrl(),
    backgroundImage: image.imageUrl(),
    backgroundColor: internet.color(),
    videoLink: image.imageUrl(),
    description: lorem.text(),
    rating: getRandom(0, 10),
    scoresCount: getRandom(0, 10000),
    director: name.lastName(),
    starring: new Array(getRandom(2, 5)).fill(null).map(() => name.lastName()),
    runTime: getRandom(70, 180),
    genre: makeFakeGenre(),
    released: date.recent().getFullYear(),
    isFavorite: datatype.boolean(),
  } as FilmType);

export const makeFakeComments = () =>
  new Array(getRandom(1, 6)).fill(null).map(
    () =>
      ({
        id: datatype.uuid(),
        date: date.recent().toDateString(),
        user: name.firstName(),
        comment: lorem.text(),
        rating: getRandom(0, 10),
      } as Comment)
  );

export const makeFakeGenre = (): Genre => {
  const genres: Genre[] = [
    Genre.Action,
    Genre.Adventure,
    Genre.All,
    Genre.Comedie,
    Genre.Crime,
    Genre.Documentary,
    Genre.Drama,
    Genre.Fantasy,
    Genre.Horror,
    Genre.KidsFamily,
    Genre.Romance,
    Genre.SciFi,
  ];
  return genres.at(getRandom(0, genres.length - 1)) || Genre.All;
};
