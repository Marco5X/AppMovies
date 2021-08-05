import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import {addMovieFavorite, getMovies} from '../../actions/index.js' 


export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)//aqui se invoca a la que yo tengo como props
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <div className="contain">
        <h2 className="busca"> Search the movie</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>{/*aqui se bindea de manera automatica*/}
          <div className= "search">
            <label className="label" htmlFor="title">Movie: </label>
            <input
            className="busc"
              type="text"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button className="botonS" type="submit">🔍</button>
        </form>
        </div>
        <ul>
         {this.props.movies && this.props.movies.map(movie => (
           <div key={movie.imdbID}>
             <Link to={`/movie/${movie.imdbID}`}>
             <h4>{movie.Title}</h4>
             </Link>
             <button onClick={() => this.props.addMovieFavorite(movie) }> ♥ </button>
           </div>
         ) )
         }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded//movies:store.getState().moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),//addMovieFavourite: () => store.dispatch("ADD_MOVIE_FAVORITE", payload:movie)
    getMovies: title => dispatch(getMovies(title))//getMovie: (title) => store.dispatch(type:"GET_MOVIES", payload: objServer)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);


//export default Buscador;
