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

export function fetchMovieDetails(id) {

}
