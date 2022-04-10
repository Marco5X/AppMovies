
export function getMovies(titulo) {//buscador ---> ej. Nemo
    return function (dispatch) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=e6b38212baf459bc1749d1e0fa386e4c&query=${titulo}&language=es`)
        .then(response => response.json())
        .then(json =>{
            dispatch({type: "GET_MOVIES", payload: json});//a esto se llega
        });
    };
}

export function getMoviesUpcoming() {
    return function (dispatch) {
        return fetch(`https://api.themoviedb.org/3/movie/upcoming?language=es&api_key=e6b38212baf459bc1749d1e0fa386e4c`)
        .then(response => response.json())
        .then(json =>{
            dispatch({type: "GET_MOVIES_UPCOMING", payload: json});
        });
    };
}

export function getMovieDetail(id){
    return function (dispatch) {
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e6b38212baf459bc1749d1e0fa386e4c&language=es`)//+ id otra `http://www.omdbapi.com/?apikey=20dac387&i=${imdbID}`
        .then(response => response.json())
        .then(movie => {
            dispatch({type: "GET_MOVIE_DETAIL",payload: movie})
        })
    }
}

export function addMovieFavorite(payload) {
    return {
        type: "ADD_MOVIE_FAVORITE", 
        payload: payload
    }
}


export function removeMovieFavorite(id){ 
    return {
        type: "REMOVE_MOVIE_FAVORITE",
        payload: id,
    }
}