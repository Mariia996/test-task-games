import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import LoaderSpinner from '../../../shared/components/Loader';
import { routes } from './routes';
import { getCurrentUser } from '../../../redux/auth/auth-operations';
import './App.scss';

import PublicPage from '../PublicRoute';
import PrivatePage from '../PrivateRoute';
const AuthPage = lazy(
  () => import('../../../pages/AuthPage') /* webpackChunkName: "AuthPage" */,
);
const GamesScreen = lazy(
  () => import('../../../pages/GamesScreen') /* webpackChunkName: "MainPage" */,
);
const PlayScreen = lazy(
  () =>
    import('../../../pages/PlayScreen') /* webpackChunkName: "ResultsPage" */,
);
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const { auth, games, play } = routes;
  return (
    <>
      <h1 className="title">
        Come<span className="title-part">on!</span>
      </h1>
      <Router>
        <Suspense fallback={<LoaderSpinner />}>
          <Switch>
            <PublicPage
              exact
              path={auth}
              restricted
              component={AuthPage}
              redirectTo={games}
            />
            <PrivatePage
              exact
              path={games}
              component={GamesScreen}
              redirectTo={auth}
            />
            <PrivatePage
              exact
              path={play}
              component={PlayScreen}
              redirectTo={auth}
            />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
