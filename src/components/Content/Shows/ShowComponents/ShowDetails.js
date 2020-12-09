import React, { useEffect, useState } from 'react';
import { fetchShowDetails, imageUrl } from '../../../../utils/fetchShows';
import Loader from '../../../Loader/Loader';


const ShowDetails = ({ showId, showImage, setVisible, isVisible }) => {
    const [show, setShow] = useState({});
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setShow({});
        fetchShowDetails(showId)
            .then((showDetails) => {
                setShow(showDetails)
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })

    }, [showId])


    return (

        <div className="movie-details-container window" style={{ display: isVisible ? 'block' : 'none' }}>

            <div class="title-bar">
                <div class="title-bar-text">{show.name}</div>
                <div class="title-bar-controls">

                    <button aria-label="Close" onClick={() => setVisible(false)}></button>
                </div>
            </div>

            {isLoading ? 
            
            <div className="movie-loader">
            <Loader />
        </div>
            
            :
            <div className="window-body movie-details-card" >
            <div className="movie-card">
                <div className="movie-card-img">
                    <img src={imageUrl(showImage)} alt="showImage" />
                </div>
                <div className="movie-details">
                    <ul>
                        <li className="movie-title">{show.name}</li>
                        <li>First Episode: {show.first_air_date ? show.first_air_date.split("-").reverse().join("-") : 'N/A'}</li>
                        <li>Runtime : {show.episode_run_time} minutes</li>
                        <li>Seasons : {show.number_of_seasons}</li>
                        <li>Episodes : {show.number_of_episodes}</li>
                        <li>Created By : {show.created_by ? show.created_by.map((creator, i) => {
                            if (i === show.created_by.length - 1) {
                                return `${creator.name}`
                            } else {
                                return `${creator.name}, `;
                            }
                        }) : 'N/A'}</li>
                        <li>Genre : {show.genres ? show.genres.map((genre, i) => {
                            if (i === show.genres.length - 1) {
                                return `${genre.name}`
                            } else {
                                return `${genre.name}, `;
                            }
                        }) : 'N/A'}</li>
                        <li>Latest Episode : <strong>{show.latest ? show.latest.name : 'N/A'}</strong> ({show.latest ? show.latest.air_date.split("-").reverse().join("-") : 'N/A'})</li>
                        <li>Status : {show.status}</li>
                    </ul>
                </div>
            </div>
            <div className="movie-overview">
                {show.overview ? show.overview : 'Description not available.'}
            </div>
            <div className="cast-card">
                <h4>Cast:</h4>
                <div class="cast-members">
                        {show.cast ? 
                            show.cast.map((cast) => {
                                return(
                                    <div key={cast.name}>
                                        <div className="cast-image">
                                            <img src={imageUrl(cast.profile_path)} className="cast-pic" alt={cast.name} />
                                            <div class="cast-info">
                                            <p>{cast.name}</p>
                                            <p>as</p>
                                <p>{cast.roles[0].character ? cast.roles[0].character : 'N/A'} ({cast.roles ? cast.roles[0].episode_count + ' episodes' : 'N/A'})</p>
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

export default ShowDetails;


