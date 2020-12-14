import React, { useEffect, useState } from 'react';
import { fetchPeopleDetails, imageUrl } from '../../../../utils/fetchPeople';
import Loader from '../../../Loader/Loader';


const PersonDetails = ({ personId, personImage, setVisible, isVisible }) => {
    const [person, setPerson] = useState({});
    const [movies, setMovies] = useState([]);
    const [shows, setShows] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setPerson({});
        fetchPeopleDetails(personId)
            .then((personDetails) => {
                setPerson(personDetails)
                filterCastPerson(personDetails.cast);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })

    }, [personId])

    const filterCastPerson = (cast) => {
        const movies = [];
        const shows = [];

        cast.forEach(element => {
            if(element.media_type === "movie") {
                movies.push(element)
            } else if(element.media_type === "tv") {
                shows.push(element);
            }
        });

        movies = movies.splice(0, 6);
        shows = shows.splice(0,6)

        setMovies(movies);
        setShows(shows);
    }

    console.log(shows)

    return (

        <div className="movie-details-container window" style={{ display: isVisible ? 'block' : 'none' }}>

            <div className="title-bar">
                <div className="title-bar-text">{person.name}</div>
                <div className="title-bar-controls">

                    <button aria-label="Close" onClick={() => setVisible(false)}></button>
                </div>
            </div>

            {isLoading ? 
            
            <div className="movie-loader">
            <Loader />
        </div>
            
            : 
            <div className="person-container">
                <div className="person-container-top">
                    <div className="person-img">
                        <img src={imageUrl(person.profile_path || null)} alt="person poster" />
                    </div>
                    <div className="person-details">
                        <p>Name : {person.name ? person.name : null}</p>
                        <p>Date of birth : {person.birthday ? person.birthday.split("-").reverse().join("-") : null}</p>

                        <p>{person.biography ? person.biography : null}</p>

                    </div>
                </div>
                <div className="person-container-bottom">
                    {/* <div className="person-movies">
                        {movies ? movies.map((movie, index) => {
                            return (
                                <div className="img-card">
                                    <img src={movie ? imageUrl(movie.poster_path || undefined) : ''} alt="movie-poster" />
                                </div>
                            )
                        }) : null}
                    </div> */}
                    <div className="person-shows">
                        {shows ? shows.map((show, index) => {
                                return (
                                    <div className="img-card">
                                        <img src={show ? imageUrl(show.poster_path || undefined) : ''} alt="movie-poster" />
                                    </div>
                                )
                            }) : null}
                    </div>

                </div>
                
            </div>
                
                
                
                }
                
            

        </div>

    )
}

export default PersonDetails;


