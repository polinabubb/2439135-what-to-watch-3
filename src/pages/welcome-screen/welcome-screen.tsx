type WelcomeScreenProps = {
    name: string;
    genre: string;
    releaseDate: string;
}

type SmallFilmCardProps = {
    name: string;
    src: string;
}

type FilmCardProps = {
    name: string;
    genre: string;
    releaseDate: string;
}

function WelcomeScreen(props: WelcomeScreenProps): JSX.Element {
    return (
        <> 
        <FilmCard 
        name='The Grand Budapest Hotel' 
        genre='Drama' 
        releaseDate="2014"/>
        <div className="page-content">
            <section className="catalog">
                <h2 className="catalog__title visually-hidden">Catalog</h2>

                <ul className="catalog__genres-list">
                    <li className="catalog__genres-item catalog__genres-item--active">
                        <a href="#" className="catalog__genres-link">All genres</a>
                    </li>
                    <li className="catalog__genres-item">
                        <a href="#" className="catalog__genres-link">Comedies</a>
                    </li>
                    <li className="catalog__genres-item">
                        <a href="#" className="catalog__genres-link">Crime</a>
                    </li>
                    <li className="catalog__genres-item">
                        <a href="#" className="catalog__genres-link">Documentary</a>
                    </li>
                    <li className="catalog__genres-item">
                        <a href="#" className="catalog__genres-link">Dramas</a>
                    </li>
                    <li className="catalog__genres-item">
                        <a href="#" className="catalog__genres-link">Horror</a>
                    </li>
                    <li className="catalog__genres-item">
                        <a href="#" className="catalog__genres-link">Kids & Family</a>
                    </li>
                    <li className="catalog__genres-item">
                        <a href="#" className="catalog__genres-link">Romance</a>
                    </li>
                    <li className="catalog__genres-item">
                        <a href="#" className="catalog__genres-link">Sci-Fi</a>
                    </li>
                    <li className="catalog__genres-item">
                        <a href="#" className="catalog__genres-link">Thrillers</a>
                    </li>
                </ul>

                <div className="catalog__films-list">
                    <SmallFilmCard
                        name='Fantastic Beasts: The Crimes of Grindelwald'
                        src='img/fantastic-beasts-the-crimes-of-grindelwald.jpg' />

                    <SmallFilmCard
                        name='Bohemian Rhapsody'
                        src='img/bohemian-rhapsody.jpg' />

                    <SmallFilmCard
                        name='Macbeth'
                        src='img/macbeth.jpg' />

                    <SmallFilmCard
                        name='We need to talk about Kevin'
                        src='img/we-need-to-talk-about-kevin.jpg' />

                    <SmallFilmCard
                        name='What We Do in the Shadows'
                        src='img/what-we-do-in-the-shadows.jpg' />

                    <SmallFilmCard
                        name='Revenant'
                        src='img/revenant.jpg' />

                    <SmallFilmCard
                        name='Johnny English'
                        src='img/johnny-english.jpg' />

                    <SmallFilmCard
                        name='Shutter Island'
                        src='img/shutter-island.jpg' />

                    <SmallFilmCard
                        name='Pulp Fiction'
                        src='img/pulp-fiction.jpg' />

                    <SmallFilmCard
                        name='No Country for Old Men'
                        src='img/no-country-for-old-men.jpg' />

                    <SmallFilmCard
                        name='Snatch'
                        src='img/snatch.jpg' />

                    <SmallFilmCard
                        name='Moonrise Kingdom'
                        src='img/moonrise-kingdom.jpg' />

                    <SmallFilmCard
                        name='Seven Years in Tibet'
                        src='img/seven-years-in-tibet.jpg' />

                    <SmallFilmCard
                        name='Midnight Special'
                        src='img/midnight-special.jpg' />

                    <SmallFilmCard
                        name='War of the Worlds'
                        src='img/war-of-the-worlds.jpg' />

                    <SmallFilmCard
                        name='Dardjeeling Limited'
                        src='img/dardjeeling-limited.jpg' />

                    <SmallFilmCard
                        name='Orlando'
                        src='img/orlando.jpg' />

                    <SmallFilmCard
                        name='Mindhunter'
                        src='img/mindhunter.jpg' />

                    <SmallFilmCard
                        name='Midnight Special'
                        src='img/midnight-special.jpg' />
                </div>

                <div className="catalog__more">
                    <button className="catalog__button" type="button">Show more</button>
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

function SmallFilmCard(props: SmallFilmCardProps): JSX.Element {
    return (
        <article className="small-film-card catalog__films-card">
            <div className="small-film-card__image">
                <img src={props.src} alt={props.name} width="280" height="175" />
            </div>
            <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">{props.name}</a>
            </h3>
        </article>
    )
}

function FilmCard(props: FilmCardProps): JSX.Element {
    return (
        <section className="film-card">
            <div className="film-card__bg">
                <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
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
                            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
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
                        <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
                    </div>

                    <div className="film-card__desc">
                        <h2 className="film-card__title">{props.name}</h2>
                        <p className="film-card__meta">
                            <span className="film-card__genre">{props.genre}</span>
                            <span className="film-card__year">{props.releaseDate}</span>
                        </p>

                        <div className="film-card__buttons">
                            <button className="btn btn--play film-card__button" type="button">
                                <svg viewBox="0 0 19 19" width="19" height="19">
                                    <use href="#play-s"></use>
                                </svg>
                                <span>Play</span>
                            </button>
                            <button className="btn btn--list film-card__button" type="button">
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
    );
}
export default WelcomeScreen;