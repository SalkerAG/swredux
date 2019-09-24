import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Layout/Header";
import Home from "./components/Home/Home";
import Films from "./components/Films/Films";
import Characters from "./components/Characters/Characters";
import DetailsFilm from "./components/Films/DetailsFilm";
import DetailsCharacter from "./components/Characters/DetailsCharacter";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/peliculas" component={Films} />
          <Route exact path="/personajes" component={Characters} />
          <Route exact path="/peliculas/:id" component={DetailsFilm} />
          <Route exact path="/personajes/:id" component={DetailsCharacter} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
