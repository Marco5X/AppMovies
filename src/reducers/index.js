
const initialState = {
    moviesFavourites: [],
    moviesLoaed: [],
    movieDetail: {},
}

function rootReducer(state = initialState, action) {
    if (action.type === "ADD_MOVIE_FAVORITE") {
        return {
          ...state,
          moviesFavourites: state.moviesFavourites.concat(action.payload)
          //movies: [...state.movies, action.payload]
        }
    }
    if (action.type === "GET_MOVIES") {
        //console.log(action.payload)
        return {
          ...state,
          moviesLoaded: action.payload.Search
        };
    }
    if (action.type ==="GET_MOVIE_DETAIL") {///
        return {
            ...state,
            movieDetail: action.payload
        }        
    }
    if (action.type === "REMOVE_MOVIE_FAVORITE") {///aqui filtrar para que no agregeue la misma peli
        return {
            ...state,
            moviesFavourites: state.moviesFavourites.filter(movie => movie.imdbID !== action.payload)//movie.id !==action.payload.id
        }        
    }   
    return state;
  }

//   function getLocalStorage() {
//     const data = window.localStorage.getItem("movies");
//     return data ? JSON.parse(data) : [];
//   }
  
//   function setLocalStorage(movie) {
//     window.localStorage.setItem("movies", JSON.stringify(movie));
//   }
  
  
  export default rootReducer;