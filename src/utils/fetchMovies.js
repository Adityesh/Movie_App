export async function fetchMovies(url, pageNumber) {

    const baseUrl = "https://api.themoviedb.org/3";
    const qualifiedUrl = baseUrl + url + `?api_key=265900472b5996ecdd533903f9fcdcd7&language=en-US&page=${pageNumber}`;
    const responseObj = {
        result : [],
        error : false,
        message : '',
        totalPages : 0
    }

    try {
        const res = await fetch(qualifiedUrl);
        const result = await res.json();
        responseObj.result = result.results;
        responseObj.error = false;
        responseObj.message = 'Status 200'
        responseObj.totalPages = result.total_pages

    } catch(err) {
        responseObj.result = [];
        responseObj.error = true;
        responseObj.message = err;
    }

    return responseObj;

}

export async function fetchMovieDetails(id) {
    const qualifiedUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=265900472b5996ecdd533903f9fcdcd7&language=en-US`;
    const responseObj = {
        title : '',
        runtime : 0,
        revenue : 0,
        release_date : '',
        genres : [],
        status : '',
        overview : '',
        budget : 0,
        poster_path : '',
        cast : [],
        message : '',
        error : ''
    }
    try {
        const response = await fetch(qualifiedUrl);
        const result = await response.json();
        responseObj.title = result.title;
        responseObj.runtime = result.runtime;
        responseObj.revenue = result.revenue;
        responseObj.release_date = result.release_date;
        responseObj.genres = result.genres;
        responseObj.status = result.status;
        responseObj.overview = result.overview;
        responseObj.budget = result.budget;
        responseObj.poster_path = result.poster_path;
        responseObj.cast = await fetchCast(id);
        responseObj.message = '200 OK'
        responseObj.error = false;
        return responseObj;

    } catch(err) {
        responseObj.message = err;
        responseObj.error = false;
        return responseObj;
    }

}

const fetchCast = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=265900472b5996ecdd533903f9fcdcd7&language=en-US`;
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result.cast;
    } catch(err) {
        return [];
    }
}


export function imageUrl(path){
    const fullPath = `https://image.tmdb.org/t/p/w185${path}`;
    return fullPath;
}
