export async function fetchPeople(url, pageNumber) {

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

export async function fetchPeopleDetails(id) {
    const qualifiedUrl = `https://api.themoviedb.org/3/person/${id}?api_key=265900472b5996ecdd533903f9fcdcd7&language=en-US`;
    const responseObj = {
        birthday : '',
        known_for_department : '',
        id : '',
        name : '',
        gender : '',
        profile_path : '',
        biography : ''
    }
    try {
        const response = await fetch(qualifiedUrl);
        const result = await response.json();
        responseObj.biography = result.biography;
        responseObj.birthday = result.birthday;
        responseObj.profile_path = result.profile_path;
        responseObj.gender = result.gender;
        responseObj.name = result.name;
        responseObj.id = result.id;
        responseObj.known_for_department = result.known_for_department;
        responseObj.cast = await fetchActorCredits(id);
        responseObj.message = '200 OK'
        responseObj.error = false;
        return responseObj;

    } catch(err) {
        responseObj.message = err;
        responseObj.error = false;
        return responseObj;
    }

}

const fetchActorCredits = async (id) => {
    const url = `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=265900472b5996ecdd533903f9fcdcd7&language=en-US`;
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


export async function getSearchPeople(query) {
    const qualifiedUrl = ` https://api.themoviedb.org/3/search/person?api_key=265900472b5996ecdd533903f9fcdcd7&language=en-US&page=1&include_adult=false&query=${query}`;
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
