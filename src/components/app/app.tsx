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
                <MyListPage />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Film} element={<MoviePage />} />
          <Route path={AppRoute.AddReview} element={<AddReviewPage />} />
          <Route path={AppRoute.Player} element={<PlayerPage />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
