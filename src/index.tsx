import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { store } from './store';
import { Provider } from 'react-redux';
import {
  fetchFilmsAction,
  fetchPromoFilmAction,
  //fetchUserListAction,
} from './store/api-actions';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import React from 'react';
import { checkAuthAction } from './store/api-actions';
import { BrowserRouter } from 'react-router-dom';
store.dispatch(checkAuthAction());
store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoFilmAction());
//store.dispatch(fetchUserListAction());
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <ToastContainer />
        <App />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
