import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index.js';

import './Movie.css';


class Movie extends React.Component {

componentDidMount () {
    const movieId = this.props.match.params.id;
    this.props.getDetail(movieId)
}
 render() {
     console.log(this.props.movie)
     return (
         <div className="details">
            <h2>{this.props.movie.Title}</h2>
            Actors:
            <h6>{this.props.movie.Actors}</h6>
            <h4>Year: {this.props.movie.Year}</h4>
            <img src={this.props.movie.Poster} alt=''/>
            <h4>{this.props.movie.Plot}</h4>
        </div>
        )
    }
}
 
function mapStateProps (state) {
    return {
        movie: state.movieDetail
    }
}

function mapDispatchToProps (dispatch) {
    return {
        getDetail: idMovie => dispatch(getMovieDetail(idMovie))        
    }
}



export default connect(mapStateProps, mapDispatchToProps) (Movie);