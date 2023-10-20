import { FilmCard } from '../film-cards/film-card';
import { Film, Films } from '../../types/films';
//import {useState} from 'react';
//import {FIRST_MAIN_FILM} from '../../const'

type FilmCardsProps = {
  films: Films;
};
type FilmCardProps = Film;

export function FilmCards({ films }: FilmCardsProps): JSX.Element {
  //const [mainFilm, setMainFilm] = useState(FIRST_MAIN_FILM);
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard {...film} />
      ))}
    </div>
  );
}
