import { FilmCard } from '../film-cards/film-card';
import { Films } from '../../types/films';
import { useState } from 'react';

type FilmCardsProps = {
  mainFilmId: number;
  films: Films;
};

export function FilmCards({ mainFilmId, films }: FilmCardsProps): JSX.Element {
  const [selectedFilm, setSelectedFilm] = useState(0);
  if (selectedFilm !== 0) {
    //проигрывание видео на будущее
  }
  return (
    <div className="catalog__films-list">
      {films.map((film) => {
        if (film.id !== mainFilmId) {
          return (
            <FilmCard
              key={film.id}
              film={film}
              onFilmCard={(id) => {
                setSelectedFilm(id);
              }}
            />
          );
        }
      })}
    </div>
  );
}
