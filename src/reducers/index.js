// SE GENERA UN NUEVO ESTADO Y "PISA" AL ANTERIOR
const initialState = {
    moviesFavourites: [],
    moviesLoaed: [],
    movieDetail: {},
}

function rootReducer(state = initialState, action) {
    if (action.type === "ADD_MOVIE_FAVORITE") {
        let newFavorite = state.moviesFavourites.find(fav => fav.imdbID === action.payload.imdbID)
        if (Array.isArray(state.moviesFavourites)) {
            if(newFavorite){
                return state
            }
        }
        // JSON.parse(window.localStorage.getItem("movie"));
        // window.localStorage.setItem("movie", JSON.stringify(state.moviesFavourites.concat(action.payload)))
        return {
        ...state,
        moviesFavourites: state.moviesFavourites !== undefined ? [...state.moviesFavourites, action.payload] : [action.payload]
        }     
    }

    if (action.type === "GET_MOVIES") {
        return {
          ...state,
          moviesLoaded: action.payload.Search
        };
    }

    if (action.type ==="GET_MOVIE_DETAIL") {
        return {
            ...state,
            movieDetail: action.payload
        }        
    }

    if (action.type === "REMOVE_MOVIE_FAVORITE") {
        return {
            ...state,
            moviesFavourites: state.moviesFavourites.filter(movie => movie.imdbID !== action.payload)
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