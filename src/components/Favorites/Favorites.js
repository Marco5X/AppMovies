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
        {!this.props.movies? <h1 className="find">Add favorite movies</h1> : this.props.movies.map(movie => 
        <div className="cardMovies" key={movie.id}>
          <h3 className="result">{movie.title}</h3>
          <Link to={`/movie/${movie.id}`}>
          <img src={`https://image.tmdb.org/t/p/w500`+movie.poster_path} alt={movie.title} width="60rem"/>
          </Link>
          <button className="danger" onClick={() => this.props.removeMovieFavorite(movie.id)}> ✖ </button>
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

