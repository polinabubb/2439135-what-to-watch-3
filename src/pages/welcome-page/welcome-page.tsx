import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type WelcomeScreenProps = {
  name: string;
  genre: string;
  releaseDate: string;
};

type SmallFilmCardProps = {
  name: string;
};

type GetSrcFilmImageProps = {
  name: string;
};

type GetSrcFilmPosterProps = {
  name: string;
};

type GetSrcFilmBgImageProps = {
  name: string;
};

function GetSrcFilmImage({ name }: GetSrcFilmImageProps): string {
  return `img/${name.toLowerCase().replace(':', '').replace(/ /gi, '-')}.jpg`;
}

function GetSrcFilmPoster({ name }: GetSrcFilmPosterProps): string {
  return `img/${name
    .toLowerCase()
    .replace(':', '')
    .replace(/ /gi, '-')}-poster.jpg`;
}

function GetSrcFilmBgImage({ name }: GetSrcFilmBgImageProps): string {
  return `img/bg-${name
    .toLowerCase()
    .replace(':', '')
    .replace(/ /gi, '-')}.jpg`;
}

function SmallFilmCard({ name }: SmallFilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={GetSrcFilmImage({ name })}
          alt={name}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link to={AppRoute.Film} className="small-film-card__link">
          {name}
        </Link>
      </h3>
    </article>
  );
}

function WelcomeScreen(props: WelcomeScreenProps): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={GetSrcFilmBgImage({ name: props.name })} alt={props.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img
                  src="img/avatar.jpg"
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={GetSrcFilmPoster({ name: props.name })}
                alt={`${props.name} poster`}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{props.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{props.genre}</span>
                <span className="film-card__year">{props.releaseDate}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use href="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use href="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">
                All genres
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Comedies
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Crime
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Documentary
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Dramas
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Horror
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Kids & Family
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Romance
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Sci-Fi
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Thrillers
              </a>
            </li>
          </ul>

          <div className="catalog__films-list">
            <SmallFilmCard name="Fantastic Beasts: The Crimes of Grindelwald" />

            <SmallFilmCard name="Bohemian Rhapsody" />

            <SmallFilmCard name="Macbeth" />

            <SmallFilmCard name="We need to talk about Kevin" />

            <SmallFilmCard name="What We Do in the Shadows" />

            <SmallFilmCard name="Revenant" />

            <SmallFilmCard name="Johnny English" />

            <SmallFilmCard name="Shutter Island" />

            <SmallFilmCard name="Pulp Fiction" />

            <SmallFilmCard name="No Country for Old Men" />

            <SmallFilmCard name="Snatch" />

            <SmallFilmCard name="Moonrise Kingdom" />

            <SmallFilmCard name="Seven Years in Tibet" />

            <SmallFilmCard name="Midnight Special" />

            <SmallFilmCard name="War of the Worlds" />

            <SmallFilmCard name="Dardjeeling Limited" />

            <SmallFilmCard name="Orlando" />

            <SmallFilmCard name="Mindhunter" />

            <SmallFilmCard name="Midnight Special" />
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default WelcomeScreen;
