
export function getMovies(titulo) {//buscador ---> ej. Nemo
    return function (dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=20dac387&s="+ titulo)
        .then(response => response.json())
        .then(json =>{
            dispatch({type: "GET_MOVIES", payload: json});//a esto se llega
        });
    };
}

export function getMovieDetail(id){//id
    return function (dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=20dac387&i="+ id)//+ id otra `http://www.omdbapi.com/?apikey=20dac387&i=${imdbID}`
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


export function removeMovieFavorite(id){ //payload --> id que representa una movie
    return {
        type: "REMOVE_MOVIE_FAVORITE",
        payload: id,
    }
}