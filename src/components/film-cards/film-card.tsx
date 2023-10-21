import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../types/films';

type FilmCardProps = { film: Film; onFilmCard: (id: number) => void };
function GetSrcFilmImage(name: string): string {
  return `img/${name.toLowerCase().replace(':', '').replace(/ /gi, '-')}.jpg`;
}

export function FilmCard({ film, onFilmCard }: FilmCardProps): JSX.Element {
  const onMouseEnterHandler = () => {
    onFilmCard(film.id);
  };

  const onMouseLeaveHandler = () => {
    onFilmCard(0);
  };

  return (
    <article className="small-film-card catalog__films-card">
      <div
        className="small-film-card__image"
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <img
          src={GetSrcFilmImage(film.title)}
          alt={film.title}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link to={AppRoute.Film} className="small-film-card__link">
          {film.title}
        </Link>
      </h3>
    </article>
  );
}
