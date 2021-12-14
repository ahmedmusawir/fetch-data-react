import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainNavbar from './components/general/MainNavbar';
import NotFound from './pages/NotFound';
import './App.scss';
import HomePage from './pages/HomePage';
import SinglePostPage from './pages/SinglePostPage';

function App(props) {
  return (
    <BrowserRouter>
      <MainNavbar />
      <main>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/post/:id'>
            <SinglePostPage />
          </Route>
          <Route path='/*'>
            <NotFound />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

App.propTypes = {};

export default App;
