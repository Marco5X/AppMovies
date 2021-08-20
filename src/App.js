import React from "react";
import Favorites from "./components/Favorites/Favorites";
import Buscador from "./components/Buscador/Buscador";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";
import Movie from "./components/Movie/Movie";
import About from "./components/About/About";


function App() {
  return (
      <React.Fragment>
          <NavBar />
          <Route exact path="/" component={Buscador} />
          <Route path="/favs" component={Favorites} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/about" component={About} />
          {/*match(.params), location, history*/}
      </React.Fragment>
  );
}

export default App;
