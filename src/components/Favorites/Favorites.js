import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions/index.js";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Favorite Movies</h2>
        <ul>
          {this.props.movies.map(movie =>
        
          <div key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`}>
            <span>{movie.Title}</span>
            <img src="" alt=""/>
            </Link>
            <button onClick={() => this.props.removeMovieFavorite(movie.imdbID)}> ✖ </button>
          </div>
          )}
        </ul>
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
