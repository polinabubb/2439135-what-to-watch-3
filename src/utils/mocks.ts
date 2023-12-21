import {} from '../const';
import { FilmType, FilmCardType, PromoFilmType } from '../types/films';
import { Comment } from '../types/reviews';

import { datatype, date, image, internet, lorem, music, name } from 'faker';

import { AuthorizationStatus, Genre, NameSpace } from '../const.ts';

const getRandomNumber = (from: number, to: number) =>
  Math.floor(Math.random() * (to - from + 1)) + from;

export const makeFakeFilms = () =>
  new Array(getRandomNumber(9, 12)).fill(null).map(
    () =>
      ({
        id: datatype.uuid(),
        name: name.firstName(),
        previewImage: image.imageUrl(),
        previewVideoLink: image.imageUrl(),
        genre: music.genre(),
      } as FilmCardType)
  );

export const makeFakeSimilarFilms = () =>
  new Array(getRandomNumber(9, 12)).fill(null).map(
    () =>
      ({
        id: datatype.uuid(),
        name: name.firstName(),
        previewImage: image.imageUrl(),
        previewVideoLink: image.imageUrl(),
        genre: music.genre(),
      } as FilmCardType)
  );

export const makeFakeUserFilms = () =>
  new Array(getRandomNumber(9, 12)).fill(null).map(
    () =>
      ({
        id: datatype.uuid(),
        name: name.firstName(),
        previewImage: image.imageUrl(),
        previewVideoLink: image.imageUrl(),
        genre: music.genre(),
      } as FilmType)
  );

export const makeFakePromoFilm = () =>
  ({
    id: datatype.uuid(),
    name: name.firstName(),
    posterImage: image.imageUrl(),
    backgroundImage: image.imageUrl(),
    videoLink: image.imageUrl(),
    genre: music.genre(),
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
    rating: getRandomNumber(0, 10),
    scoresCount: getRandomNumber(0, 10000),
    director: name.lastName(),
    starring: new Array(getRandomNumber(2, 5))
      .fill(null)
      .map(() => name.lastName()),
    runTime: getRandomNumber(70, 180),
    genre: music.genre(),
    released: date.recent().getFullYear(),
    isFavorite: datatype.boolean(),
  } as FilmType);

export const makeFakeComments = () =>
  new Array(getRandomNumber(1, 6)).fill(null).map(
    () =>
      ({
        id: datatype.uuid(),
        date: date.recent().toDateString(),
        user: name.firstName(),
        comment: lorem.text(),
        rating: getRandomNumber(0, 10),
      } as Comment)
  );
