export async function fetchShows(url, pageNumber) {

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

export async function fetchShowDetails(id) {
    const qualifiedUrl = `https://api.themoviedb.org/3/tv/${id}?api_key=265900472b5996ecdd533903f9fcdcd7&language=en-US`;
    const responseObj = {
        episode_run_time : 0,
        first_air_date : '',
        latest : {},
        created_by : [],
        name : '',
        number_of_episodes : 0,
        number_of_seasons : 0,
        overview : '',
        seasons : [],
        status : [],
        genres : [],
        poster_path : '',
        cast : [],
        message : '',
        error : ''
    }
    try {
        const response = await fetch(qualifiedUrl);
        const result = await response.json();
        responseObj.name = result.name;
        responseObj.episode_run_time = result.episode_run_time;
        responseObj.first_air_date = result.first_air_date;
        responseObj.created_by = result.created_by;
        responseObj.latest = result.last_episode_to_air;
        responseObj.genres = result.genres;
        responseObj.status = result.status;
        responseObj.overview = result.overview;
        responseObj.number_of_episodes = result.number_of_episodes;
        responseObj.number_of_seasons = result.number_of_seasons;
        responseObj.seasons = result.seasons;
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
    const url = `https://api.themoviedb.org/3/tv/${id}/aggregate_credits?api_key=265900472b5996ecdd533903f9fcdcd7&language=en-US`;
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


export async function getSearchShows(query) {
    const qualifiedUrl = ` https://api.themoviedb.org/3/search/tv?api_key=265900472b5996ecdd533903f9fcdcd7&language=en-US&page=1&include_adult=false&query=${query}`;
    const responseObj = {
        result : [],
        error : false,
        message : '',
        
    }

    try {
        const res = await fetch(qualifiedUrl);
        const result = await res.json();
        if(result.errors) {
            responseObj.result = []
        } else {
            responseObj.result = result.results;
        }
        
        responseObj.error = false;
        responseObj.message = 'Status 200'
        
    } catch(err) {
        responseObj.result = [];
        responseObj.error = true;
        responseObj.message = err;
    }

    return responseObj;
}
