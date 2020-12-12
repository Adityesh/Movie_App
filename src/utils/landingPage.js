export async function fetchLandingMovie() {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=265900472b5996ecdd533903f9fcdcd7`;
    const responeObj = {
        message : '',
        error : false,
        result : {

        }
    }

    try {
        const res = await fetch(url);
        const result = await res.json();
        const arr = result.results || [];
        const index = randomIndex(0, result.results.length);
        responeObj.result = arr[index];
        return responeObj

    } catch(err) {
        responeObj.message = err;
        return responeObj;
    }

}

const randomIndex = (max, min) => {
    return ~~(Math.random() * (max - min + 1)) + min;
}

export function imageUrl(path){
    const fullPath = `https://image.tmdb.org/t/p/w185${path}`;
    return fullPath;
}
