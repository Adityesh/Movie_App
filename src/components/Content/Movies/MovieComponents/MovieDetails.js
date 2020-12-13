import React, { useEffect, useState } from 'react';
import { fetchMovieDetails, imageUrl } from '../../../../utils/fetchMovies';
import Loader from '../../../Loader/Loader';

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})

const MovieDetails = ({ movieId, movieImage, setVisible, isVisible }) => {
    const [movie, setMovie] = useState({});
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setMovie({});
        fetchMovieDetails(movieId)
            .then((movieDetails) => {
                setMovie(movieDetails)
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })

    }, [movieId])



    return (

        <div className="movie-details-container window" style={{ display: isVisible ? 'block' : 'none' }}>

            <div className="title-bar">
                <div className="title-bar-text">{movie.title}</div>
                <div className="title-bar-controls">

                    <button aria-label="Close" onClick={() => setVisible(false)}></button>
                </div>
            </div>

            {isLoading ? 
            
            <div className="movie-loader">
            <Loader />
        </div>
            
            :
                <div className="window-body movie-details-card">
                    <div className="movie-card">
                        <div className="movie-card-img">
                            <img src={imageUrl(movieImage)} alt="movieImage" />
                        </div>
                        <div className="movie-details">
                            <ul>
                                <li className="movie-title">{movie.title}</li>
                                <li>Release Date : {movie.release_date ? movie.release_date.split("-").reverse().join("-") : 'N/A'}</li>
                                <li>Runtime : {movie.runtime} minutes</li>
                                <li>Budget : {movie.budget === 0 ? 'N/A' : formatter.format(movie.budget)}</li>
                                <li>Revenue : {movie.revenue === 0 ? 'N/A' : formatter.format(movie.revenue)}</li>
                                <li>Genre : {movie.genres ? movie.genres.map((genre, i) => {
                                    if (i === movie.genres.length - 1) {
                                        return `${genre.name}`
                                    } else {
                                        return `${genre.name}, `;
                                    }
                                }) : 'N/A'}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="movie-overview">
                        {movie.overview ? movie.overview : 'Description not available.'}
                    </div>
                    <div className="cast-card">
                        <h4>Cast:</h4>
                        <div className="cast-members">
                                {movie.cast ? 
                                    movie.cast.map((cast) => {
                                        
                                        return(
                                            <div key={cast.name}>
                                                <div className="cast-image">
                                                    <img src={imageUrl(cast.profile_path)} className="cast-pic" alt={cast.name} />
                                                    <div className="cast-info">
                                                    <p>{cast.name}</p>
                                                    <p>as</p>
                                                    <p>{cast.character ? cast.character : 'N/A'}</p>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        )
                                    })
                                
                                
                                : <center><p>No Cast Information Available</p></center>}
                        </div>
                    </div>
                </div>}
            

        </div>

    )
}

export default MovieDetails;


