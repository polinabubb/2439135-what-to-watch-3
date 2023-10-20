import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../types/films';

type FilmCardProps = Film;
function GetSrcFilmImage(name: string): string {
  return `img/${name.toLowerCase().replace(':', '').replace(/ /gi, '-')}.jpg`;
}

export function FilmCard({ title }: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={GetSrcFilmImage(title)}
          alt={title}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link to={AppRoute.Film} className="small-film-card__link">
          {title}
        </Link>
      </h3>
    </article>
  );
}
