import WelcomePage from '../../pages/welcome-page/welcome-page';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import MyListPage from '../../pages/my-list-page/my-list-page';
import SignInPage from '../../pages/sign-in-pages/sign-in-page/sign-in-page';
import MoviePage from '../../pages/movie-pages/movie-page/movie-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-pages/player-page/player-page';
import NotFoundScreen from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { Film, Films } from '../../types/films';
import { FIRST_MAIN_FILM, films, VIDEO_URL } from '../../mocks/films';
import { filmRatings } from '../../mocks/reviews';

type AppProps = {
  mainFilm: Film;
  films: Films;
};

function App(props: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<WelcomePage {...props} />} />
          <Route path={AppRoute.SignIn} element={<SignInPage />} />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <MyListPage mainFilm={FIRST_MAIN_FILM} films={films} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Film}
            element={
              <MoviePage
                rayting={filmRatings[FIRST_MAIN_FILM.id-1]}
                mainFilm={FIRST_MAIN_FILM}
                moreFilms={films}
              />
            }
          />
          <Route
            path={AppRoute.AddReview}
            element={<AddReviewPage film={FIRST_MAIN_FILM} />}
          />
          <Route
            path={AppRoute.Player}
            element={<PlayerPage videoUrl={VIDEO_URL} />}
          />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
