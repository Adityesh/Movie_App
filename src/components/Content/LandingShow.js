import React, { useEffect, useState } from 'react';
import './Home.css';
import { fetchLandingShow, imageUrl } from '../../utils/landingPage';

const LandingShow = () => {
    const [show, setShow] = useState({});
    useEffect(() => {
        fetchLandingShow()
        .then(({result}) => {
            setShow(result);
        })
    }, [])

    
    
    return(
        
        <div className="landing-div">
            
        <img src={imageUrl(show.poster_path || null)} alt="show poster" draggable="false"/>
        <div>
            
                <p>{show.name ? show.name : null}</p>
                <p>({show.first_air_date ? show.first_air_date.substring(0,4) : null})</p>
                <p>&#9733;{show.vote_average ? show.vote_average : null}</p>
        </div>
        </div>
    )
}

export default LandingShow;