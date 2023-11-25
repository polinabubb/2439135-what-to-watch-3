import { createAction } from '@reduxjs/toolkit';
import { Genre } from '../const';
import {Film} from '../types/films'
export const genreChange = createAction<{ genre: Genre }>('films/genre');

export const settingFilms = createAction('films/filmsByGenre');

export const countChange = createAction<{ count: number }>('films/count');

export const loadFilms = createAction<Film[]>('data/loadFilms');
export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');
