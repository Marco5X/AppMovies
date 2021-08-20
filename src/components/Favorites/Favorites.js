import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions/index.js";
import { Link } from 'react-router-dom';
import './Favorites.css';


export class ConnectedList extends Component {
  render() {
    console.log(this.props.movies)
    return (
      <div >
      <h2 className="fav">Favorites Movies</h2>
    <div className="cont">
        {this.props.movies.map(movie =>
      
        <div className="cardMovies" key={movie.imdbID}>
          <h3 className="result">{movie.Title}</h3>
          <Link to={`/movie/${movie.imdbID}`}>
          <img src={movie.Poster} alt={movie.Title} width="60rem"/>
          </Link>
          <button className="danger" onClick={() => this.props.removeMovieFavorite(movie.imdbID)}> ✖ </button>
        </div>
        )}
     </div>
    </div>
    );
  }
}

function mapStateProps(state) {
  return {
    movies: state.moviesFavourites///
  }
}

function mapDispatchToProps (dispatch) {
  return {
    removeMovieFavorite: idMovie => dispatch(removeMovieFavorite(idMovie))
  }
}

export default connect(mapStateProps, mapDispatchToProps) (ConnectedList);

