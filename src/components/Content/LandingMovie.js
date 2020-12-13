import React, { useEffect, useState } from 'react';
import './Home.css';
import { fetchLandingMovie, imageUrl } from '../../utils/landingPage';
const LandingMovie = () => {
    const [movie, setMovie] = useState({});
    useEffect(() => {
        fetchLandingMovie()
        .then(({result}) => {
            setMovie(result);
        })
    }, [])

    
    return(
        <div className="landing-div">
            
        <img src={imageUrl(movie.poster_path || null)} alt="movie poster" draggable="false"/>
        <div>
            
                <p>{movie.title}</p>
                <p>({movie.release_date ? movie.release_date.substring(0,4) : null})</p>
                <p>&#9733;{movie.vote_average ? movie.vote_average : null}</p>
        </div>
        </div>
    )
}

export default LandingMovie;