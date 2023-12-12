import type { FilmType } from '../../types/films.ts';
import type { Comment } from '../../types/reviews.ts';
import { useAppSelector } from '../../hooks';
import {
  getComments,
} from '../../store/film-data/selectors.ts';
type TabOverviewProps = {
  film: FilmType;
};

export function TabOverview({ film }: TabOverviewProps): JSX.Element {
  const comments = useAppSelector(getComments);
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{'score'}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{film.rating}</span>
          <span className="film-rating__count">{comments.length} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director">
          <strong>Director: {film.director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>Starring: {film.starring}</strong>
        </p>
      </div>
    </>
  );
}
