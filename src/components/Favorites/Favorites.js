import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions/index.js";
import { Link } from 'react-router-dom';
import './Favorites.css';
import ReactCardFlip from 'react-card-flip';

export class ConnectedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <div>
        <h2 className="fav">Favorites Movies</h2>
      <ReactCardFlip
        isFlipped={this.state.isFlipped}
        flipDirection="vertical">
      <div className="cont">
          {this.props.movies.map(movie =>
        
          <div className="cardMovies" key={movie.imdbID}>
            <span>{movie.Title}</span>
            <Link to={`/movie/${movie.imdbID}`}>
            <img src={movie.Poster} alt={movie.Title} width="60rem"/>
            </Link>
            <button className="danger" onClick={() => this.props.removeMovieFavorite(movie.imdbID)}> ✖ </button>
          </div>
          
          
          
          )}
       </div>
          </ReactCardFlip>
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
