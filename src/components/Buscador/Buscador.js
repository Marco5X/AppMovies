import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { addMovieFavorite, getMovies, getMoviesUpcoming } from '../../actions/index.js'
import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.min.css";

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
      <>
        <div className="contain">
          <h2 className="busca"> Search movie</h2>
          <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>{/*aqui se bindea de manera automatica*/}
            <div className="search">
              <label className="label" htmlFor="title">Movie: </label>
              <input
                className="busc"
                type="text"
                autoComplete="off"
                value={title}
                onChange={(e) => this.handleChange(e)} />
            </div>
            <button className="botonS" type="submit">🔍</button>
          </form>
        </div>
        <ul className="uele">
          {!this.props.movies ?
            <div className="find"><h3 className="findUp">Upcoming movies premieres</h3>{this.props.moviesUp.length > 0 &&
              <Carousel indicators={false} keyboard={false} variant="dark" slide={false}>
                <Carousel.Item interval={2800}  >
                  <div key={this.props.moviesUp[0].id}>
                    <Link to={`/movie/${this.props.moviesUp[0].id}`}>
                      <img className="imgBusc" src={`https://image.tmdb.org/t/p/w500` + this.props.moviesUp[0].poster_path} alt={this.props.moviesUp[0].title} width="195rem" />
                    </Link>
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={2800}  >
                  <div key={this.props.moviesUp[1].id}>
                    <Link to={`/movie/${this.props.moviesUp[1].id}`}>
                      <img className="imgBusc" src={`https://image.tmdb.org/t/p/w500` + this.props.moviesUp[1].poster_path} alt={this.props.moviesUp[1].title} width="195rem" />
                    </Link>
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={2800}  >
                  <div key={this.props.moviesUp[2].id}>
                    <Link to={`/movie/${this.props.moviesUp[2].id}`}>
                      <img className="imgBusc" src={`https://image.tmdb.org/t/p/w500` + this.props.moviesUp[2].poster_path} alt={this.props.moviesUp[2].title} width="195rem" />
                    </Link>
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={2800}  >
                  <div key={this.props.moviesUp[3].id}>
                    <Link to={`/movie/${this.props.moviesUp[3].id}`}>
                      <img className="imgBusc" src={`https://image.tmdb.org/t/p/w500` + this.props.moviesUp[3].poster_path} alt={this.props.moviesUp[3].title} width="195rem" />
                    </Link>
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={2800}  >
                  <div key={this.props.moviesUp[4].id}>
                    <Link to={`/movie/${this.props.moviesUp[4].id}`}>
                      <img className="imgBusc" src={`https://image.tmdb.org/t/p/w500` + this.props.moviesUp[4].poster_path} alt={this.props.moviesUp[4].title} width="195rem" />
                    </Link>
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={2800}  >
                  <div key={this.props.moviesUp[5].id}>
                    <Link to={`/movie/${this.props.moviesUp[5].id}`}>
                      <img className="imgBusc" src={`https://image.tmdb.org/t/p/w500` + this.props.moviesUp[5].poster_path} alt={this.props.moviesUp[5].title} width="195rem" />
                    </Link>
                  </div>
                </Carousel.Item>
              </Carousel>
            }</div>
            : this.props.movies.map(movie => (
              <div className="cardMovie" key={movie.id}>
                <div className="cardDetails">
                  <h3 className="result">{movie.title}</h3>
                  <button className="botonS" onClick={() => this.props.addMovieFavorite(movie)}> Add Favorite 💛 </button>
                </div>
                <Link to={`/movie/${movie.id}`}>
                  <img className="imgBusc" src={`https://image.tmdb.org/t/p/w500` + movie.poster_path} alt={movie.title} width="95rem" />
                </Link>
              </div>
            ))
          }
        </ul>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,//movies:store.getState().moviesLoaded
    moviesUp: state.moviesUpcoming
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),//addMovieFavourite: () => store.dispatch("ADD_MOVIE_FAVORITE", payload:movie)
    getMovies: title => dispatch(getMovies(title)),//getMovie: (title) => store.dispatch(type:"GET_MOVIES", payload: objServer)
    getMoviesUpcoming: dispatch(getMoviesUpcoming())

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);

