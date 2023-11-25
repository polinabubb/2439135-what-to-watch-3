import { createReducer } from '@reduxjs/toolkit';
import { genreChange, countChange, settingFilms, loadFilms, setFilmsDataLoadingStatus, } from './action';
import { Genre } from '../const';
import {Film} from '../types/films'

type InitalState = {
  genre: Genre;
  films: Film[];
  count: number;
  error: string | null;
  isFilmsDataLoading: boolean;
}
const initialState:InitalState = {
  genre: Genre.All,
  films: [],
  count: 8,
  error: null,
  isFilmsDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(countChange, (state, action) => {
      const { count } = action.payload;
      state.count = count;
    })
    .addCase(genreChange, (state, action) => {
      const { genre } = action.payload;
      state.genre = genre;
    })
    .addCase(settingFilms, (state) => {

    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    //  alert(state.films[0])
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })

});

export { reducer };
