import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index.js';
import './Movie.css';
import { FlipCard } from 'react-flippingcard'

class Movie extends React.Component {

  componentDidMount() {
    const movieId = this.props.match.params.id;
    this.props.getDetail(movieId)
  }
  
  render() {
    console.log(this.props.movie)
    return (
      <>
        <div className="details" >
          <FlipCard
            front={
              <div>
                <img className="imgDet" src={`https://image.tmdb.org/t/p/w500` + this.props.movie.poster_path} alt={this.props.movie.title} width="170rem" />
              </div>
            }
            back={
              <div className="cardDet">
                <h2><strong>{this.props.movie.title}</strong></h2>
                <h4>Year: {this.props.movie.release_date}</h4>
                <h5>{this.props.movie.overview ? this.props.movie.overview : "No hay descripción"}</h5>
              </div>} />
        </div>
      </>
    )
  }
}

function mapStateProps(state) {
  return {
    movie: state.movieDetail
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getDetail: idMovie => dispatch(getMovieDetail(idMovie)),
  }
}

export default connect(mapStateProps, mapDispatchToProps)(Movie);
