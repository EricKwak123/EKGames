import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import Download1Page from './components/Download1Page';
import Download2Page from './components/Download2Page';
import Game1Page from './components/Game1Page';
import Game2Page from './components/Game2Page';
import GamesPage from './components/GamesPage';
import HomePage from './components/IndexPage';
import SignInPage from './components/SignInPage';
import SupportPage from './components/ContactPage';
import WorkPage from './components/WorkPage';
import NotFoundPage from './components/NotFoundPage'; // Create this component for 404 Not Found page.

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/download1" component={Download1Page} />
        <Route path="/download2" component={Download2Page} />
        <Route path="/game1" component={Game1Page} />
        <Route path="/game2" component={Game2Page} />
        <Route path="/games" component={GamesPage} />
        <Route path="/sign-in" component={SignInPage} />
        <Route path="/support" component={SupportPage} />
        <Route path="/work" component={WorkPage} />
        <Route component={NotFoundPage} /> {/* For handling 404 Not Found */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
